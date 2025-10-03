import React from "react";
import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";
import Navbar from "./Components/Navbar";
import Home from "./Components/Pages/Home";
import BookDetails from "./Components/Pages/BookDetails";
import Books from "./Components/Pages/Books";
import ThemeContext from "./Components/ThemeContext";
import SetTheme from "./Components/Theme";


function App() {
  const Bgclr='DARK'
  return (
    <>
      <SetTheme.Provider value={Bgclr}>
        <Login></Login>
      </SetTheme.Provider>
    </>
  );
}

export default App;
