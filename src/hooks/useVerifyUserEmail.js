import { FIREBASE_KEY, USER_VERIFY_EMAIL } from "../utils/constants";
import { useSelector } from "react-redux";

const useVerifyUserEmail = () => {
  const userToken = useSelector((store) => store.user.token);


  const verifyUserEmail = async () => {
    const response = await fetch(USER_VERIFY_EMAIL + FIREBASE_KEY, {
      method: "POST",
      body: JSON.stringify({ requestType: "VERIFY_EMAIL", idToken: userToken }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  verifyUserEmail();
};

export default useVerifyUserEmail;
