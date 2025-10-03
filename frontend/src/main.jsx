import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home.jsx";
import Books from "./Components/Pages/Books.jsx";
import BookDetails from "./Components/Pages/BookDetails.jsx";
import Login from "./Components/Auth/Login.jsx";
import Signup from "./Components/Auth/Signup.jsx";
import Profile from "./Components/Pages/Profile.jsx";
import BookFavorites from "./Components/Pages/BookFavorites.jsx";
import SetTheme from "./Components/Theme.js";

function Main() {
  const [theme, setTheme] = useState("Light"); // ✅ Inside component

  return (
    <SetTheme.Provider value={{ theme, setTheme }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/BookFavorites" element={<BookFavorites />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/books" element={<Books />} />
          <Route path="/BooksDetails" element={<BookDetails />} />
        </Routes>
      </Router>
    </SetTheme.Provider>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
