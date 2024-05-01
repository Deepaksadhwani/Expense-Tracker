import React, { useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import useUpdateUserInfo from "../../hooks/useUpdateUserInfo";

const UserForm = () => {
  const dispatch = useDispatch();

  const name = useRef(null);
  const userPhotoUrl = useRef(null);
  const userToken = useSelector((store) => store.user.token);

  const userUpdateInfoHandler = async () => {
    const postRequestDataForUpdateUserInfo = JSON.stringify({
      idToken: userToken,
      displayName: name.current.value,
      photoUrl: userPhotoUrl.current.value,
      returnSecureToken: true,
    });

    useUpdateUserInfo(dispatch, postRequestDataForUpdateUserInfo);
  };

  return (
    <div className="flex-col  border-b border-black">
      <div className="border-1 mt-4 flex justify-between px-5">
        <div></div>
        <h2>Contact Details</h2>
        <button className="rounded-md border-2 border-red-500 p-1 text-red-500">
          Cancel
        </button>
      </div>
      <div className="mt-3 flex items-center justify-end space-x-10 px-20">
        <div className="flex items-center space-x-4">
          <FaGithub />
          <p>Full Name:</p>
          <input ref={name} type="text" name="" id="" className="border-2" />
        </div>
        <div className="flex items-center space-x-4">
          <RiGlobalLine />

          <p>Profile Photo URL</p>
          <input
            ref={userPhotoUrl}
            className="border-2"
            type="text"
            name=""
            id=""
          />
        </div>
      </div>
      <button onClick={userUpdateInfoHandler} className="ml-[45%] py-4">
        Update
      </button>
    </div>
  );
};

export default UserForm;
