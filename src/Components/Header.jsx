import React, { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
                {/* Logo */}
                <div className="text-2xl font-bold text-yellow-500">
                    <a href="/">Blogify</a>
                </div>

                {/* Navigation Links (Desktop) */}
                <nav className="hidden md:flex space-x-6">
                    <a
                        href="/"
                        className="text-gray-700 hover:text-yellow-500 font-medium transition duration-200"
                    >
                        Home
                    </a>
                    <a
                        href="/about"
                        className="text-gray-700 hover:text-yellow-500 font-medium transition duration-200"
                    >
                        About
                    </a>
                    <a
                        href="/blogs"
                        className="text-gray-700 hover:text-yellow-500 font-medium transition duration-200"
                    >
                        Blogs
                    </a>
                    <a
                        href="/contact"
                        className="text-gray-700 hover:text-yellow-500 font-medium transition duration-200"
                    >
                        Contact
                    </a>
                </nav>

                {/* Search Bar */}
                <div className="hidden md:flex items-center space-x-2">
                    <input
                        type="text"
                        placeholder="Search blogs..."
                        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                    <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition duration-200">
                        Search
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700 focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <nav className="md:hidden bg-white shadow-lg">
                    <a
                        href="/"
                        className="block py-2 px-4 text-gray-700 hover:bg-gray-100 hover:text-yellow-500"
                    >
                        Home
                    </a>
                    <a
                        href="/about"
                        className="block py-2 px-4 text-gray-700 hover:bg-gray-100 hover:text-yellow-500"
                    >
                        About
                    </a>
                    <a
                        href="/blogs"
                        className="block py-2 px-4 text-gray-700 hover:bg-gray-100 hover:text-yellow-500"
                    >
                        Blogs
                    </a>
                    <a
                        href="/contact"
                        className="block py-2 px-4 text-gray-700 hover:bg-gray-100 hover:text-yellow-500"
                    >
                        Contact
                    </a>
                    <div className="py-2 px-4">
                        <input
                            type="text"
                            placeholder="Search blogs..."
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                        <button className="w-full bg-yellow-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-yellow-600 transition duration-200">
                            Search
                        </button>
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Header;
