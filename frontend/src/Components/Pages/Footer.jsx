import React, { useContext } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import SetTheme from "../Theme";

function Footer() {
  const { theme } = useContext(SetTheme);

  return (
    <footer className={`${theme==='Dark'?'bg-gray-900 text-gray-300':'bg-gray-100 text-gray-900'} px-6 md:px-16 py-10 mt-12`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-3">📚 BookReview</h2>
          <p className="text-sm leading-relaxed">
            Discover, share, and review your favorite books. Join our community and start your reading journey today.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="/about" className="hover:text-blue-400 transition">About</a></li>
            <li><a href="/contact" className="hover:text-blue-400 transition">Contact</a></li>
            <li><a href="/privacy" className="hover:text-blue-400 transition">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="text-white w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition"><FaFacebookF /></a>
            <a href="https://twitter.com" className=" text-white  w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-400 transition"><FaTwitter /></a>
            <a href="https://instagram.com" className=" text-white  w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-pink-500 transition"><FaInstagram /></a>
            <a href="https://linkedin.com" className=" text-white  w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-700 transition"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
      <div className="text-center text-sm mt-10 border-t pt-5 border-gray-700">
        © {new Date().getFullYear()} BookReview. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
