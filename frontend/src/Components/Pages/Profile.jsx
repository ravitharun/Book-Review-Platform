import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "./Footer";

function Profile() {
  const [showModal, setShowModal] = useState(false); // controls popup

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 py-10 px-4 flex flex-col items-center mt-10">
        {/* Profile Card */}
        <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-3xl text-center relative">
          <img
            src="https://i.pravatar.cc/120?img=5"
            alt="User"
            className="w-24 h-24 rounded-full mx-auto border-4 border-indigo-500"
          />
          <h2 className="mt-4 text-2xl font-bold text-gray-800">Ravi Tharun</h2>
          <p className="text-gray-600">Book Lover 📚 | MERN Developer 🚀</p>

          {/* Edit Button */}
          <button
            onClick={() => setShowModal(true)}
            className="absolute top-4 right-4 bg-indigo-500 text-white px-3 py-1 rounded-md hover:bg-indigo-600 text-sm"
          >
            Edit
          </button>
        </div>

        {/* Reviews Section */}
        <div className="w-full max-w-3xl mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            My Books & Reviews
          </h3>

          <div className="space-y-4">
            {/* Review Card */}
            <div className="bg-white shadow rounded-xl p-4 hover:shadow-md transition relative">
              <h4 className="font-bold text-lg text-indigo-600">Atomic Habits</h4>
              <p className="text-gray-700 mt-1">Great insights into building habits.</p>

              {/* Edit Button */}
              <button
                onClick={() => setShowModal(true)}
                className="absolute top-3 right-3 bg-gray-200 px-3 py-1 rounded-md text-sm hover:bg-gray-300"
              >
                Edit
              </button>
            </div>

            <div className="bg-white shadow rounded-xl p-4 hover:shadow-md transition relative">
              <h4 className="font-bold text-lg text-indigo-600">The Alchemist</h4>
              <p className="text-gray-700 mt-1">A magical story about dreams.</p>

              <button
                onClick={() => setShowModal(true)}
                className="absolute top-3 right-3 bg-gray-200 px-3 py-1 rounded-md text-sm hover:bg-gray-300"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ---- Popup Modal UI ---- */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-lg font-bold"
            >
              ✖
            </button>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Edit Details</h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Title / Name"
                className="w-full border p-2 rounded-md"
              />
              <textarea
                placeholder="Update Bio or Review..."
                className="w-full border p-2 rounded-md"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Profile;
