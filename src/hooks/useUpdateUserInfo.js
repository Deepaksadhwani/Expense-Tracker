import toast from "react-hot-toast";
import { FIREBASE_KEY, USER_UPDATE_INFO } from "../utils/constants";

const useUpdateUserInfo = async (postRequestDataForUpdateUserInfo) => {
  const response = await fetch(USER_UPDATE_INFO + FIREBASE_KEY, {
    method: "POST",
    body: postRequestDataForUpdateUserInfo,
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    const data = await response.json();
    console.log(data);
    toast.success("Updated profile Successfully.");
  }
};

export default useUpdateUserInfo;
