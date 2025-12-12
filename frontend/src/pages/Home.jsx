import { useState } from "react";
import { useCookies } from "react-cookie";
import { ToastContainer } from "react-toastify";

const Home = () => {
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

  const Logout = () => {
    removeCookie("token", { path: "/" });
    window.location.href = process.env.REACT_APP_DASHBOARD_URL;
  };

  return (
    <>
      <div className="home_page">
        <h4>
          Welcome <span>{username}</span>
        </h4>
        <button onClick={Logout}>LOGOUT</button>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;
