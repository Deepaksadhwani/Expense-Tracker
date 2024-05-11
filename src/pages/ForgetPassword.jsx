import React, { useState } from "react";
import { FIREBASE_KEY, USER_VERIFY_EMAIL } from "../utils/constants";
import Shimmer from "../components/Shimmer";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [statusText, setStatusText] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await fetch(USER_VERIFY_EMAIL + FIREBASE_KEY, {
      method: "POST",
      body: JSON.stringify({
        requestType: "PASSWORD_RESET",
        email: email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    setIsLoading(false);
    if (!response.ok) {
      setStatusText(data.error.message);
      setIsLoading(false);
    } else {
      setStatusText("Sent mail on" + data.email);
    }
  
  };

  return isLoading ? (
    <Shimmer />
  ) : (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="mx-auto max-w-md transform rounded-lg bg-white p-8 shadow-xl transition-all duration-500 hover:scale-105">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
          Forgot Password
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="mb-2 block font-bold text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full appearance-none rounded border border-gray-300 px-4 py-3 leading-tight text-gray-700 shadow focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Enter your email"
              required
            />
          </div>
          <p className="text-green-700 -mt-2 mb-2 text-center font-semibold">  {statusText}</p>
          <div className="flex justify-between gap-x-2">
            <button
              type="submit"
              className="focus:shadow-outline transform rounded-full bg-purple-600 px-6 py-3 font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-purple-700 focus:outline-none"
            >
              Reset Password
            </button>
            <button
              onClick={() => navigate("/login")}
              className="focus:shadow-outline transform rounded-full bg-purple-600 px-6 py-3 font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-purple-700 focus:outline-none"
            >
              Login Page
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
