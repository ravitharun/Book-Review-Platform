import React, { useContext } from "react";
import Navbar from "../Navbar";
import Footer from "./Footer";
import { FaHeart, FaBook } from "react-icons/fa";
import SetTheme from "../Theme";

function BookFavorites() {
  const { theme } = useContext(SetTheme);

  const favorites = [
    { id: 1, title: "Book One", author: "Author A" },
    { id: 2, title: "Book Two", author: "Author B" },
    { id: 3, title: "Book Three", author: "Author C" },
  ];

  return (
    <>
      <Navbar />
      <div className={`${theme==='Dark'?'bg-gray-900 text-white':'bg-gray-100 text-gray-900'} min-h-screen py-12 px-4 mt-10`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center">My Favorites</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favorites.map(book => (
              <div key={book.id} className={`p-6 rounded-2xl shadow-lg flex flex-col hover:shadow-xl transition ${theme==='Dark'?'bg-gray-800':'bg-white'}`}>
                <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <FaBook className="text-gray-400 text-6xl" />
                </div>
                <h3 className="text-lg font-bold">{book.title}</h3>
                <p className="text-gray-400 mb-4">by {book.author}</p>
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
