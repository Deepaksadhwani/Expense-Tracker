import React, { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import { FIREBASE_KEY, USER_SIGN_IN, USER_SIGN_UP } from "../utils/constants";
import bg1 from "/src/assets/bg1.png";
import { useNavigate } from "react-router-dom";
import { addToken } from "../store/userSlice";
import { useDispatch } from "react-redux";
import Shimmer from "../components/Shimmer";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [isSign, setIsSign] = useState(true);
  const [error, setError] = useState(true);
  const navigate = useNavigate();
  const toggleSignInForm = () => {
    setIsSign((prev) => !prev);
  };

  const validationHandler = async () => {
    setIsLoading(true);
    const nameValue = name?.current?.value;
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const message = checkValidData(nameValue, emailValue, passwordValue);
    console.log(message);
    setError(message);
    if (message) return;
    const postRequestData = JSON.stringify({
      email: emailValue,
      password: passwordValue,
      returnSecureToken: true,
    });
    if (!isSign) {
      const response = await fetch(USER_SIGN_UP + FIREBASE_KEY, {
        method: "POST",
        body: postRequestData,
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      useNavigate("/");
      if (!response.ok) {
        setError(data.error.message);
        setIsLoading(false);
      }

      localStorage.setItem("token", data?.idToken);
    } else {
      const response = await fetch(USER_SIGN_IN + FIREBASE_KEY, {
        method: "POST",
        body: postRequestData,
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log(data);
      navigate("/");
      localStorage.setItem("token", data?.idToken);

      if (!response.ok) {
        setError(data.error.message);
      }
    }
  };
  const userToken = localStorage.getItem("token");
  dispatch(addToken(userToken));
  if (isLoading) return <Shimmer />;
  return (
    <div className="relative z-10 flex h-screen items-center  justify-center bg-gradient-to-br from-black via-gray-700 to-black md:items-end ">
      <div className="flex w-[90%]  flex-col  items-center space-y-3 rounded-md border-2 bg-white py-20 shadow-md shadow-black border-gray-200  md:mb-[5%] md:ml-[35%]  md:w-[20%] md:py-10 ">
        <h1 className="mb-10 font-Mont text-3xl font-semibold text-blue-500  md:mb-0 ">
          {isSign ? "Sign In" : "Sign Up"}
        </h1>
        {!isSign && (
          <input
            ref={name}
            type="text"
            className=" border  border-gray-700 p-2  focus:border-blue-500 focus:outline-none"
            placeholder="Name"
          />
        )}
        <input
          className=" border  border-gray-700 p-2  focus:border-blue-500 focus:outline-none"
          ref={email}
          type="email"
          placeholder="Email"
        />
        <input
          className="mb-2 border  border-gray-700 p-2 focus:border-blue-500 focus:outline-none"
          ref={password}
          type="password"
          placeholder="Password"
        />
        <button className="font-semibold text-red-600">Forget password?</button>
        <p className="mt-1 font-medium text-red-800 ">{error}</p>
        <button
          className=" w-[60%] rounded-lg bg-blue-500 p-2 font-Mont font-semibold text-white transition-all duration-300 hover:bg-blue-700 md:w-[75%]"
          onClick={validationHandler}
        >
          {isSign ? "Sign In" : "Sign Up"}
        </button>
        <button
          className="font-semibold text-lime-600"
          onClick={toggleSignInForm}
        >
          {!isSign
            ? "Have an account? Login"
            : "Don't have an account? Sign Up"}
        </button>
      </div>
      <img
        src={bg1}
        alt=""
        className="absolute shadow-md  shadow-black z-[10] -left-5 top-40 w-40 md:left-[360px] md:top-[268px] md:w-[520px]"
      />
    
    </div>
  );
};

export default Login;
