import axios from "axios";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const RegistrationPage = () => {
    const isDark = useSelector((state) => state.theme.isDark);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [contactDetails, setContactDetails] = useState("");

    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            console.log({ username, password, email, fullName, contactDetails });
            
            const response = await axios.post(
                "http://localhost:8000/api/v1/users/register",
                { username, password, email, fullName, contactDetails }
            );

            console.log(response);

            navigate("/login")
            
        } catch (error) {
            console.error(response);
            console.error(error);
        }

        setContactDetails("");
        setEmail("");
        setFullName("");
        setUsername("");
        setPassword("");
    };

    return (
        <div
            className={`min-h-screen transition-colors duration-300 ${
                isDark ? "dark bg-gray-900" : "bg-gray-50"
            }`}
        >
            {/* Registration Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-2xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`text-4xl font-bold mb-8 text-center ${
                                isDark ? "text-white" : "text-gray-900"
                            }`}
                        >
                            Create Your Account
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className={`p-8 rounded-2xl shadow-lg ${
                                isDark ? "bg-gray-800" : "bg-white"
                            }`}
                        >
                            <form onSubmit={handleRegister}>
                                {/* Name Field */}
                                <div className="mb-6">
                                    <label
                                        className={`block text-sm font-medium mb-2 ${
                                            isDark
                                                ? "text-gray-300"
                                                : "text-gray-700"
                                        }`}
                                    >
                                        Full Name
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
                                            onChange={(e) =>
                                                setFullName(e.target.value)
                                            }
                                            className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                                                isDark
                                                    ? "bg-gray-700 border-gray-600 text-white"
                                                    : "bg-gray-50 border-gray-300 text-gray-900"
                                            } focus:ring-blue-500 focus:border-blue-500`}
                                            placeholder="John Doe"
                                        />
                                    </div>
                                </div>

                                {/* Username */}
                                <div className="mb-6">
                                    <label
                                        className={`block text-sm font-medium mb-2 ${
                                            isDark
                                                ? "text-gray-300"
                                                : "text-gray-700"
                                        }`}
                                    >
                                        Username
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
                                            onChange={(e) =>
                                                setUsername(e.target.value)
                                            }
                                            className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                                                isDark
                                                    ? "bg-gray-700 border-gray-600 text-white"
                                                    : "bg-gray-50 border-gray-300 text-gray-900"
                                            } focus:ring-blue-500 focus:border-blue-500`}
                                            placeholder="John Doe"
                                        />
                                    </div>
                                </div>

                                {/* Email Field */}
                                <div className="mb-6">
                                    <label
                                        className={`block text-sm font-medium mb-2 ${
                                            isDark
                                                ? "text-gray-300"
                                                : "text-gray-700"
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
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                            className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                                                isDark
                                                    ? "bg-gray-700 border-gray-600 text-white"
                                                    : "bg-gray-50 border-gray-300 text-gray-900"
                                            } focus:ring-blue-500 focus:border-blue-500`}
                                            placeholder="johndoe@example.com"
                                        />
                                    </div>
                                </div>

                                {/* Contact Details */}
                                <div className="mb-6">
                                    <label
                                        className={`block text-sm font-medium mb-2 ${
                                            isDark
                                                ? "text-gray-300"
                                                : "text-gray-700"
                                        }`}
                                    >
                                        Contact Details
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
                                            type="tel"
                                            onChange={(e) =>
                                                setContactDetails(
                                                    e.target.value
                                                )
                                            }
                                            className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                                                isDark
                                                    ? "bg-gray-700 border-gray-600 text-white"
                                                    : "bg-gray-50 border-gray-300 text-gray-900"
                                            } focus:ring-blue-500 focus:border-blue-500`}
                                            placeholder="(+91 91******50)"
                                        />
                                    </div>
                                </div>

                                {/* Password Field */}
                                <div className="mb-6">
                                    <label
                                        className={`block text-sm font-medium mb-2 ${
                                            isDark
                                                ? "text-gray-300"
                                                : "text-gray-700"
                                        }`}
                                    >
                                        Password
                                    </label>
                                    <div className="relative">
                                        <FaLock
                                            className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                                                isDark
                                                    ? "text-gray-400"
                                                    : "text-gray-500"
                                            }`}
                                        />
                                        <input
                                            type="password"
                                            onChange={(e) => setPassword(e.target.value)}
                                            className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                                                isDark
                                                    ? "bg-gray-700 border-gray-600 text-white"
                                                    : "bg-gray-50 border-gray-300 text-gray-900"
                                            } focus:ring-blue-500 focus:border-blue-500`}
                                            placeholder="********"
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
                                        Sign Up
                                    </button>
                                </div>

                                {/* Login Link */}
                                <div className="mt-6 text-center">
                                    <p
                                        className={`text-sm ${
                                            isDark
                                                ? "text-gray-400"
                                                : "text-gray-600"
                                        }`}
                                    >
                                        Already have an account?{" "}
                                        <Link
                                            to="/login"
                                            className={`font-semibold ${
                                                isDark
                                                    ? "text-blue-400 hover:text-blue-300"
                                                    : "text-blue-500 hover:text-blue-600"
                                            }`}
                                        >
                                            Log In
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RegistrationPage;
