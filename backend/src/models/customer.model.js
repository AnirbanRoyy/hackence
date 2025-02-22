import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
        },
        phone: {
            type: String,
            required: true,
            minlength: 10,
            maxlength: 10,
        },
        query: {
            type: String,
            required: true,
            maxlength: 1000,
            trim: true,
        },
    },
    { timestamps: true }
);

export const Customer = mongoose.model("Customer", customerSchema);
