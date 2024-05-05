import { FIREBASE_KEY, GET_USER_DATA } from "../utils/constants";
import { setUserData } from "../store/userSlice";

const useGetUserData = (dispatch, userToken) => {
  const getUserData = async () => {
    const response = await fetch(GET_USER_DATA + FIREBASE_KEY, {
      method: "POST",
      body: JSON.stringify({
        idToken: userToken,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data?.users[0]);
      localStorage.setItem("userData", JSON.stringify(data?.users[0]));
      const parseData = JSON.parse(localStorage.getItem("userData"));
      dispatch(setUserData(parseData));
    }
  };

  getUserData();
};

export default useGetUserData;
