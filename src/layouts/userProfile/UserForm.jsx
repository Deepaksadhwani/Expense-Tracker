import React, { useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import useUpdateUserInfo from "../../hooks/useUpdateUserInfo";
import useGetUserData from "../../hooks/useGetUserData";

const UserForm = ({ onLoading }) => {
  const dispatch = useDispatch();
  const name = useRef(null);
  const userPhotoUrl = useRef(null);

  const userToken = useSelector((store) => store.user.token);
  const userData = useSelector((store) => store.user.userData);
  const { displayName, photoUrl } = userData || {};

  const userUpdateInfoHandler = async () => {
    onLoading(true);
    const postRequestDataForUpdateUserInfo = JSON.stringify({
      idToken: userToken,
      displayName: name.current.value,
      photoUrl: userPhotoUrl.current.value,
      returnSecureToken: true,
    });
    useUpdateUserInfo(postRequestDataForUpdateUserInfo);
    const timer = setTimeout(() => {
      onLoading(false);
    }, 700);
  };

  useEffect(() => {
    useGetUserData(dispatch, userToken);
  }, []);

  return (
    <div className="flex flex-col py-2 border-b border-black">
      <div className="mt-4 flex justify-between px-5 border-1">
        <div></div>
        <h2>Contact Details</h2>
        <button className="rounded-md border-2 border-red-500 p-1 text-red-500">
          Cancel
        </button>
      </div>
      <div className="mt-3 flex flex-col items-center space-y-4 px-4 md:flex-row md:justify-end md:space-x-10 md:space-y-0 md:px-20">
        <div className="flex items-center space-x-4">
          <FaGithub />
          <p>Full Name:</p>
          <input
            ref={name}
            type="text"
            defaultValue={displayName}
            name=""
            id=""
            className="border-2"
          />
        </div>
        <div className="flex items-center space-x-4">
          <RiGlobalLine />
          <p>Profile Photo URL</p>
          <input
            defaultValue={photoUrl}
            ref={userPhotoUrl}
            className="border-2"
            type="text"
            name=""
            id=""
          />
        </div>
      </div>
      <div className="flex justify-center px-10 mt-4">
        <button
          onClick={userUpdateInfoHandler}
          className="btn"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default UserForm;