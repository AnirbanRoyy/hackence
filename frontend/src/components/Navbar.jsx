import {
    ChevronRightIcon,
    SunIcon,
    MoonIcon,
} from "@heroicons/react/24/outline";
import React from "react";
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

    const handleLogout = async () => {
        try {
            const response = await axios.post(
                "/api/v1/users/logout"
            );
            console.log(response);
        } catch (error) {
            console.log(error);
        }
        dispatch(logout());
        navigate("/");
    };

    return (
        <div>
            <nav
                className={`fixed rounded-full top-2 w-full backdrop-blur-sm z-50 transition-all duration-300 ${
                    isDark ? "bg-gray-900/80" : "bg-white/80"
                }`}
            >
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link
                            className={`text-2xl font-bold ${
                                isDark ? "text-white" : "text-gray-900"
                            } hover:text-blue-500 transition-colors`}
                            to={"/"}
                        >
                            Hack<span className="text-blue-500">ence</span>
                        </Link>

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
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
