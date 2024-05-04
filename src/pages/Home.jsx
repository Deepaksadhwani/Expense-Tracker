import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToken } from "../store/userSlice";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const moveToUserPageHandler = () => {
    navigate("/ProfilePage");
  };
  const logoutHandler = () => {
    localStorage.removeItem("token");
    dispatch(addToken());
    navigate("/");
  };

  return (
    <div className="flex items-center justify-between bg-cyan-100 px-10">
      <h1>Welcome to expense tracker</h1>
      <div className="flex items-center space-x-2 rounded-full bg-slate-400 ">
        <p className="btn" onClick={logoutHandler}>
          Logout
        </p>
        <p className="select-none rounded-full p-1">
          Your profile is incomplete
        </p>
        <button
          onClick={moveToUserPageHandler}
          className="rounded-full bg-white p-2 "
        >
          complete Now
        </button>
      </div>
    </div>
  );
};

export default Home;
