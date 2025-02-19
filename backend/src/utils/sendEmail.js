// utils/email.js
import nodemailer from "nodemailer";
import { ApiError } from "./ApiError.js";

// Create a transporter object using Gmail
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail password or App Password
    },
});

/**
 * Sends an email to the specified recipient.
 * @param {string} to - The recipient's email address.
 * @param {string} subject - The subject of the email.
 * @param {string} text - The plain text body of the email.
 * @throws {ApiError} - Throws an error if the email fails to send.
 */
export const sendEmail = async (to, subject, text) => {
    const mailOptions = {
        from: process.env.EMAIL_USER, // Sender address
        to, // Recipient address
        subject, // Subject line
        text, // Plain text body
    };

    try {
        // Send the email
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
    } catch (error) {
        console.error("Error sending email:", error);
        throw new ApiError(500, "Failed to send email");
    }
};
