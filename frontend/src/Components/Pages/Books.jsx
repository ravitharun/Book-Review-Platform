import React, { useContext, useEffect } from "react";
import Footer from "./Footer";
import Navbar from "../Navbar";
import { FaSearch, FaStar } from "react-icons/fa";
import AddBook from "./AddBook";
import SetTheme from "../Theme";
import axios from "axios";
import { useState } from "react";
import { BookStorage } from "../GetLocalStorage/CheckAuth";
import { FaEdit, FaTrash } from "react-icons/fa";

function Books() {
  const { theme } = useContext(SetTheme);
  const [AllBooks, setBooks] = useState([]);
  useEffect(() => {
    const GetAllBooks = async () => {
      try {
        const GetBooks = await axios.get(
          "http://localhost:3000/BookReview/Book/GetAllBooks"
        );

        setBooks(GetBooks.data.message);
      } catch (err) {
        console.log(err.message);
      }
    };
    GetAllBooks();
  }, []);

  // GetEditBook the book
  const GetEditBook = async (id) => {
    try {
      const Edit = await axios.put(
        "http://localhost:3000/BookReview/UpdateBook",
        {
          BookId: id,
        }
      );
      console.log(id);
    } catch (err) {
      console.log(err.message);
    }
  };
  // delete the book
  const DeleteBook = async (id) => {
    try {
      console.log(id)
    const response = await axios.delete(
      `http://localhost:3000/BookReview/deletebook/${id}`
    );
    console.log(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <Navbar />
      <div
        className={`${
          theme === "Dark"
            ? "bg-gray-900 text-white"
            : "bg-gray-100 text-gray-900"
        } min-h-screen py-12 px-4 mt-10`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Search & Filter Section */}
          <div className="bg-white/20 backdrop-blur-xl border border-white/30 p-6 rounded-2xl shadow-xl mb-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-center w-full md:w-1/3 bg-white/30 backdrop-blur-md rounded-xl px-4 py-2 shadow-inner border border-white/20">
                <FaSearch className="text-gray-700 mr-2" />
                <input
                  type="text"
                  placeholder="Search books..."
                  className="bg-transparent outline-none w-full text-gray-800 placeholder-gray-600"
                />
              </div>
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

          <AddBook />

          {/* Books Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            {AllBooks.map((book, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl shadow-lg flex flex-col hover:shadow-xl transition ${
                  theme === "Dark" ? "bg-gray-800 text-white" : "bg-white"
                }`}
              >
                <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden relative">
                  <img
                    src="https://tse1.mm.bing.net/th/id/OIP.-V-sQ--jzR8zQmW9z8pJzgHaFx?pid=Api&P=0&h=180"
                    alt="Book Cover"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-2 text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
                    Book Cover
                  </span>
                </div>

                <h3 className="text-lg font-bold">
                  {book.Title} {idx + 1}
                </h3>
                <p className="text-sm mb-2">{book.Author}</p>
                <p className="text-sm mb-4">{book.Description}</p>
                {book.Email == BookStorage.getEmail() ? (
                  <div className="flex space-x-3 mt-3">
                    <button
                      className="flex items-center gap-2 px-4 py-2 border-blue-500 hover:bg-blue-500  text-black rounded-lg shadow hover:opacity-90 transition"
                      onClick={() => GetEditBook(book._id)}
                    >
                      <FaEdit /> Edit
                    </button>
                    <button
                      className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:opacity-90 transition"
                      onClick={() => DeleteBook(book._id)}
                    >
                      <FaTrash /> Delete
                    </button>
                  </div>
                ) : null}
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`${
                        i < 4 ? "text-yellow-500" : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-500">(4.0)</span>
                </div>
                <button className="mt-auto px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Books;
