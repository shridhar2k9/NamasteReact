import { LOGO_URL } from "../utils/constants";
import {useState} from "react";
import { Link } from "react-router";
import useInternetStatus from "../utils/useInternetStatus";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onlineStatus = useInternetStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
        />
      </div>
      <div className="nav-items">
        <h3>{onlineStatus ? "🟢 Online" : "🔴 Offline"}</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <button onClick={() => setIsLoggedIn(!isLoggedIn)} className="login">
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </ul>
      </div>
    </div>
  ); 3
};

export default Header;