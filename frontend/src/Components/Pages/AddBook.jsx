import React, { useState, useContext } from "react";
import { FaBook, FaUser, FaAlignLeft, FaTag, FaCalendarAlt, FaTimes } from "react-icons/fa";
import SetTheme from "../Theme";

function AddBook({ onClose }) {
  const { theme } = useContext(SetTheme);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
    if (onClose) onClose();
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowModal(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm"
      >
        Add New Book
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4" onClick={handleClose}>
          <div
            className={`p-6 rounded-xl w-full max-w-md relative shadow-xl ${
              theme==='Dark'?'bg-gray-800 text-white':'bg-white text-gray-900'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-200"
            >
              <FaTimes size={18} />
            </button>

            <h2 className="text-xl font-bold mb-4 text-center">Add a New Book</h2>
            <form className="space-y-3">
              <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-2 py-1">
                <FaBook className="text-gray-500" />
                <input type="text" placeholder="Title" className="w-full outline-none text-sm bg-transparent text-current" />
              </div>

              <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-2 py-1">
                <FaUser className="text-gray-500" />
                <input type="text" placeholder="Author" className="w-full outline-none text-sm bg-transparent text-current" />
              </div>

              <div className="flex items-start gap-2 border border-gray-300 rounded-lg px-2 py-1">
                <FaAlignLeft className="text-gray-500 mt-1" />
                <textarea placeholder="Description" className="w-full outline-none resize-none text-sm bg-transparent text-current" rows={2}></textarea>
              </div>

              <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-2 py-1">
                <FaTag className="text-gray-500" />
                <input type="text" placeholder="Genre" className="w-full outline-none text-sm bg-transparent text-current" />
              </div>

              <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-2 py-1">
                <FaCalendarAlt className="text-gray-500" />
                <input type="number" placeholder="Published Year" className="w-full outline-none text-sm bg-transparent text-current" />
              </div>

              <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-1.5 rounded-lg hover:bg-blue-700 transition text-sm">
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
