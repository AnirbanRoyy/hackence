import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import {
    FaChartLine,
    FaLock,
    FaRocket,
    FaBusinessTime,
    FaUsers,
    FaPaintBrush,
    FaClipboardList,
    FaSearch,
    FaClipboard,
    FaCalendarAlt,
    FaProductHunt,
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaVideo,
    FaPen,
    FaCamera,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import wallpaper from "../assets/sebastian-svenson-d2w-_1LJioQ-unsplash.jpg"; // Import your wallpaper image
import lightModeWallpaper from "../assets/light-mode.jpg"; // Import the light mode wallpaper image

const LandingPage = () => {
    let isDark = useSelector((state) => state.theme.isDark);

    const navigate = useNavigate(); // Use useNavigate hook

    const services = [
        {
            icon: <FaChartLine className="w-8 h-8" />,
            title: "Business Analysis",
            text: "Analyze your business data for better decision making.",
        },
        {
            icon: <FaBusinessTime className="w-8 h-8" />,
            title: "Business Management",
            text: "Manage your business operations efficiently.",
        },
        {
            icon: <FaPaintBrush className="w-8 h-8" />,
            title: "Graphic Design",
            text: "Create stunning graphics for your brand.",
        },
        {
            icon: <FaClipboardList className="w-8 h-8" />,
            title: "Market Research",
            text: "Conduct thorough market research for your business.",
        },
        {
            icon: <FaClipboard className="w-8 h-8" />,
            title: "Business Planning",
            text: "Plan your business strategies effectively.",
        },
        {
            icon: <FaCalendarAlt className="w-8 h-8" />,
            title: "Event Management",
            text: "Organize and manage events seamlessly.",
        },
        {
            icon: <FaProductHunt className="w-8 h-8" />,
            title: "Product Management",
            text: "Manage your product lifecycle efficiently.",
        },
        {
            icon: <FaFacebook className="w-8 h-8" />,
            title: "Social Media Marketing",
            text: "Promote your brand on social media platforms.",
        },
        {
            icon: <FaInstagram className="w-8 h-8" />,
            title: "Social Media Management",
            text: "Manage your social media accounts effectively.",
        },
        {
            icon: <FaUsers className="w-8 h-8" />,
            title: "Influencer Marketing",
            text: "Collaborate with influencers to promote your brand.",
        },
        {
            icon: <FaVideo className="w-8 h-8" />,
            title: "Video Editing",
            text: "Edit and create professional videos.",
        },
        {
            icon: <FaPen className="w-8 h-8" />,
            title: "Content Writing",
            text: "Create engaging content for your audience.",
        },
        {
            icon: <FaCamera className="w-8 h-8" />,
            title: "Photography",
            text: "Capture stunning photos for your brand.",
        },
    ];

    // Floating device mockup animation
    const FloatingDevice = () => (
        <motion.div
            initial={{ y: -20 }}
            animate={{ y: 20 }}
            transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "mirror",
            }}
            className="relative w-[36rem] h-[36rem]"
        >
            <DotLottieReact
                src="https://lottie.host/21e922d0-a937-4248-a2d8-3f811abbe40a/YGYG5ca5oF.lottie"
                loop
                autoplay
            />
        </motion.div>
    );

    // Custom Arrow Components
    const CustomPrevArrow = (props) => {
        const { currentSlide, slideCount, ...rest } = props; // Filter out unwanted props
        return (
            <div
                {...rest}
                className={`absolute top-1/2 -left-10 transform -translate-y-1/2 cursor-pointer p-2 rounded-full ${
                    isDark ? "bg-gray-800 text-white" : "bg-white text-gray-900"
                } shadow-lg hover:bg-blue-500 hover:text-white transition-all duration-300`}
            >
                <ChevronLeftIcon className="w-6 h-6" />
            </div>
        );
    };

    const CustomNextArrow = (props) => {
        const { currentSlide, slideCount, ...rest } = props; // Filter out unwanted props
        return (
            <div
                {...rest}
                className={`absolute top-1/2 -right-10 transform -translate-y-1/2 cursor-pointer p-2 rounded-full ${
                    isDark ? "bg-gray-800 text-white" : "bg-white text-gray-900"
                } shadow-lg hover:bg-blue-500 hover:text-white transition-all duration-300`}
            >
                <ChevronRightIcon className="w-6 h-6" />
            </div>
        );
    };

    // Updated Carousel Settings
    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "50px",
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    centerPadding: "50px",
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    centerPadding: "30px",
                },
            },
        ],
    };

    return (
        <div
            className={`min-h-screen transition-colors duration-300 ${
                isDark ? "dark bg-gray-900" : "bg-gray-50"
            }`}
            style={{
                backgroundImage: `url(${
                    isDark ? wallpaper : lightModeWallpaper
                })`,
                backgroundSize: "cover",
                backgroundRepeat: "repeat-x", // Repeat the background image horizontally
                backgroundPosition: "center top", // Position the background image at the top center
            }} // Add background image
        >
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
                                onClick={() => navigate("/contact-us")} // Corrected onClick handler
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

            {/* Services Section */}
            <section className="py-20" id="services">
                <div className="container mx-auto px-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`text-4xl font-bold mb-16 text-center ${
                            isDark ? "text-white" : "text-gray-900"
                        }`}
                    >
                        Our Services
                    </motion.h2>
                    <Slider {...carouselSettings}>
                        {services.map((service, index) => (
                            <div key={index} className="px-2 my-2">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className={`p-8 rounded-2xl transition-all duration-300 h-64 ${
                                        isDark
                                            ? "bg-gray-800 hover:bg-gray-700"
                                            : "bg-white hover:bg-gray-50 shadow-lg"
                                    }`}
                                    style={{
                                        backdropFilter: "blur(10px)",
                                        backgroundColor: isDark
                                            ? "rgba(31, 41, 55, 0.7)"
                                            : "rgba(255, 255, 255, 0.7)",
                                    }}
                                >
                                    <div className="text-blue-500 mb-6">
                                        {service.icon}
                                    </div>
                                    <h3
                                        className={`text-2xl font-bold mb-4 ${
                                            isDark
                                                ? "text-white"
                                                : "text-gray-900"
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
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20" id="why-choose-us">
                <div className="container mx-auto px-6 md:px-56">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`text-4xl font-bold mb-16 text-center ${
                            isDark ? "text-white" : "text-gray-900"
                        }`}
                    >
                        Why Choose Us
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`text-xl font-semibold text-center ${
                            isDark ? "text-gray-300" : "text-gray-600"
                        }`}
                        style={{ fontFamily: "'Cedarville Cursive', cursive" }}
                    >
                        At Hackence, we are dedicated to transforming your
                        digital presence with our innovative and cutting-edge
                        solutions. Our team of experts is committed to
                        delivering exceptional results that drive business
                        growth and success. We understand the unique challenges
                        faced by businesses in the digital age and offer
                        tailored solutions to meet your specific needs. Choose
                        us for our expertise, dedication, and passion for
                        excellence.
                    </motion.p>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20" id="cta">
                <div className="container mx-auto px-6 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        id="contact"
                        className={`text-4xl font-bold mb-8 ${
                            isDark ? "text-white" : "text-gray-900"
                        }`}
                    >
                        Ready to Transform Your Business?
                    </motion.h2>
                    <p
                        className={`mb-12 max-w-2xl mx-auto ${
                            isDark ? "text-gray-300" : "text-gray-600"
                        }`}
                    >
                        Join hundreds of satisfied clients who've already
                        revolutionized their digital presence with our expert
                        solutions.
                    </p>
                    <Link
                        to="/contact-us"
                        className={`md:text-lg mb-6 leading-tight px-12 py-4 rounded-full text-sm font-semibold transition-all duration-300 ${
                            isDark
                                ? "bg-blue-600 hover:bg-blue-700 text-white"
                                : "bg-blue-500 hover:bg-blue-600 text-white"
                        }`}
                    >
                        Schedule a Free Consultation
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
