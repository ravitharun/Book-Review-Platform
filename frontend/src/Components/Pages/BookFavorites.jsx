import React from "react";
import Navbar from "../Navbar";
import Footer from "./Footer";
import { FaHeart, FaBook, FaTrashAlt } from "react-icons/fa";

function BookFavorites() {
  // Sample data
  const favorites = [
    { id: 1, title: "Book One", author: "Author A" },
    { id: 2, title: "Book Two", author: "Author B" },
    { id: 3, title: "Book Three", author: "Author C" },
  ];

  return (
    <>
      <Navbar />

      {/* Page Container */}
      <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 py-12 px-4 mt-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-8 text-center">
            My Favorites
          </h2>

          {/* Favorites Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favorites.map((book) => (
              <div
                key={book.id}
                className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-lg p-6 flex flex-col hover:shadow-xl hover:scale-[1.02] transition"
              >
                {/* Book Image */}
                <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <FaBook className="text-gray-400 text-6xl" />
                </div>

                {/* Book Info */}
                <h3 className="text-lg font-bold text-gray-800">{book.title}</h3>
                <p className="text-gray-600 text-sm mb-4">by {book.author}</p>

                {/* Action Buttons */}
                <div className="flex justify-between mt-auto">
                  <button className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                    <FaHeart /> Remove
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                    <FaBook /> Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default BookFavorites;
