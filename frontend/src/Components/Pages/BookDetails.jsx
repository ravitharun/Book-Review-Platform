import React, { useContext } from "react";
import Navbar from "../Navbar";
import Footer from "./Footer";
import { FaStar, FaCartPlus } from "react-icons/fa";
import SetTheme from "../Theme";

const books = [
  {
    id: 1,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    genre: "Thriller",
    price: "₹499",
    image: "https://m.media-amazon.com/images/I/81k0F2B4KCL._AC_UF1000,1000_QL80_.jpg",
    description: "A shocking psychological thriller...",
    rating: 4.5,
    reviews: [
      { id: 1, name: "Ravi", comment: "Amazing book!", stars: 5 },
      { id: 2, name: "Ananya", comment: "Good story.", stars: 4 },
    ],
  },
];

function BookDetails() {
  const { theme } = useContext(SetTheme);
  const book = books[0];

  return (
    <>
      <Navbar />
      <div className={`${theme==='Dark'?'bg-gray-900 text-white':'bg-gray-100 text-gray-900'} min-h-screen flex flex-col items-center py-10 px-4`}>
        <div className={`max-w-5xl w-full grid md:grid-cols-2 gap-8 p-8 rounded-xl shadow-lg ${theme==='Dark'?'bg-gray-800':'bg-white'}`}>
          <div className="flex justify-center">
            <img src={book.image} alt={book.title} className="w-72 h-auto rounded-lg shadow-md"/>
          </div>
          <div className="flex flex-col space-y-4">
            <h1 className="text-3xl font-bold">{book.title}</h1>
            <p>by <span className="font-medium">{book.author}</span></p>
            <p className="text-sm">Genre: {book.genre}</p>
            <p>{book.description}</p>
            <p className="text-xl font-semibold text-green-600">{book.price}</p>
            <div className="flex items-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i<Math.round(book.rating)?'text-yellow-500':'text-gray-300'} />
              ))}
              <span>({book.rating}/5)</span>
            </div>
            <div className="flex space-x-4 mt-4">
              <button className="flex items-center space-x-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"><FaCartPlus /><span>Add to Cart</span></button>
              <button className="px-5 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-100 transition">Buy Now</button>
            </div>
          </div>
        </div>

        <div className={`max-w-5xl w-full mt-10 p-6 rounded-xl shadow-md ${theme==='Dark'?'bg-gray-800':'bg-white'}`}>
          <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
          <div className="space-y-4">
            {book.reviews.map(r=>(
              <div key={r.id} className="border-b border-gray-200 pb-3 flex flex-col">
                <div className="flex items-center space-x-2">
                  <p className="font-medium">{r.name}</p>
                  <div className="flex">
                    {[...Array(5)].map((_, i)=>(
                      <FaStar key={i} className={i<r.stars?'text-yellow-500':'text-gray-300'} />
                    ))}
                  </div>
                </div>
                <p className="text-gray-400">{r.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default BookDetails;
