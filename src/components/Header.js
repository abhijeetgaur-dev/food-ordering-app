import { CDN_LOGO } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
    return (
      <div className="header">
        <div className="logo-container">
          <img
            src={CDN_LOGO}
            className="header-logo"
          ></img>

        </div>
        
        <div className="navbar">
        <div className="login-btn-container">
        <button className="login-btn" onClick={()=>(loginBtn==="Login"?setLoginBtn("Logout"):setLoginBtn("Login"))}>{loginBtn}</button>
        </div>
          <ul className="nav-items">
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;