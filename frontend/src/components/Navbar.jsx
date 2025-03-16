import {
    ChevronRightIcon,
    SunIcon,
    MoonIcon,
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../features/theme/theme";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logout } from "../features/user/user";
import axios from "axios";

function Navbar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isDark = useSelector((state) => state.theme.isDark);
    const user = useSelector((state) => state.user?.user);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogout = async () => {
        try {
            const response = await axios.post(
                "http://localhost:8000/api/v1/users/logout"
            );
            console.log(response);
        } catch (error) {
            console.log(error);
        }
        dispatch(logout());
        navigate("/");
    };

    return (
        <div className="flex items-center justify-center align-middle">
            <nav
                className={`fixed rounded-3xl top-2 w-4/5 backdrop-blur-sm z-50 transition-all duration-300 ${
                    isDark ? "bg-gray-900/80" : "bg-white/80"
                }`}
            >
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo and Text */}
                        <Link
                            className={`flex items-center text-2xl font-bold ${
                                isDark ? "text-white" : "text-gray-900"
                            } hover:text-blue-500 transition-colors`}
                            to={"/"}
                        >
                            <img
                                src="/public/logo_hackence.jpg"
                                alt="Hackence Logo"
                                className="h-14 mr-2 rounded-full"
                            />
                            Hack<span className="text-blue-500">ence</span>
                        </Link>

                        <div className="flex items-center space-x-8">
                            <div className="hidden md:flex items-center space-x-8">
                                <NavLink
                                    to="/contact-us"
                                    className={({ isActive }) =>
                                        `px-4 py-2 rounded-lg transition-colors ${
                                            isDark
                                                ? "text-gray-300 hover:bg-gray-700"
                                                : "text-gray-600 hover:bg-gray-100"
                                        } ${
                                            isActive
                                                ? `${
                                                      isDark
                                                          ? "bg-blue-600 text-white"
                                                          : "bg-blue-500 text-white"
                                                  } font-semibold`
                                                : ""
                                        }`
                                    }
                                >
                                    Contact
                                </NavLink>

                                <button
                                    onClick={
                                        user
                                            ? handleLogout
                                            : () => navigate("/login")
                                    }
                                    className={`px-4 py-2 rounded-lg transition-colors ${
                                        isDark
                                            ? "text-gray-300 hover:bg-gray-700"
                                            : "text-gray-600 hover:bg-gray-100"
                                    }`}
                                >
                                    {user ? "Logout" : "Login"}
                                </button>
                            </div>

                            {/* Theme Toggle Button */}
                            <button
                                onClick={() => dispatch(toggleMode())}
                                className={`p-2 rounded-full transition-colors ${
                                    isDark
                                        ? "bg-gray-800 hover:bg-gray-700"
                                        : "bg-gray-200 hover:bg-gray-300"
                                }`}
                            >
                                {isDark ? (
                                    <SunIcon className="w-6 h-6 text-yellow-400" />
                                ) : (
                                    <MoonIcon className="w-6 h-6 text-gray-600" />
                                )}
                            </button>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                className="md:hidden p-2 rounded-full transition-colors"
                            >
                                {menuOpen ? (
                                    <XMarkIcon
                                        className={`w-6 h-6 ${
                                            isDark
                                                ? "text-white"
                                                : "text-gray-900"
                                        }`}
                                    />
                                ) : (
                                    <Bars3Icon
                                        className={`w-6 h-6 ${
                                            isDark
                                                ? "text-white"
                                                : "text-gray-900"
                                        }`}
                                    />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div
                        className={`md:hidden flex flex-col items-center space-y-2 py-2 ${
                            isDark ? "bg-gray-900/80" : "bg-white/80"
                        } backdrop-blur-md shadow-lg rounded-md mt-2`}
                    >
                        <NavLink
                            to="/contact-us"
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-lg transition-colors ${
                                    isDark
                                        ? "text-gray-300 hover:bg-gray-700"
                                        : "text-gray-600 hover:bg-gray-100"
                                } ${
                                    isActive
                                        ? `${
                                              isDark
                                                  ? "bg-blue-600 text-white"
                                                  : "bg-blue-500 text-white"
                                          } font-semibold`
                                        : ""
                                }`
                            }
                            onClick={() => setMenuOpen(false)}
                        >
                            Contact
                        </NavLink>

                        <button
                            onClick={() => {
                                if (user) {
                                    handleLogout();
                                } else {
                                    navigate("/login");
                                }
                                setMenuOpen(false);
                            }}
                            className={`px-4 py-2 rounded-lg transition-colors ${
                                isDark
                                    ? "text-gray-300 hover:bg-gray-700"
                                    : "text-gray-600 hover:bg-gray-100"
                            }`}
                        >
                            {user ? "Logout" : "Login"}
                        </button>
                    </div>
                )}
            </nav>
        </div>
    );
}

export default Navbar;
