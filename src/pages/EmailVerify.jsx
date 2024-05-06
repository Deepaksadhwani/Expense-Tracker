import React, { useEffect } from "react";
import { useState } from "react";
import { FIREBASE_KEY, USER_VERIFY_EMAIL } from "../utils/constants";
import { useSelector } from "react-redux";
import Shimmer from "../components/Shimmer";

const EmailVerify = () => {
  const userToken = useSelector((store) => store.user.token);
  const userVerifiedStatus = useSelector((store) => store.user.userData);
  const { emailVerified } = userVerifiedStatus || {};
  const [error, setError] = useState(null);
  const [successfulStatusText, setSuccessfulStatusText] = useState(null);
  const [loading, setLoading] = useState(false);

  const verifyUserEmail = async () => {
    setLoading(true);
    const response = await fetch(USER_VERIFY_EMAIL + FIREBASE_KEY, {
      method: "POST",
      body: JSON.stringify({
        requestType: "VERIFY_EMAIL",
        idToken: userToken,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (response.ok) {
      console.log(data);
      setSuccessfulStatusText(
        "Verification Email is sent on " + data?.email,
      );
      setLoading(false);
    } else {
      setError("Too many attempts. Try again later.");
      console.log(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!emailVerified) {
      verifyUserEmail();
    } else {
      setSuccessfulStatusText("Your Email Is Already Verified.");
    }
  }, []);

  return loading ? (
    <Shimmer />
  ) : (
    <div className="flex h-screen flex-col items-center bg-gray-200 py-10">
      {successfulStatusText && (
        <div
          className="rounded-b border-t-4 border-green-500 bg-green-100 px-4 py-3 text-green-900 shadow-md"
          role="alert"
        >
          <div className="flex">
            <div className="py-1">
              <svg
                className="mr-4 h-6 w-6 fill-current text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM6.7 9.29L9 11.6l4.3-4.3 1.4 1.42-5.7 5.7-3.7-3.7 1.4-1.42z" />
              </svg>
            </div>
            <div>
              <p className="font-bold">{successfulStatusText}</p>
            </div>
          </div>
        </div>
      )}
      {error && (
        <div
          className="rounded-b border-t-4 border-red-500 bg-red-100 px-4 py-3 text-red-900 shadow-md"
          role="alert"
        >
          <div className="flex">
            <div className="py-1">
              <svg
                className="mr-4 h-6 w-6 fill-current text-red-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 5.41V11h2V5.41zM10 14.17l-4-4v-3h8v3l-4 4z" />
              </svg>
            </div>
            <div>
              <p className="font-bold">{error}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmailVerify;
