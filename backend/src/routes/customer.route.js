import { Router } from "express";
import { contactUs } from "../controllers/customer.controller.js";

const router = Router();

router.route("/contact-us").post(contactUs);

export default router;
