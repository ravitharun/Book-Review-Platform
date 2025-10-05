import React, { useState, useContext } from "react";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineBook,
  AiOutlineLogin,
  AiOutlineLogout,
} from "react-icons/ai";
import { FaRegHeart, FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import SetTheme from "./Theme";
import { BookStorage } from "./GetLocalStorage/CheckAuth";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);

  // Use theme context
  const { theme, setTheme } = useContext(SetTheme);

  return (
    <nav
      className={`w-full ${
        theme === "Dark" ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      } backdrop-blur-xl border border-white/30 shadow-md fixed top-0 left-0 z-50`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/">
            <div className="flex-shrink-0 flex items-center cursor-pointer">
              <h1 className="text-2xl font-bold text-blue-700">BookReview</h1>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link
              to="/"
              className="flex items-center hover:text-blue-600 font-medium"
            >
              <AiOutlineHome className="mr-1" /> Home
            </Link>
            <Link
              to="/books"
              className="flex items-center hover:text-blue-600 font-medium"
            >
              <AiOutlineBook className="mr-1" /> Books
            </Link>

            <Link
              to="/BookFavorites"
              className="flex items-center hover:text-blue-600 font-medium"
            >
              <FaRegHeart className="mr-1" /> Favorites
            </Link>
            {BookStorage.getIsUserLogin ? (
              <Link
                to="/logout"
                className="flex items-center hover:text-blue-600 font-medium"
              >
                <AiOutlineLogout className="mr-1" /> Logout
              </Link>
            ) : (
              <Link
                to="/login"
                className="flex items-center hover:text-blue-600 font-medium"
              >
                <AiOutlineLogin className="mr-1" /> Login
              </Link>
            )}

            {/* Theme Dropdown */}
            <div className="relative">
              <button
                onClick={() => setThemeOpen(!themeOpen)}
                className="flex items-center justify-center p-2 bg-white/30 backdrop-blur-md rounded-full hover:bg-white/40 transition"
              >
                {theme === "Dark" ? (
                  <FaMoon className="text-gray-800" />
                ) : (
                  <FaSun className="text-gray-800" />
                )}
              </button>
              {themeOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white/30 backdrop-blur-md border border-white/20 rounded-lg py-2 shadow-lg">
                  <button
                    onClick={() => setTheme("Light")}
                    className="w-full text-left block px-4 py-2 hover:bg-white/40 flex items-center rounded-md"
                  >
                    <FaSun className="mr-2" /> Light Mode
                  </button>
                  <button
                    onClick={() => setTheme("Dark")}
                    className="w-full text-left block px-4 py-2 hover:bg-white/40 flex items-center rounded-md"
                  >
                    <FaMoon className="mr-2" /> Dark Mode
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-gray-800 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    mobileOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            className={`md:hidden mt-2 rounded-xl ${
              theme === "Dark"
                ? "bg-gray-900 text-white"
                : "bg-white text-gray-800"
            } backdrop-blur-xl border border-white/30 shadow-lg`}
          >
            <Link
              to="/"
              className="block px-4 py-3 hover:bg-white/40 flex items-center rounded-md"
            >
              <AiOutlineHome className="mr-2" /> Home
            </Link>
            <Link
              to="/books"
              className="block px-4 py-3 hover:bg-white/40 flex items-center rounded-md"
            >
              <AiOutlineBook className="mr-2" /> Books
            </Link>

            <Link
              to="/BookFavorites"
              className="block px-4 py-3 hover:bg-white/40 flex items-center rounded-md"
            >
              <FaRegHeart className="mr-2" /> Favorites
            </Link>
            <Link
              to="/login"
              className="block px-4 py-3 hover:bg-white/40 flex items-center rounded-md"
            >
              <AiOutlineLogin className="mr-2" /> Login
            </Link>

            {/* Mobile Theme Buttons */}
            <button
              onClick={() => setTheme("Light")}
              className="w-full text-left block px-4 py-3 hover:bg-white/40 flex items-center rounded-md"
            >
              <FaSun className="mr-2" /> Light Mode
            </button>
            <button
              onClick={() => setTheme("Dark")}
              className="w-full text-left block px-4 py-3 hover:bg-white/40 flex items-center rounded-md"
            >
              <FaMoon className="mr-2" /> Dark Mode
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
