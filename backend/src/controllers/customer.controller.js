import { Customer } from "../models/customer.model";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { asyncHandler } from "../utils/asyncHandler";
import { sendEmail } from "../utils/sendEmail";

const contactUs = asyncHandler(async (req, res) => {
    const { name, email, phone, query } = req.body;

    if ([name, email, phone, query].some((field) => field?.trim() === "")) {
        throw new ApiError(
            400,
            "All fields are required when submitting contactUs form"
        );
    }

    const customer = Customer.create({
        name,
        email,
        phone,
        query,
    });

    if (!customer) {
        throw new ApiError(500, "Failed to create a new customer query in DB");
    }

    // Send email to admin
    const adminEmail = process.env.ADMIN_EMAIL; // Admin email from environment variables
    const subject = "New Contact Query";
    const text = `You have a new contact query:\n\nName: ${name}\nEmail: ${email}\nMessage: ${services}\nPhone: ${phone}`;

    sendEmail(adminEmail, subject, text);

    return res
        .status(200)
        .json(new ApiResponse(200, customer, "New Customer Query Saved in DB"));
});

export { contactUs };
