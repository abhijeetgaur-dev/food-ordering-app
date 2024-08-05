import { CDN_LOGO } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
    return (
      <div className="header">
          <Link to= "/"><img
            src={CDN_LOGO}
            className="header-logo"
          ></img>
          </Link>
        <div className="logo-container">

        </div>
        
        <div className="navbar">
        <div> 
          <h3>
           </h3>
        </div>
        <div className="login-btn-container">
        <button className="login-btn" onClick={()=>(loginBtn==="Login"?setLoginBtn("Logout"):setLoginBtn("Login"))}>{loginBtn}</button>
        </div>
          <ul className="nav-items">
            <li>{useOnlineStatus()===true?"✅":"🔴"}</li>
            <li>
              <Link to = "/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/grocery">Grocery</Link>
            </li>
            <li>
              <Link to="">Cart</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;