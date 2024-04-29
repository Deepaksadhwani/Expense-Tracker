import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import { auth } from "../utils/firebase";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [isSign, setIsSign] = useState(true);
  const [error, setError] = useState(true);

  const toggleSignInForm = () => {
    setIsSign((prev) => !prev);
  };

  const validationHandler =  async() => {
    const nameValue = name?.current?.value;
    const emailValue = email.current.value;
    const password = password.current.value
  }

  return (
    <div>
      <div className="flex w-[20%] flex-col  items-center">
        <h1>{isSign ? "Sign In" : "Sign Up"}</h1>
        {!isSign && <input ref={name} type="text" placeholder="Name" />}
        <input ref={email} type="email" placeholder="Email" />
        <input ref={password} type="password" placeholder="Password" />
        <button onclick={validationHandler}>{isSign ? "Sign In" : "Sign Up"}</button>
        <button onClick={toggleSignInForm}>
          {!isSign
            ? "Have an account? Login"
            : "Don't have an account? Sign Up"}
        </button>
      </div>
    </div>
  );
};

export default Login;
