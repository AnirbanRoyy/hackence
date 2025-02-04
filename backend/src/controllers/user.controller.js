import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { sendEmail } from "../utils/sendEmail.js";

const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password, fullName, contactDetails } = req.body;

    // Validate required fields
    if (
        [username, email, password, fullName, contactDetails].some(
            (field) => field?.trim() === ""
        )
    ) {
        throw new ApiError(400, "Required fields are missing");
    }

    // Validate contactDetails is a number
    if (typeof contactDetails !== "number") {
        throw new ApiError(400, "Contact Details must be a number");
    }

    // Check if user already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
        throw new ApiError(400, "User already exists");
    }

    // Create new user
    const createdUser = await User.create({
        username,
        email,
        password,
        fullName,
        contactDetails,
    });
    if (!createdUser) {
        throw new ApiError(500, "Failed to create a user");
    }

    // Fetch user details (excluding sensitive fields)
    const user = await User.findOne({ username }).select(
        "-password -refreshToken"
    );

    // Send welcome email to the user
    const userEmailSubject = "Welcome to Our App";
    const userEmailText = `Hello ${fullName},\n\nThank you for registering with us. We are excited to have you on board!\n\nBest regards,\nTeam Hackence`;
    await sendEmail(email, userEmailSubject, userEmailText);

    // Send notification email to admin
    const adminEmail = process.env.ADMIN_EMAIL; // Admin email from environment variables
    const adminEmailSubject = "New User Registration";
    const adminEmailText = `A new user has registered:\n\nUsername: ${username}\nEmail: ${email}\nFull Name: ${fullName}\nContact Details: ${contactDetails}`;
    await sendEmail(adminEmail, adminEmailSubject, adminEmailText);

    // Return success response
    return res
        .status(201)
        .json(new ApiResponse(201, user, "User registered successfully"));
});

const generateTokens = async (userId) => {
    const user = User.findById(userId);

    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();

    if (!accessToken || !refreshToken) {
        throw new ApiError(500, "Failed to create tokens");
    }

    user.refreshToken = refreshToken;
    await user.save({
        validateBeforeSave: false,
    });

    return {
        accessToken,
        refreshToken,
    };
};

const loginUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;

    if (!username && !email) {
        throw new ApiError(
            400,
            "Both username and email are missing during login"
        );
    }

    const user = User.findOne({
        $or: [{ username }, { email }],
    }).select("-password -refreshToken");
    if (!user) {
        throw new ApiError(404, "No such user found");
    }

    const isPasswordValid = await user.isPasswordCorrect(password);
    if (!isPasswordValid) {
        throw new ApiError(403, "Invalid password during login");
    }

    const { accessToken, refreshToken } = await generateTokens(user._id);

    const cookieOptions = {
        httpOnly: true,
        secure: true,
    };

    return res
        .status(200)
        .cookie("accessToken", accessToken, cookieOptions)
        .cookie("refreshToken", refreshToken, cookieOptions)
        .json(
            new ApiResponse(
                200,
                { user, accessToken },
                "User logged in successfully"
            )
        );
});

const logoutUser = asyncHandler(async (req, res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set: {
                refreshToken: undefined,
            },
        },
        {
            new: true,
        }
    );

    const options = {
        httpOnly: true,
        secure: true,
    };

    return res
        .status(201)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(new ApiResponse(200, {}, "User logged out successfully"));
});

const refreshAccessToken = asyncHandler(async (req, res) => {
    // get the refreshToken
    const incomingRefreshToken =
        req.cookies?.refreshToken ||
        req.header("Authorization").replace("Bearer ", "");
    if (!incomingRefreshToken) {
        throw new ApiError(
            401,
            "refreshToken not found to refresh access token"
        );
    }

    // decode the token
    const decodedToken = jwt.verify(
        incomingRefreshToken,
        process.env.REFRESH_TOKEN_SECRET
    );

    const user = await User.findById(decodedToken?._id);

    if (!user) {
        throw new ApiError(401, "Invalid refreshToken");
    }

    // verify the token
    if (incomingRefreshToken !== user.refreshToken) {
        throw new ApiError(401, "refreshToken is expired or used");
    }

    // generate the new tokens
    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
        user._id
    );

    user.refreshToken = refreshToken;
    await user.save({
        validateBeforeSave: false,
    });

    const options = {
        httpOnly: true,
        secure: true,
    };

    // send cookies and a response
    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(
                200,
                {
                    accessToken,
                    refreshToken,
                },
                "New tokens generated successfully"
            )
        );
});

const changeCurrentPassword = asyncHandler(async (req, res) => {
    // get the passwords
    const { oldPassword, newPassword } = req.body;

    // we will be using verifyJwt middleware in user.route.js

    // get user from req
    const user = await User.findById(req.user?._id);

    // check if old password is correct
    const isPasswordValid = await user.isPasswordCorrect(oldPassword);
    if (!isPasswordValid) {
        throw new ApiError("Invalid oldPassword");
    }

    user.password = newPassword;
    await user.save({ validateBeforeSave: false });

    return res
        .status(200)
        .json(new ApiResponse(200, {}, "User password updated successfully!"));
});

const getCurrentUser = asyncHandler(async (req, res) => {
    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                req.user,
                "Current User details sent successfully"
            )
        );
});

const updateUserDetails = asyncHandler(async (req, res) => {
    const { email, fullName } = req.body;

    if (!email && !fullName) {
        throw new ApiError(400, "Send either email or fullName to update");
    }

    const user = await User.findByIdAndUpdate(
        req.user._id,
        {
            $set: {
                email: email || req.user.email,
                fullName: fullName || req.user.fullName,
            },
        },
        {
            new: true,
        }
    ).select("-password");

    return res
        .status(200)
        .json(new ApiResponse(200, user, "User details updated successfully"));
});

const contactUs = asyncHandler(async (req, res) => {
    const { name, email, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
        throw new ApiError(400, "Name, email, and message are required");
    }

    // Send email to admin
    const adminEmail = process.env.ADMIN_EMAIL; // Admin email from environment variables
    const subject = "New Contact Query";
    const text = `You have a new contact query:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;

    await sendEmail(adminEmail, subject, text);

    // Return success response
    return res
        .status(200)
        .json(
            new ApiResponse(200, {}, "Your message has been sent successfully")
        );
});

export {
    registerUser,
    loginUser,
    logoutUser,
    refreshAccessToken,
    changeCurrentPassword,
    getCurrentUser,
    updateUserDetails,
    contactUs,
};
