import React from "react";
import Footer from "./Footer";
import Navbar from "../Navbar";
import { FaSearch, FaStar } from "react-icons/fa";
import AddBook from "./AddBook";

function Books() {
  return (
    <>
      <Navbar />

      {/* Page Container */}
      <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 py-12 px-4 mt-10">
        <div className="max-w-7xl mx-auto">

          {/* Search & Filter Section */}
          <div className="bg-white/20 backdrop-blur-xl border border-white/30 p-6 rounded-2xl shadow-xl mb-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

              {/* Search */}
              <div className="flex items-center w-full md:w-1/3 bg-white/30 backdrop-blur-md rounded-xl px-4 py-2 shadow-inner border border-white/20">
                <FaSearch className="text-gray-700 mr-2" />
                <input
                  type="text"
                  placeholder="Search books..."
                  className="bg-transparent outline-none w-full text-gray-800 placeholder-gray-600"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-4">
                <select className="px-4 py-2 border border-white/30 bg-white/40 backdrop-blur-lg rounded-lg shadow-md hover:shadow-lg transition">
                  <option>Filter by Genre</option>
                  <option>Thriller</option>
                  <option>Romance</option>
                  <option>Science Fiction</option>
                  <option>History</option>
                </select>

                <select className="px-4 py-2 border border-white/30 bg-white/40 backdrop-blur-lg rounded-lg shadow-md hover:shadow-lg transition">
                  <option>Filter by Price</option>
                  <option>Under ₹500</option>
                  <option>₹500 - ₹1000</option>
                  <option>Above ₹1000</option>
                </select>

                <select className="px-4 py-2 border border-white/30 bg-white/40 backdrop-blur-lg rounded-lg shadow-md hover:shadow-lg transition">
                  <option>Filter by Rating</option>
                  <option>⭐ 5 Stars</option>
                  <option>⭐ 4+ Stars</option>
                  <option>⭐ 3+ Stars</option>
                </select>

                <select className="px-4 py-2 border border-white/30 bg-white/40 backdrop-blur-lg rounded-lg shadow-md hover:shadow-lg transition">
                  <option>Sort By</option>
                  <option>Newest</option>
                  <option>Popularity</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
         <AddBook  />
         <br />
         <br />

          {/* Books Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((book, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-lg p-6 flex flex-col hover:shadow-xl hover:scale-[1.01] transition"
              >
                {/* Book Image */}
                <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <span className="text-gray-500 text-sm">Book Cover</span>
                </div>

                {/* Book Info */}
                <h3 className="text-lg font-bold text-gray-800">
                  Book Title {index + 1}
                </h3>
                <p className="text-gray-600 text-sm mb-2">by Author Name</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  A short description of the book goes here. It gives readers a preview of the content and creates interest.
                </p>

                {/* Ratings */}
                <div className="flex items-center mb-4">
                  {Array.from({ length: 5 }, (_, i) => (
                    <FaStar
                      key={i}
                      className={`${i < 4 ? "text-yellow-500" : "text-gray-300"}`}
                    />
                  ))}
                  <span className="ml-2 text-gray-500 text-sm">(4.0)</span>
                </div>

                {/* Read More Button */}
                <button className="mt-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Read More
                </button>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-10 space-x-2">
            <button className="px-4 py-2 rounded-lg border bg-white/80 shadow hover:bg-gray-200 transition">
              Previous
            </button>
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                className={`px-4 py-2 rounded-lg border shadow ${
                  num === 1 ? "bg-blue-600 text-white" : "bg-white/80 hover:bg-gray-200"
                } transition`}
              >
                {num}
              </button>
            ))}
            <button className="px-4 py-2 rounded-lg border bg-white/80 shadow hover:bg-gray-200 transition">
              Next
            </button>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Books;
