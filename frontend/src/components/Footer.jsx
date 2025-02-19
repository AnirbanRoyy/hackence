import React from "react";
import { useSelector } from "react-redux";

function Footer() {
    const isDark = useSelector((state) => state.theme.isDark);
    return (
        <div>
            {/* Footer */}
            <footer className={`py-2 ${ isDark? "bg-gray-900 text-gray-300" : "bg-gray-50 text-gray-600" }`}>
                <div className="container mx-auto px-6">
                    <div className="text-center text-gray-400 ">
                        Made with ❤️ by Hackence
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
