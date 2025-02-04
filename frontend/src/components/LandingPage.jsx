import { useState } from "react";
import {
    ChevronRightIcon,
    SunIcon,
    MoonIcon,
} from "@heroicons/react/24/outline";
import { FaChartLine, FaLock, FaRocket } from "react-icons/fa";
import { FiSmartphone, FiCode, FiServer } from "react-icons/fi";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { motion } from "framer-motion";

const LandingPage = () => {
    const [isDark, setIsDark] = useState(true);

    const features = [
        {
            icon: <FaChartLine className="w-6 h-6" />,
            title: "Data Analytics",
            text: "Harness the power of big data for strategic decisions",
        },
        {
            icon: <FaLock className="w-6 h-6" />,
            title: "Cyber Security",
            text: "Military-grade protection for your digital assets",
        },
        {
            icon: <FaRocket className="w-6 h-6" />,
            title: "Cloud Solutions",
            text: "Scalable infrastructure for growing businesses",
        },
    ];

    const services = [
        {
            icon: <FiSmartphone className="w-8 h-8" />,
            title: "Mobile Development",
            text: "Native & cross-platform apps",
        },
        {
            icon: <FiCode className="w-8 h-8" />,
            title: "Web Development",
            text: "Modern web applications",
        },
        {
            icon: <FiServer className="w-8 h-8" />,
            title: "DevOps",
            text: "CI/CD & Infrastructure management",
        },
    ];

    const particlesInit = async (main) => {
        await loadFull(main);
    };

    // Floating device mockup animation
    const FloatingDevice = () => (
        <motion.div
            initial={{ y: -20 }}
            animate={{ y: 20 }}
            transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
            }}
            className="relative w-96 h-96"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 dark:from-blue-600 dark:to-purple-600 rounded-3xl transform rotate-12 shadow-2xl">
                <div className="absolute inset-2 bg-gray-100 dark:bg-gray-900 rounded-2xl p-4">
                    <div className="h-full bg-gray-200 dark:bg-gray-800 rounded-lg" />
                </div>
            </div>
        </motion.div>
    );

    return (
        <div
            className={`min-h-screen transition-colors duration-300 ${
                isDark ? "dark bg-gray-900" : "bg-gray-50"
            }`}
        >
            {/* Particles Background */}
            <div className="fixed inset-0 -z-10 opacity-50">
                <Particles
                    init={particlesInit}
                    options={{
                        particles: {
                            number: { value: 50 },
                            color: { value: isDark ? "#3B82F6" : "#60A5FA" },
                            opacity: { value: 0.5 },
                            size: { value: 1 },
                            links: {
                                enable: true,
                                color: isDark ? "#ffffff" : "#1F2937",
                                opacity: 0.2,
                            },
                            move: { enable: true, speed: 1 },
                        },
                    }}
                />
            </div>

            {/* Navigation */}
            <nav
                className={`fixed w-full backdrop-blur-lg z-50 transition-all duration-300 ${
                    isDark ? "bg-gray-900/80" : "bg-white/80"
                }`}
            >
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div
                            className={`text-2xl font-bold ${
                                isDark ? "text-white" : "text-gray-900"
                            }`}
                        >
                            Hack<span className="text-blue-500">ence</span>
                        </div>

                        <div className="hidden md:flex items-center space-x-8">
                            <a
                                href="#features"
                                className={`hover:text-blue-500 transition-colors ${
                                    isDark ? "text-gray-300" : "text-gray-600"
                                }`}
                            >
                                Features
                            </a>
                            <a
                                href="#services"
                                className={`hover:text-blue-500 transition-colors ${
                                    isDark ? "text-gray-300" : "text-gray-600"
                                }`}
                            >
                                Services
                            </a>
                            <a
                                href="#contact"
                                className={`hover:text-blue-500 transition-colors ${
                                    isDark ? "text-gray-300" : "text-gray-600"
                                }`}
                            >
                                Contact
                            </a>
                            <button
                                onClick={() => setIsDark(!isDark)}
                                className={`p-2 rounded-full ${
                                    isDark ? "bg-gray-800" : "bg-gray-200"
                                }`}
                            >
                                {isDark ? (
                                    <SunIcon className="w-6 h-6 text-yellow-400" />
                                ) : (
                                    <MoonIcon className="w-6 h-6 text-gray-600" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="pt-24 pb-12">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="md:w-1/2 mb-12 md:mb-0">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`text-5xl md:text-6xl font-bold mb-6 leading-tight ${
                                    isDark ? "text-white" : "text-gray-900"
                                }`}
                            >
                                Transform Your Digital Presence
                            </motion.h1>
                            <p
                                className={`text-lg mb-8 ${
                                    isDark ? "text-gray-300" : "text-gray-600"
                                }`}
                            >
                                Accelerate your business growth with our
                                cutting-edge technology solutions.
                            </p>
                            <button
                                className={`flex items-center px-8 py-4 rounded-full transition-all duration-300 ${
                                    isDark
                                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                                        : "bg-blue-500 hover:bg-blue-600 text-white"
                                }`}
                            >
                                Get Started
                                <ChevronRightIcon className="w-5 h-5 ml-2" />
                            </button>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <FloatingDevice />
                        </div>
                    </div>
                </div>
            </header>

            {/* Features Section */}
            <section className="py-20" id="features">
                <div className="container mx-auto px-6">
                    <h2
                        className={`text-4xl font-bold mb-16 text-center ${
                            isDark ? "text-white" : "text-gray-900"
                        }`}
                    >
                        Why Choose Us
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className={`p-8 rounded-2xl transition-all duration-300 ${
                                    isDark
                                        ? "bg-gray-800 hover:bg-gray-700"
                                        : "bg-white hover:bg-gray-50 shadow-lg"
                                }`}
                            >
                                <div className="text-blue-500 mb-4">
                                    {feature.icon}
                                </div>
                                <h3
                                    className={`text-2xl font-bold mb-4 ${
                                        isDark ? "text-white" : "text-gray-900"
                                    }`}
                                >
                                    {feature.title}
                                </h3>
                                <p
                                    className={
                                        isDark
                                            ? "text-gray-400"
                                            : "text-gray-600"
                                    }
                                >
                                    {feature.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20" id="services">
                <div className="container mx-auto px-6">
                    <h2
                        className={`text-4xl font-bold mb-16 text-center ${
                            isDark ? "text-white" : "text-gray-900"
                        }`}
                    >
                        Our Services
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className={`p-8 rounded-2xl transition-all duration-300 ${
                                    isDark
                                        ? "bg-gray-800 hover:bg-gray-700"
                                        : "bg-white hover:bg-gray-50 shadow-lg"
                                }`}
                            >
                                <div className="text-blue-500 mb-6">
                                    {service.icon}
                                </div>
                                <h3
                                    className={`text-2xl font-bold mb-4 ${
                                        isDark ? "text-white" : "text-gray-900"
                                    }`}
                                >
                                    {service.title}
                                </h3>
                                <p
                                    className={
                                        isDark
                                            ? "text-gray-400"
                                            : "text-gray-600"
                                    }
                                >
                                    {service.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20" id="cta">
                <div className="container mx-auto px-6 text-center">
                    <h2
                        className={`text-4xl font-bold mb-8 ${
                            isDark ? "text-white" : "text-gray-900"
                        }`}
                    >
                        Ready to Transform Your Business?
                    </h2>
                    <p
                        className={`mb-12 max-w-2xl mx-auto ${
                            isDark ? "text-gray-300" : "text-gray-600"
                        }`}
                    >
                        Join hundreds of satisfied clients who've already
                        revolutionized their digital presence with our expert
                        solutions.
                    </p>
                    <button
                        className={`px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 ${
                            isDark
                                ? "bg-blue-600 hover:bg-blue-700 text-white"
                                : "bg-blue-500 hover:bg-blue-600 text-white"
                        }`}
                    >
                        Schedule a Free Consultation
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer
                className={`py-12 ${isDark ? "bg-gray-800" : "bg-gray-100"}`}
            >
                <div className="container mx-auto px-6">
                    <div
                        className={`text-center ${
                            isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                    >
                        © 2025 Hackence. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
