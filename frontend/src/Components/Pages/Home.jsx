import React from "react";
import { AiOutlineBook, AiOutlineStar, AiOutlineUser } from "react-icons/ai";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6">
        {/* Hero Section */}
        <section className="text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Welcome to <span className="text-blue-600">BookReview</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Discover, share, and review your favorite books. Connect with a
            community of readers and explore new worlds through books.
          </p>
          <div className="space-x-4">
            <button className="px-6 py-2 bg-blue-500 text-white font-medium rounded-lg shadow hover:bg-blue-600 transition duration-300">
              Get Started
            </button>
            <button className="px-6 py-2 bg-gray-200 text-gray-800 font-medium rounded-lg shadow hover:bg-gray-300 transition duration-300">
              Learn More
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 w-full max-w-5xl">
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <AiOutlineBook className="text-blue-600 text-4xl mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Explore Books
            </h3>
            <p className="text-gray-600">
              Browse thousands of books across different genres and categories.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <AiOutlineStar className="text-yellow-500 text-4xl mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Write Reviews
            </h3>
            <p className="text-gray-600">
              Share your thoughts and rate books to help others find their next
              read.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <AiOutlineUser className="text-green-600 text-4xl mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Join Community
            </h3>
            <p className="text-gray-600">
              Connect with fellow readers, follow profiles, and grow together.
            </p>
          </div>
        </section>
      </div>

      <Footer></Footer>
    </>
  );
}

export default Home;
