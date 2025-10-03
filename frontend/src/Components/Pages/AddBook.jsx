import React, { useState } from "react";
import { FaBook, FaUser, FaAlignLeft, FaTag, FaCalendarAlt, FaTimes } from "react-icons/fa";

function AddBook({ onClose }) {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
    if (onClose) onClose();
  };

  return (
    <div className="relative" >
      {/* Button to open modal */}
      <button
        onClick={() => setShowModal(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm"
      >
        Add New Book
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4"  onClick={handleClose}>
          <div className="bg-white rounded-xl w-full max-w-md p-6 relative shadow-xl">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
            >
              <FaTimes size={18} />
            </button>

            <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
              Add a New Book
            </h2>

            <form className="space-y-3">
              {/* Title */}
              <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-2 py-1 focus-within:ring-2 focus-within:ring-blue-400">
                <FaBook className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Title"
                  className="w-full outline-none text-sm"
                />
              </div>

              {/* Author */}
              <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-2 py-1 focus-within:ring-2 focus-within:ring-blue-400">
                <FaUser className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Author"
                  className="w-full outline-none text-sm"
                />
              </div>

              {/* Description */}
              <div className="flex items-start gap-2 border border-gray-300 rounded-lg px-2 py-1 focus-within:ring-2 focus-within:ring-blue-400">
                <FaAlignLeft className="text-gray-500 mt-1" />
                <textarea
                  placeholder="Description"
                  className="w-full outline-none resize-none text-sm"
                  rows={2}
                ></textarea>
              </div>

              {/* Genre */}
              <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-2 py-1 focus-within:ring-2 focus-within:ring-blue-400">
                <FaTag className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Genre"
                  className="w-full outline-none text-sm"
                />
              </div>

              {/* Published Year */}
              <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-2 py-1 focus-within:ring-2 focus-within:ring-blue-400">
                <FaCalendarAlt className="text-gray-500" />
                <input
                  type="number"
                  placeholder="Published Year"
                  className="w-full outline-none text-sm"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-1.5 rounded-lg hover:bg-blue-700 transition text-sm"
              >
                Add Book
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddBook;
