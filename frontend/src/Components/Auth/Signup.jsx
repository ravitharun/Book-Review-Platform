import React, { useRef, useState } from "react";
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
import NavigateRoute from "../Route/NavigateRoute";

const Signup = () => {
  const Name = useRef("");
  const Email = useRef("");
  const Password = useRef("");
  const Confirmpassword = useRef("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Password match validation
    if (Password.current.value !== Confirmpassword.current.value) {
      alert("Passwords do not match!");
      return;
    }

    setLoading(true);

    try {
      // Name, Email, passowrd, ConfirmPassword
      const response = await axios.post(
        "http://localhost:3000/BookReview/Auth/Book/SignUp",
        {
          Name: Name.current.value,
          Email: Email.current.value,
          passowrd: Password.current.value,
          ConfirmPassword: Confirmpassword.current.value,
        }
      );
      
      if(response.data.message=="Created a new account!!"){
        alert(response.data.message)
        setTimeout(() => {
          NavigateRoute("/login")
        }, 25000);
      }
      // Optionally redirect to login page
    } catch (error) {
      console.error("Signup error:", error.message);
      alert("Error creating account. Try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white border-2 border-gray-300 rounded-xl shadow-xl overflow-hidden">
        {/* Left - Image */}
        <div className="md:w-1/2 relative h-80 md:h-auto">
          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80"
            alt="Books"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/30 backdrop-blur-md rounded-lg p-6 text-center max-w-xs">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome!
              </h1>
              <p className="text-gray-800 text-sm">
                Create an account and start reviewing books today.
              </p>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div className="md:w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Create Your Account
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Name
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                <AiOutlineUser className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full outline-none"
                  ref={Name}
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                <AiOutlineMail className="text-gray-400 mr-2" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full outline-none"
                  ref={Email}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Password
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                <AiOutlineLock className="text-gray-400 mr-2" />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full outline-none"
                  ref={Password}
                  required
                  minLength={6}
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Confirm Password
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                <AiOutlineLock className="text-gray-400 mr-2" />
                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="w-full outline-none"
                  ref={Confirmpassword}
                  required
                  minLength={6}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-200 flex items-center justify-center"
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>

          <p className="mt-6 text-center text-gray-600 text-sm">
            Already have an account?{" "}
            <Link to="/login">
              <span className="text-blue-600 hover:underline cursor-pointer font-medium">
                Login
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
