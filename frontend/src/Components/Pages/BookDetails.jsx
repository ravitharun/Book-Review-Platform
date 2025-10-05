import React, { useContext, useRef, useState } from "react";
import Navbar from "../Navbar";
import Footer from "./Footer";
import { FaStar, FaCartPlus } from "react-icons/fa";
import SetTheme from "../Theme";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { BookStorage } from "../GetLocalStorage/CheckAuth";
function BookDetails() {
  const { theme } = useContext(SetTheme);
  const location = useLocation();
  const book = location.state;
  const [reviews, setReviews] = useState(book?.Reviews || []);
  const [newReview, setNewReview] = useState({
    name: "",
    comment: "",
    stars: 0,
  });
  console.log(book.Reviews, "book");
  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-red-500">No book details found!</p>
      </div>
    );
  }

  const handleAddReview = async (bookId) => {
    if (!newReview.name || !newReview.comment || newReview.stars === 0) return;

    const review = {
      id: Date.now(),
      ...newReview,
      bookId: bookId,
      Useremail: BookStorage.getEmail(),
    };

    const Addreview = await axios.post(
      "http://localhost:3000/BookReview/newreviews",
      {
        review: review,
      }
    );
    console.log(Addreview.data.message, "Addreview");
    setReviews([review, ...reviews]);
    setNewReview({ name: "", comment: "", stars: 0 });
  };
  const HandelDelete = (bookid) => {
    console.log("bookid to  delete", bookid);
  };
  const HandelEdit = (bookid) => {
    console.log("bookid to  EditS", bookid);
  };
  return (
    <>
      <Navbar />
      <div
        className={`${
          theme === "Dark"
            ? "bg-gray-900 text-white"
            : "bg-gray-100 text-gray-900"
        } min-h-screen flex flex-col items-center py-10 px-4 mt-10`}
      >
        {/* Book Info */}
        <div
          className={`max-w-5xl w-full grid md:grid-cols-2 gap-8 p-8 rounded-xl shadow-lg ${
            theme === "Dark" ? "bg-gray-800" : "bg-white"
          }`}
        >
          <div className="flex justify-center">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.-V-sQ--jzR8zQmW9z8pJzgHaFx?pid=Api&P=0&h=180"
              alt={book.Title}
              className="w-72 h-auto rounded-lg shadow-md hover:scale-105 transition-transform"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <h1 className="text-3xl font-bold">{book.Title}</h1>
            <p>
              by <span className="font-medium">{book.Author}</span>
            </p>
            <p className="text-sm">Genre: {book.Genre}</p>
            {book.PublishedYear && (
              <p className="text-sm">Published: {book.PublishedYear}</p>
            )}
            <p className="mt-2">{book.description}</p>
            <p className="text-xl font-semibold text-green-600">
              {book.price || "₹300"}
            </p>

            <div className="flex items-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={
                    i < Math.round(book.rating)
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }
                />
              ))}
              <span>({book.rating}/5)</span>
            </div>

            <div className="flex space-x-4 mt-4">
              <button className="flex items-center space-x-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
                <FaCartPlus />
                <span>Add to Cart</span>
              </button>
              <button className="px-5 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-100 transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div
          className={`max-w-5xl w-full mt-10 p-6 rounded-xl shadow-md ${
            theme === "Dark" ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>

          {/* Existing Reviews */}
          <div className="space-y-4 max-h-80 overflow-y-auto mb-6">
            {book.Reviews.length === 0 ? (
              <p className="text-gray-400">
                No reviews yet. Be the first to add one!
              </p>
            ) : (
              book.Reviews.map((r) => (
                <div
                  key={r.id}
                  className="border-b border-gray-200 pb-3 flex flex-col"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{r.reviewer}</p>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={
                            i < r.rating ? "text-yellow-500" : "text-gray-300"
                          }
                        />
                      ))}
                      {r.Useremail == BookStorage.getEmail() && (
                        <>
                          <button onClick={() => HandelEdit(r._id)}>
                            Edit
                          </button>
                          <br />
                          <br />
                          <button onClick={() => HandelDelete(r._id)}>
                            Delte
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-400 mt-1">{r.comment}</p>
                </div>
              ))
            )}
          </div>

          {/* Add Review Form */}
          <div className="flex flex-col space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              value={newReview.name}
              onChange={(e) =>
                setNewReview({ ...newReview, name: e.target.value })
              }
              className={`p-2 rounded border ${
                theme === "Dark"
                  ? "border-gray-600 bg-gray-700 text-white"
                  : "border-gray-300 bg-gray-50 text-gray-900"
              }`}
            />
            <textarea
              placeholder="Your Review"
              value={newReview.comment}
              onChange={(e) =>
                setNewReview({ ...newReview, comment: e.target.value })
              }
              className={`p-2 rounded border resize-none h-24 ${
                theme === "Dark"
                  ? "border-gray-600 bg-gray-700 text-white"
                  : "border-gray-300 bg-gray-50 text-gray-900"
              }`}
            />
            <div className="flex items-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`cursor-pointer ${
                    i < newReview.stars ? "text-yellow-500" : "text-gray-300"
                  }`}
                  onClick={() => setNewReview({ ...newReview, stars: i + 1 })}
                />
              ))}
              <span>{newReview.stars}/5</span>
            </div>
            <button
              onClick={() => handleAddReview(book._id)}
              className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Add Review
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BookDetails;
