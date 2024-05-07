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

  useEffect(()=> {
    useGetUserData(dispatch, userToken)
  },[]);
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
      <div className="flex justify-between px-10">
        <button
          onClick={userUpdateInfoHandler}
          className="my-4 ml-[45%] btn"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default UserForm;
