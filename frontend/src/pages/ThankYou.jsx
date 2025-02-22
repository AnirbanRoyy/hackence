import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router-dom";

const ThankYou = () => {
    const isDark = useSelector((state) => state.theme.isDark);

    return (
        <div
            className={`min-h-screen flex items-center justify-center ${
                isDark ? "dark bg-gray-900" : "bg-gray-50"
            }`}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`max-w-2xl mx-auto p-8 rounded-2xl shadow-lg ${
                    isDark ? "bg-gray-800" : "bg-white"
                } relative`}
            >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <DotLottieReact
                        src="https://lottie.host/33763a58-3609-49ae-8e8f-710334478239/MdIgyxHh4q.lottie"
                        loop
                        autoplay
                    />
                </div>
                <h2
                    className={`text-5xl font-bold mb-8 text-center ${
                        isDark ? "text-white" : "text-gray-900"
                    }`}
                >
                    Thank You!
                </h2>
                <p
                    className={`text-lg text-center ${
                        isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                >
                    Thank you for contacting us! We'll get back to you soon.
                </p>
                <div className="text-center mt-8">
                    <Link
                        to="/"
                        className={`inline-block px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
                            isDark
                                ? "bg-blue-600 hover:bg-blue-700 text-white"
                                : "bg-blue-500 hover:bg-blue-600 text-white"
                        }`}
                    >
                        Go back to Home
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default ThankYou;
