import React from "react";
import Navbar from "../Navbar";
import { FaStar, FaCartPlus } from "react-icons/fa";

const books = [
  {
    id: 1,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    genre: "Thriller",
    price: "₹499",
    image: "https://m.media-amazon.com/images/I/81k0F2B4KCL._AC_UF1000,1000_QL80_.jpg",
    description:
      "A shocking psychological thriller of a woman's act of violence against her husband—and the therapist obsessed with uncovering her motive.",
    rating: 4.5,
    reviews: [
      { id: 1, name: "Ravi", comment: "Amazing book, loved the suspense!", stars: 5 },
      { id: 2, name: "Ananya", comment: "Good story but a bit slow in the middle.", stars: 4 },
    ],
  },
];

function BookDetails() {
  const book = books[0]; // single book for now

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
        {/* Container */}
        <div className="max-w-5xl w-full bg-white border border-gray-200 rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          
          {/* Book Image */}
          <div className="flex justify-center">
            <img
              src={book.image}
              alt={book.title}
              className="w-72 h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Book Info */}
          <div className="flex flex-col space-y-4">
            <h1 className="text-3xl font-bold text-gray-800">{book.title}</h1>
            <p className="text-lg text-gray-600">
              by <span className="font-medium">{book.author}</span>
            </p>
            <p className="text-sm text-gray-500">Genre: {book.genre}</p>
            <p className="text-gray-700">{book.description}</p>
            <p className="text-xl font-semibold text-green-600">{book.price}</p>

            {/* Rating */}
            <div className="flex items-center space-x-2">
              {Array.from({ length: 5 }, (_, i) => (
                <FaStar
                  key={i}
                  className={`${
                    i < Math.round(book.rating) ? "text-yellow-500" : "text-gray-300"
                  }`}
                />
              ))}
              <span className="text-gray-600">({book.rating}/5)</span>
            </div>

            {/* Buttons */}
            <div className="flex space-x-4 mt-4">
              <button className="flex items-center space-x-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
                <FaCartPlus /> <span>Add to Cart</span>
              </button>
              <button className="px-5 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-100 transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="max-w-5xl w-full mt-10 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
          <div className="space-y-4">
            {book.reviews.map((review) => (
              <div
                key={review.id}
                className="border-b border-gray-200 pb-3 flex flex-col"
              >
                <div className="flex items-center space-x-2">
                  <p className="font-medium">{review.name}</p>
                  <div className="flex">
                    {Array.from({ length: 5 }, (_, i) => (
                      <FaStar
                        key={i}
                        className={`${
                          i < review.stars ? "text-yellow-500" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default BookDetails;
