import React, { useState } from "react";
import { AiOutlineHome, AiOutlineUser, AiOutlineBook, AiOutlineLogin } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white/30 backdrop-blur-md border-b border-gray-200 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold text-blue-700">BookReview</h1>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="flex items-center text-gray-800 hover:text-blue-600 font-medium transition duration-200">
              <AiOutlineHome className="mr-1 text-lg" /> Home
            </Link>
            <Link to="/books" className="flex items-center text-gray-800 hover:text-blue-600 font-medium transition duration-200">
              <AiOutlineBook className="mr-1 text-lg" /> Books
            </Link>
            <a href="/profile" className="flex items-center text-gray-800 hover:text-blue-600 font-medium transition duration-200">
              <AiOutlineUser className="mr-1 text-lg" /> Profile
            </a>
            <Link t0="/login" className="flex items-center text-gray-800 hover:text-blue-600 font-medium transition duration-200">
              <AiOutlineLogin className="mr-1 text-lg" /> Login
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur-md border-t border-gray-200 shadow-lg">
            <a href="#home" className="block px-4 py-3 text-gray-800 hover:bg-blue-50 transition duration-200 flex items-center">
              <AiOutlineHome className="mr-2" /> Home
            </a>
            <a href="#books" className="block px-4 py-3 text-gray-800 hover:bg-blue-50 transition duration-200 flex items-center">
              <AiOutlineBook className="mr-2" /> Books
            </a>
            <a href="#profile" className="block px-4 py-3 text-gray-800 hover:bg-blue-50 transition duration-200 flex items-center">
              <AiOutlineUser className="mr-2" /> Profile
            </a>
            <a href="#login" className="block px-4 py-3 text-gray-800 hover:bg-blue-50 transition duration-200 flex items-center">
              <AiOutlineLogin className="mr-2" /> Login
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;