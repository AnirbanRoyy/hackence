import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";

const verifyJWT = asyncHandler(async (req, res) => {
    try {
        const token =
            req?.cookies?.accessToken ||
            req.header("Authorization").replace("Bearer ", "");

        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        if (!decodedToken) {
            throw new ApiError(400, "Token Verification failed");
        }

        const user = User.findById(decodedToken._id).select(
            "-password -refreshToken"
        );
        if (!user) {
            throw new ApiError(400, "Invalid access token");
        }

        req.user = user;
        next();
    } catch (error) {
        throw new ApiError(500, "Token verification failed");
    }
});

export { verifyJWT };
