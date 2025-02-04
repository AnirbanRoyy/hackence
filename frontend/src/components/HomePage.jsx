import React from "react";

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
            {/* Navigation */}
            <nav className="flex justify-between items-center p-6 bg-white shadow-md">
                <div className="text-2xl font-bold">CIRCLE</div>
                <ul className="flex space-x-6">
                    <li className="cursor-pointer hover:text-blue-600">Home</li>
                    <li className="cursor-pointer hover:text-blue-600">
                        Features
                    </li>
                    <li className="cursor-pointer hover:text-blue-600">
                        About
                    </li>
                    <li className="cursor-pointer hover:text-blue-600">
                        Contact
                    </li>
                </ul>
            </nav>

            {/* Hero Section */}
            <header
                className="flex flex-col items-center justify-center text-center p-20 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://via.placeholder.com/1500x800')", // Replace with your hero background image
                }}
            >
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
                    Welcome to CIRCLE
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl">
                    Create stunning web experiences with modern design and
                    innovative technology.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition">
                    Get Started
                </button>
            </header>

            {/* Features Section */}
            <section className="py-20 px-6 md:px-12">
                <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
                    <div className="bg-white p-8 rounded-lg shadow hover:shadow-xl transition">
                        <h2 className="text-2xl font-bold mb-3">Feature One</h2>
                        <p>
                            A brief description of the first feature, explaining
                            how it benefits users and enhances their experience.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow hover:shadow-xl transition">
                        <h2 className="text-2xl font-bold mb-3">Feature Two</h2>
                        <p>
                            A brief description of the second feature,
                            highlighting its unique design and functionality.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow hover:shadow-xl transition">
                        <h2 className="text-2xl font-bold mb-3">
                            Feature Three
                        </h2>
                        <p>
                            A brief description of the third feature, detailing
                            how it solves problems and provides value.
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white py-6 shadow-inner">
                <div className="max-w-6xl mx-auto text-center">
                    <p>
                        &copy; {new Date().getFullYear()} CIRCLE. All rights
                        reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
