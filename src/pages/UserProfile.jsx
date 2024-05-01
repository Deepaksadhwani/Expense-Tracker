import React from "react";
import UserForm from "../layouts/userProfile/UserForm";

const UserProfile = () => {
  return (
    <div>
      <div className="flex w-full items-center justify-between border-b border-black px-10 pb-2  ">
        <h2>Winner never quite, Quitters never win.</h2>
        <p className="max-w-md break-words">
          your profile is 64% completed. A completed profile has higher chances
          of landing a job. Complete now
        </p>
      </div>

      <UserForm />
    </div>
  );
};

export default UserProfile;
