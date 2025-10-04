import React, { useState, useContext, useRef, useEffect } from "react";
import {
  FaBook,
  FaUser,
  FaAlignLeft,
  FaTag,
  FaCalendarAlt,
  FaTimes,
} from "react-icons/fa";
import SetTheme from "../Theme";
import BookEmail_Ref from "../GetLocalStorage/CheckAuth";
function AddBook({ onClose }) {
  const { theme } = useContext(SetTheme);
  const [showModal, setShowModal] = useState(false);

  const Title = useRef(null);
  const Author = useRef(null);
  const Description = useRef(null);
  const Genre = useRef(null);
  const PublishedYear = useRef(null);

  useEffect(() => {
    if (Title.current) Title.current.focus();
  }, []);

  const handleClose = () => {
    setShowModal(false);
    if (onClose) onClose();
  };

  const Submit = (e) => {
    e.preventDefault();
    if (!Title.current.value) Title.current.focus();
    else if (!Author.current.value) Author.current.focus();
    else if (!Description.current.value) Description.current.focus();
    else if (!Genre.current.value) Genre.current.focus();
    else if (!PublishedYear.current.value) PublishedYear.current.focus();
    else {
      const BookData = {
        Title: Title.current.value,
        Author: Author.current.value,
        Description: Description.current.value,
        PublishedYear: PublishedYear.current.value,
        Genre: Genre.current.value,
        Email: BookEmail_Ref,
      };

      console.log("Calling API with book data...", BookData);
    }
  };

  const handleEnterFocus = (ev, nextRef) => {
    if (ev.key === "Enter" && nextRef?.current) {
      ev.preventDefault(); // prevent form submission
      nextRef.current.focus();
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowModal(true)}
        className="px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
      >
        Add New Book
      </button>

      {showModal && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4 overflow-auto"
          onClick={handleClose}
        >
          <div
            className={`p-8 rounded-2xl w-full max-w-lg relative shadow-2xl ${
              theme === "Dark"
                ? "bg-gray-900 text-white"
                : "bg-white text-gray-900"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-200"
            >
              <FaTimes size={22} />
            </button>

            <h2 className="text-2xl font-bold mb-6 text-center">
              Add a New Book
            </h2>
            <form className="space-y-4" onSubmit={Submit}>
              <div className="flex items-center gap-3 border border-gray-300 rounded-xl px-3 py-3">
                <FaBook className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Title"
                  ref={Title}
                  onKeyDown={(e) => handleEnterFocus(e, Author)}
                  className="w-full outline-none text-base bg-transparent text-current"
                />
              </div>

              <div className="flex items-center gap-3 border border-gray-300 rounded-xl px-3 py-3">
                <FaUser className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Author"
                  ref={Author}
                  onKeyDown={(e) => handleEnterFocus(e, Description)}
                  className="w-full outline-none text-base bg-transparent text-current"
                />
              </div>

              <div className="flex items-start gap-3 border border-gray-300 rounded-xl px-3 py-3">
                <FaAlignLeft className="text-gray-500 mt-1" />
                <textarea
                  placeholder="Description"
                  ref={Description}
                  onKeyDown={(e) => handleEnterFocus(e, Genre)}
                  className="w-full outline-none resize-none text-base bg-transparent text-current"
                  rows={3}
                ></textarea>
              </div>

              <div className="flex items-center gap-3 border border-gray-300 rounded-xl px-3 py-3">
                <FaTag className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Genre"
                  ref={Genre}
                  onKeyDown={(e) => handleEnterFocus(e, PublishedYear)}
                  className="w-full outline-none text-base bg-transparent text-current"
                />
              </div>

              <div className="flex items-center gap-3 border border-gray-300 rounded-xl px-3 py-3">
                <FaCalendarAlt className="text-gray-500" />
                <input
                  type="number"
                  placeholder="Published Year"
                  ref={PublishedYear}
                  onKeyDown={(e) => handleEnterFocus(e, null)}
                  className="w-full outline-none text-base bg-transparent text-current"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition text-base"
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
