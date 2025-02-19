import { Router } from "express";
import {
    changeCurrentPassword,
    contactUs,
    getCurrentUser,
    loginUser,
    logoutUser,
    refreshAccessToken,
    registerUser,
    updateUserDetails,
} from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(logoutUser);
router.route("/change-password").patch(verifyJWT, changeCurrentPassword);
router.route("/change-user-details").patch(verifyJWT, updateUserDetails);
router.route("/get-current-user").get(verifyJWT, getCurrentUser);
router.route("/refresh-access-token").post(verifyJWT, refreshAccessToken);
router.route("/contact-us").post(contactUs);

export default router;
