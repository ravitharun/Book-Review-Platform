
// import React, { useContext } from "react";
// import {
//   AiOutlineBook,
//   AiOutlineStar,
//   AiOutlineUser
// } from "react-icons/ai";
// import Footer from "./Footer";
// import Navbar from "../Navbar";
// import SetTheme from "../Theme";

// function Home() {
//   const { theme } = useContext(SetTheme);

//   const scrollToLearnMore = () => {
//     const section = document.getElementById("learn-more-section");
//     section?.scrollIntoView({ behavior: "smooth" });
//   };

//   // ✅ Zig-Zag Section with fixed image size
//   const zigZagSection = (title, text, imgUrl, reverse = false) => (
//     <div
//       className={`flex flex-col md:flex-row items-center my-16 gap-10 ${
//         reverse ? "md:flex-row-reverse" : ""
//       }`}
//     >
//       <div className="md:w-1/2 p-4">
//         <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
//         <p
//           className={`text-gray-500 ${
//             theme === "Dark" ? "dark:text-gray-300" : ""
//           }`}
//         >
//           {text}
//         </p>
//       </div>
//       <div className="md:w-1/2 p-4 flex justify-center">
//         <img
//           src={imgUrl}
//           alt={title}
//           className="rounded-xl shadow-md w-full max-w-md h-64 object-cover"
//         />
//       </div>
//     </div>
//   );

//   return (
//     <div
//       className={`flex flex-col min-h-screen ${
//         theme === "Dark"
//           ? "bg-gray-900 text-white"
//           : "bg-gray-100 text-gray-900"
//       }`}
//     >
//       <Navbar />

//       <main className="flex-grow flex flex-col items-center justify-start px-6 py-12 w-full">
//         {/* Hero Section */}
//         <section className="text-center max-w-3xl mt-12">
//           <h1
//             className={`text-4xl md:text-5xl font-bold mb-4 ${
//               theme === "Dark" ? "text-white" : "text-gray-800"
//             }`}
//           >
//             Welcome to <span className="text-blue-600">BookReview</span>
//           </h1>
//           <p
//             className={`text-lg mb-6 ${
//               theme === "Dark" ? "text-gray-300" : "text-gray-600"
//             }`}
//           >
//             Discover, share, and review your favorite books. Connect with a
//             community of readers and explore new worlds through books.
//           </p>
//           <div className="space-x-4">
//             <button
//               className={`px-6 py-2 font-medium rounded-lg shadow-lg transition duration-300 ${
//                 theme === "Dark"
//                   ? "bg-blue-600 text-white hover:bg-blue-700"
//                   : "bg-blue-500 text-white hover:bg-blue-600"
//               }`}
//             >
//               Get Started
//             </button>
//             <button
//               onClick={scrollToLearnMore}
//               className={`px-6 py-2 font-medium rounded-lg shadow-lg transition duration-300 ${
//                 theme === "Dark"
//                   ? "bg-gray-700 text-white hover:bg-gray-600"
//                   : "bg-gray-200 text-gray-800 hover:bg-gray-300"
//               }`}
//             >
//               Learn More
//             </button>
//           </div>
//         </section>

//         {/* Features Section */}
//         <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 w-full max-w-5xl">
//           {[
//             {
//               icon: (
//                 <AiOutlineBook className="text-blue-600 text-5xl mx-auto mb-4" />
//               ),
//               title: "Explore Books",
//               text: "Browse thousands of books across different genres and categories."
//             },
//             {
//               icon: (
//                 <AiOutlineStar className="text-yellow-500 text-5xl mx-auto mb-4" />
//               ),
//               title: "Write Reviews",
//               text: "Share your thoughts and rate books to help others find their next read."
//             },
//             {
//               icon: (
//                 <AiOutlineUser className="text-green-600 text-5xl mx-auto mb-4" />
//               ),
//               title: "Join Community",
//               text: "Connect with fellow readers, follow profiles, and grow together."
//             }
//           ].map((item, index) => (
//             <div
//               key={index}
//               className={`rounded-xl shadow-lg p-6 text-center transition hover:shadow-2xl transform hover:-translate-y-2 ${
//                 theme === "Dark"
//                   ? "bg-gray-800 text-white"
//                   : "bg-white text-gray-800"
//               }`}
//             >
//               {item.icon}
//               <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//               <p className="text-gray-400 md:text-gray-600">{item.text}</p>
//             </div>
//           ))}
//         </section>

//         {/* Zig-Zag Sections with Unsplash Images */}
//         {zigZagSection(
//           "Why Choose BookReview?",
//           "BookReview helps you discover new books, share honest reviews, and connect with a community of passionate readers. Track your reading, follow your favorite authors, and never run out of recommendations.",
//           "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80"
//         )}

//         {zigZagSection(
//           "What Users Love",
//           "Users love exploring new genres and finding books they wouldn’t discover anywhere else. They enjoy community feedback and tracking their reading stats.",
//           "https://images.unsplash.com/photo-1554774853-08cfa7ee8de2?auto=format&fit=crop&w=600&q=80",
//           true
//         )}

//         {zigZagSection(
//           "Tips for Users",
//           "Write honest reviews, follow readers with similar taste, explore new releases, participate in discussions, and track your reading stats for motivation and growth.",
//           "https://images.unsplash.com/photo-1581091215361-3a17d9d5d2f7?auto=format&fit=crop&w=600&q=80"
//         )}

//         {zigZagSection(
//           "Things to Keep in Mind",
//           "Some book ratings may be subjective. The community is growing, so detailed reading stats or challenges are still improving. Not every book has feedback yet.",
//           "https://images.unsplash.com/photo-1563201517-6b5be8d1d9a4?auto=format&fit=crop&w=600&q=80",
//           true
//         )}
//       </main>

//       <Footer />
//     </div>
//   );
// }

// export default Home;
import React, { useContext } from "react";
import {
  AiOutlineBook,
  AiOutlineStar,
  AiOutlineUser
} from "react-icons/ai";
import Footer from "./Footer";
import Navbar from "../Navbar";
import SetTheme from "../Theme";

function Home() {
  const { theme } = useContext(SetTheme);

  const scrollToLearnMore = () => {
    const section = document.getElementById("learn-more-section");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  // Reusable Zig-Zag Section
  const zigZagSection = (title, text, imgUrl, reverse = false) => (
    <div
      className={`flex flex-col md:flex-row items-center my-24 gap-8 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Text Content */}
      <div className="md:w-1/2 p-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
        <p
          className={`text-gray-500 ${
            theme === "Dark" ? "dark:text-gray-300" : ""
          }`}
        >
          {text}
        </p>
      </div>

      {/* Image */}
      <div className="md:w-1/2 p-4">
        <img
          src={imgUrl}
          alt={title}
          className="rounded-xl shadow-md w-full max-h-[350px] object-cover"
        />
      </div>
    </div>
  );

  return (
    <div
      className={`flex flex-col min-h-screen ${
        theme === "Dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-start px-6 py-12 w-full">
        {/* Hero Section */}
        <section className="text-center max-w-3xl mt-12">
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
              className={`px-6 py-2 font-medium rounded-lg shadow-lg transition duration-300 ${
                theme === "Dark"
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              Get Started
            </button>
            <button
              onClick={scrollToLearnMore}
              className={`px-6 py-2 font-medium rounded-lg shadow-lg transition duration-300 ${
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
          {[
            {
              icon: (
                <AiOutlineBook className="text-blue-600 text-5xl mx-auto mb-4" />
              ),
              title: "Explore Books",
              text: "Browse thousands of books across different genres and categories."
            },
            {
              icon: (
                <AiOutlineStar className="text-yellow-500 text-5xl mx-auto mb-4" />
              ),
              title: "Write Reviews",
              text: "Share your thoughts and rate books to help others find their next read."
            },
            {
              icon: (
                <AiOutlineUser className="text-green-600 text-5xl mx-auto mb-4" />
              ),
              title: "Join Community",
              text: "Connect with fellow readers, follow profiles, and grow together."
            }
          ].map((item, index) => (
            <div
              key={index}
              className={`rounded-xl shadow-lg p-6 text-center transition hover:shadow-2xl transform hover:-translate-y-2 ${
                theme === "Dark"
                  ? "bg-gray-800 text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              {item.icon}
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 md:text-gray-600">{item.text}</p>
            </div>
          ))}
        </section>

        {/* Learn More Section Anchor */}
        <div id="learn-more-section" className="w-full max-w-6xl">
          {zigZagSection(
            "Why Choose BookReview?",
            "BookReview helps you discover new books, share honest reviews, and connect with a community of passionate readers. Track your reading, follow your favorite authors, and never run out of recommendations.",
            "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80"
          )}

          {zigZagSection(
            "What Users Love",
            "Users love exploring new genres and finding books they wouldn’t discover anywhere else. They enjoy community feedback and tracking their reading stats.",
            "https://tse1.mm.bing.net/th/id/OIP.9zwWmPpUk0tJ8l3dWW9hOAHaJQ?pid=Api&P=0&h=180",
            true
          )}

          {zigZagSection(
            "Tips for Users",
            "Write honest reviews, follow readers with similar taste, explore new releases, participate in discussions, and track your reading stats for motivation and growth.",
            "https://images.unsplash.com/photo-1581091215361-3a17d9d5d2f7?auto=format&fit=crop&w=800&q=80"
          )}

          {zigZagSection(
            "Things to Keep in Mind",
            "Some book ratings may be subjective. The community is growing, so detailed reading stats or challenges are still improving. Not every book has feedback yet.",
            "https://images.unsplash.com/photo-1563201517-6b5be8d1d9a4?auto=format&fit=crop&w=800&q=80",
            true
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
