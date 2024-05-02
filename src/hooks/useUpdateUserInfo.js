import { FIREBASE_KEY, USER_UPDATE_INFO } from "../utils/constants";
import { setUserData } from "../store/userSlice";

const useUpdateUserInfo = async (
  dispatch,
  postRequestDataForUpdateUserInfo,
) => {
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
    dispatch(setUserData(data));
  }
  
};

export default useUpdateUserInfo;
