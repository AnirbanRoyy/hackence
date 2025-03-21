import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaUser, FaPhone, FaEnvelope, FaComment } from "react-icons/fa";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const ContactUs = () => {
    const isDark = useSelector((state) => state.theme.isDark);
    const navigate = useNavigate();
    // State for form inputs
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        query: "",
    });

    // State for loading
    const [isLoading, setIsLoading] = useState(false);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            // remove any spaces after the country code(+91) in phone number
            const phone = formData.phone.replace(/\s/g, "");

            // Update the form data with the cleaned phone number
            setFormData({ ...formData, phone });
            await axios.post(
                "http://localhost:8000/api/v1/customers/contact-us",
                { ...formData }
            );
            setTimeout(() => {
                setIsLoading(false);
                navigate("/thank-you");
            }, 4000); // Adjust the timeout duration to match the animation duration
        } catch (error) {
            setIsLoading(false);
            alert("There was an error submitting the form. Please try again.");
        }
    };

    return (
        <div
            className={`min-h-screen py-20 transition-colors duration-300 ${
                isDark ? "dark bg-gray-900" : "bg-gray-50"
            }`}
        >
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`max-w-2xl mx-auto p-8 rounded-2xl shadow-lg ${
                        isDark ? "bg-gray-800" : "bg-white"
                    }`}
                >
                    <h2
                        className={`text-3xl font-bold mb-8 text-center ${
                            isDark ? "text-white" : "text-gray-900"
                        }`}
                    >
                        Contact Us
                    </h2>
                    <form onSubmit={handleSubmit}>
                        {/* Name Field */}
                        <div className="mb-6">
                            <label
                                className={`block text-sm font-medium mb-2 ${
                                    isDark ? "text-gray-300" : "text-gray-700"
                                }`}
                            >
                                Name
                            </label>
                            <div className="relative">
                                <FaUser
                                    className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                                        isDark
                                            ? "text-gray-400"
                                            : "text-gray-500"
                                    }`}
                                />
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                                        isDark
                                            ? "bg-gray-700 border-gray-600 text-white"
                                            : "bg-gray-50 border-gray-300 text-gray-900"
                                    } focus:ring-blue-500 focus:border-blue-500`}
                                    placeholder="Alex Mercer"
                                    required
                                />
                            </div>
                        </div>

                        {/* Phone Number Field */}
                        <div className="mb-6">
                            <label
                                className={`block text-sm font-medium mb-2 ${
                                    isDark ? "text-gray-300" : "text-gray-700"
                                }`}
                            >
                                Phone Number
                            </label>
                            <div className="relative">
                                <FaPhone
                                    className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                                        isDark
                                            ? "text-gray-400"
                                            : "text-gray-500"
                                    }`}
                                />
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                                        isDark
                                            ? "bg-gray-700 border-gray-600 text-white"
                                            : "bg-gray-50 border-gray-300 text-gray-900"
                                    } focus:ring-blue-500 focus:border-blue-500`}
                                    placeholder="+91 987654321"
                                    required
                                />
                            </div>
                        </div>

                        {/* Email Field */}
                        <div className="mb-6">
                            <label
                                className={`block text-sm font-medium mb-2 ${
                                    isDark ? "text-gray-300" : "text-gray-700"
                                }`}
                            >
                                Email Address
                            </label>
                            <div className="relative">
                                <FaEnvelope
                                    className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                                        isDark
                                            ? "text-gray-400"
                                            : "text-gray-500"
                                    }`}
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                                        isDark
                                            ? "bg-gray-700 border-gray-600 text-white"
                                            : "bg-gray-50 border-gray-300 text-gray-900"
                                    } focus:ring-blue-500 focus:border-blue-500`}
                                    placeholder="alex.mercer@gmail.com"
                                    required
                                />
                            </div>
                        </div>

                        {/* Services Description Field */}
                        <div className="mb-6">
                            <label
                                className={`block text-sm font-medium mb-2 ${
                                    isDark ? "text-gray-300" : "text-gray-700"
                                }`}
                            >
                                Services Interested In
                            </label>
                            <div className="relative">
                                <FaComment
                                    className={`absolute left-3 top-4 ${
                                        isDark
                                            ? "text-gray-400"
                                            : "text-gray-500"
                                    }`}
                                />
                                <textarea
                                    name="query"
                                    value={formData.query}
                                    onChange={handleChange}
                                    className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                                        isDark
                                            ? "bg-gray-700 border-gray-600 text-white"
                                            : "bg-gray-50 border-gray-300 text-gray-900"
                                    } focus:ring-blue-500 focus:border-blue-500`}
                                    rows="4"
                                    placeholder="Describe the services you're interested in..."
                                    required
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="mt-8">
                            <button
                                type="submit"
                                className={`w-full px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
                                    isDark
                                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                                        : "bg-blue-500 hover:bg-blue-600 text-white"
                                }`}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
            {isLoading && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="p-4 rounded-lg shadow-lg">
                        <DotLottieReact
                            src="https://lottie.host/aaf78749-130c-4919-9050-bdd126c83b78/shLqgpSkWk.lottie"
                            loop
                            autoplay
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactUs;
