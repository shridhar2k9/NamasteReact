import { LOGO_URL } from "../utils/constants";
import {useState,useContext} from "react";
import { Link } from "react-router";
import useInternetStatus from "../utils/useInternetStatus";
import userContext from '../utils/userContext'
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onlineStatus = useInternetStatus();
  const {loggedInUser} = useContext(userContext)
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
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  ); 3
};

export default Header;