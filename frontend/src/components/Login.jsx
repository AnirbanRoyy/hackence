import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { login } from "../features/user/user";

const Login = () => {
    const isDark = useSelector((state) => state.theme.isDark);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Floating Balls Background
    const particlesInit = async (main) => {
        await loadSlim(main);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await axios.post(
            "/api/v1/users/login",
            { email, password }
        );

        const { data } = response.data;
        const { user } = data;

        if (!user) {
            setEmail("");
            setPassword("");
        }

        dispatch(login(user));
        navigate("/");
    };

    return (
        <div
            className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
                isDark ? "dark bg-gray-900" : "bg-gray-50"
            }`}
        >
            {/* Floating Balls Background */}
            <div className="fixed inset-0 -z-10">
                <Particles
                    init={particlesInit}
                    options={{
                        particles: {
                            number: {
                                value: 30,
                                density: {
                                    enable: true,
                                    value_area: 800,
                                },
                            },
                            color: {
                                value: isDark ? "#ffffff" : "#000000",
                            },
                            shape: {
                                type: "circle",
                            },
                            opacity: {
                                value: 0.7,
                                random: true,
                            },
                            size: {
                                value: 5,
                                random: true,
                            },
                            links: {
                                enable: false,
                            },
                            move: {
                                enable: true,
                                speed: 1,
                                direction: "none",
                                random: true,
                                straight: false,
                                out_mode: "bounce",
                            },
                        },
                        interactivity: {
                            events: {
                                onhover: {
                                    enable: false,
                                },
                                onclick: {
                                    enable: false,
                                },
                            },
                        },
                        retina_detect: true,
                    }}
                />
            </div>

            {/* Login Form */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`w-full max-w-md p-8 rounded-2xl shadow-lg ${
                    isDark ? "bg-gray-800" : "bg-white"
                }`}
            >
                <h2
                    className={`text-3xl font-bold mb-6 text-center ${
                        isDark ? "text-white" : "text-gray-900"
                    }`}
                >
                    Welcome Back
                </h2>
                <form onSubmit={handleSubmit}>
                    {/* Email Input */}
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className={`block text-sm font-medium mb-2 ${
                                isDark ? "text-gray-300" : "text-gray-700"
                            }`}
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            className={`w-full px-4 py-2 rounded-lg border ${
                                isDark
                                    ? "bg-gray-700 border-gray-600 text-white"
                                    : "bg-white border-gray-300 text-gray-900"
                            } focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300`}
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className={`block text-sm font-medium mb-2 ${
                                isDark ? "text-gray-300" : "text-gray-700"
                            }`}
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            className={`w-full px-4 py-2 rounded-lg border ${
                                isDark
                                    ? "bg-gray-700 border-gray-600 text-white"
                                    : "bg-white border-gray-300 text-gray-900"
                            } focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300`}
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    {/* Remember Me Checkbox */}
                    <div className="flex items-center mb-6">
                        <input
                            type="checkbox"
                            id="remember"
                            className={`w-4 h-4 rounded ${
                                isDark
                                    ? "bg-gray-700 border-gray-600"
                                    : "bg-white border-gray-300"
                            } focus:ring-blue-500`}
                        />
                        <label
                            htmlFor="remember"
                            className={`ml-2 text-sm ${
                                isDark ? "text-gray-300" : "text-gray-700"
                            }`}
                        >
                            Remember me
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className={`w-full flex items-center justify-center px-4 py-2 rounded-full transition-all duration-300 ${
                            isDark
                                ? "bg-blue-600 hover:bg-blue-700 text-white"
                                : "bg-blue-500 hover:bg-blue-600 text-white"
                        }`}
                    >
                        Log In
                        <ChevronRightIcon className="w-5 h-5 ml-2" />
                    </button>

                    {/* Forgot Password Link */}
                    <div className="mt-4 text-center">
                        <a
                            href="#forgot-password"
                            className={`text-sm ${
                                isDark
                                    ? "text-blue-400 hover:text-blue-300"
                                    : "text-blue-600 hover:text-blue-500"
                            } transition-all duration-300`}
                        >
                            Forgot password?
                        </a>
                    </div>

                    {/* Sign Up Link */}
                    <div className="mt-6 text-center">
                        <p
                            className={`text-sm ${
                                isDark ? "text-gray-400" : "text-gray-600"
                            }`}
                        >
                            Don't have an account?{" "}
                            <Link
                                to="/register"
                                className={`font-semibold ${
                                    isDark
                                        ? "text-blue-400 hover:text-blue-300"
                                        : "text-blue-600 hover:text-blue-500"
                                } transition-all duration-300`}
                            >
                                Sign up
                            </Link>
                        </p>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export default Login;
