import { useEffect, useRef, useState } from "react";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import useAppNavigate from "../Route/useAppNavigate";
const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [Islogin, setIslogin] = useState(false);
  const [errors, setErrors] = useState({ email: false, password: false });
  const navigate = useNavigate();
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value.trim();

    if (!email || !password) {
      setErrors({
        email: !email,
        password: !password,
      });
      if (!email) emailRef.current.focus();
      else passwordRef.current.focus();
    } else {
      setErrors({ email: false, password: false });

      const ValidData = await axios.get(
        "http://localhost:3000/BookReview/Auth/Books/Login",
        {
          params: {
            email,
            password,
          },
        }
      );
      console.log(ValidData.data)
      if (ValidData.data.AlertMessage == "Account Login sucessfully !") {
        alert(ValidData.data.AlertMessage)
        setIslogin((prev) => !prev);
        localStorage.setItem("BookEmail_Ref", ValidData.data.message);
        localStorage.setItem("BookUserToken_Ref", ValidData.data.Token);
        // Reset inputs if needed
        emailRef.current.value = "";
        passwordRef.current.value = "";
        navigate("/");
      }
    }
  };

  localStorage.setItem("BookIsUserLogin_Ref", Islogin);
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      if (e.target === emailRef.current) passwordRef.current.focus();
      else handleLogin(e);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white border border-gray-300 rounded-xl shadow-xl overflow-hidden">
        {/* Left Image */}
        <div className="md:w-1/2 relative h-80 md:h-auto">
          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80"
            alt="Books"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/40 backdrop-blur-md rounded-lg p-6 text-center max-w-xs">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome Back!
              </h1>
              <p className="text-gray-800 text-sm">
                Discover and review your favorite books.
              </p>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="md:w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Login to Your Account
          </h2>

          <form className="space-y-4" onSubmit={handleLogin}>
            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <div
                className={`flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 ${
                  errors.email
                    ? "border-red-500 ring-red-200"
                    : "border-gray-300 focus-within:ring-blue-500"
                }`}
              >
                <AiOutlineMail className="text-gray-400 mr-2" />
                <input
                  type="email"
                  ref={emailRef}
                  onKeyUp={handleEnter}
                  placeholder="Enter your email"
                  className="w-full outline-none bg-transparent"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">Email is required</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Password
              </label>
              <div
                className={`flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 ${
                  errors.password
                    ? "border-red-500 ring-red-200"
                    : "border-gray-300 focus-within:ring-blue-500"
                }`}
              >
                <AiOutlineLock className="text-gray-400 mr-2" />
                <input
                  type="password"
                  ref={passwordRef}
                  onKeyUp={handleEnter}
                  placeholder="Enter your password"
                  className="w-full outline-none bg-transparent"
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  Password is required
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-200 flex items-center justify-center"
            >
              Login
            </button>
          </form>

          <p className="mt-6 text-center text-gray-600 text-sm">
            Don't have an account?{" "}
            <Link to="/signup">
              <span className="text-blue-600 hover:underline cursor-pointer font-medium">
                Sign Up
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
