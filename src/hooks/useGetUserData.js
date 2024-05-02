import { FIREBASE_KEY, GET_USER_DATA } from "../utils/constants";

const useGetUserData = (userToken) => {
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

    const data = await response.json();
    console.log(data?.users[0]);

    return data;
  };

  getUserData();
};

export default useGetUserData;