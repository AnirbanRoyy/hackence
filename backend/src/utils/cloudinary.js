import { v2 as cloudinary } from "cloudinary";
import { asyncHandler } from "./asyncHandler.js";
import { ApiError } from "./ApiError.js";

// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = asyncHandler(async (localFilePath) => {
    try {
        if (!localFilePath) return null;

        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        });
        return response;
    } catch (error) {
        throw new ApiError(500, `Cloudinary upload error -> ${error}`);
    }
});

export { uploadOnCloudinary };
