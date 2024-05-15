  import React, { useEffect, useState } from "react";
  import UserForm from "../layouts/userProfile/UserForm";
  import Shimmer from "../components/Shimmer";
  const UserProfile = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      
      const timer = setTimeout(() => {
        setLoading(false);
      }, 700);
      
      return () => clearTimeout(timer);
    }, []);
    return (
      <div className="mb-60">
        <div className="flex w-full items-center  justify-between border-b border-black px-10 pb-2  ">
          <h2>Winner never quite, Quitters never win.</h2>
          <p className="max-w-md break-words">
            your profile is 64% completed. A completed profile has higher chances
            of landing a job. Complete now
          </p>
        </div>
        
        { loading ? <Shimmer/> : <UserForm onLoading={setLoading}/> }
      </div>
    );
  };

  export default UserProfile;
