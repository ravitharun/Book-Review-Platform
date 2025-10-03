import React, { useContext } from "react";
import { AiOutlineBook, AiOutlineStar, AiOutlineUser } from "react-icons/ai";
import Footer from "./Footer";
import Navbar from "../Navbar";
import SetTheme from "../Theme";

function Home() {
  const { theme, setTheme } = useContext(SetTheme);
  console.log(theme, "theme");

  return (
    <>
      <Navbar />

      <div
        className={`min-h-screen flex flex-col items-center justify-center px-6 ${
          theme === "Dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
        }`}
      >
        {/* Hero Section */}
        <section className="text-center max-w-3xl mt-24">
          <h1
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              theme === "Dark" ? "text-white" : "text-gray-800"
            }`}
          >
            Welcome to <span className="text-blue-600">BookReview</span>
          </h1>
          <p
            className={`text-lg mb-6 ${
              theme === "Dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Discover, share, and review your favorite books. Connect with a
            community of readers and explore new worlds through books.
          </p>
          <div className="space-x-4">
            <button
              className={`px-6 py-2 font-medium rounded-lg shadow transition duration-300 ${
                theme === "Dark"
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              Get Started
            </button>
            <button
              className={`px-6 py-2 font-medium rounded-lg shadow transition duration-300 ${
                theme === "Dark"
                  ? "bg-gray-700 text-white hover:bg-gray-600"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              Learn More
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 w-full max-w-5xl">
          <div
            className={`rounded-xl shadow-md p-6 text-center transition hover:shadow-lg ${
              theme === "Dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"
            }`}
          >
            <AiOutlineBook className="text-blue-600 text-4xl mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-2">Explore Books</h3>
            <p className="text-gray-400 md:text-gray-600">
              Browse thousands of books across different genres and categories.
            </p>
          </div>

          <div
            className={`rounded-xl shadow-md p-6 text-center transition hover:shadow-lg ${
              theme === "Dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"
            }`}
          >
            <AiOutlineStar className="text-yellow-500 text-4xl mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-2">Write Reviews</h3>
            <p className="text-gray-400 md:text-gray-600">
              Share your thoughts and rate books to help others find their next
              read.
            </p>
          </div>

          <div
            className={`rounded-xl shadow-md p-6 text-center transition hover:shadow-lg ${
              theme === "Dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"
            }`}
          >
            <AiOutlineUser className="text-green-600 text-4xl mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-2">Join Community</h3>
            <p className="text-gray-400 md:text-gray-600">
              Connect with fellow readers, follow profiles, and grow together.
            </p>
          </div>
        </section>
      </div>
      <Footer />

    </>
  );
}

export default Home;
