import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { CDN_LOGO } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
 
  useGSAP(()=>{
    gsap.to('#header-container', {height:80,
      opacity: 1,
      delay: 1,
      stagger: 0.25
      })
  },[])

  const [loginBtn, setLoginBtn] = useState("Login");
    return (
      <div id="header-container" className="flex justify-between bg-amber-800 shadow-gray-950 shadow-sm mb-10 opacity-0 h-0">
          <Link to= "/"><img
            src={CDN_LOGO}
            className="w-24 m-3"
          ></img>
          </Link>
        <div className="logo-container">

        </div>
        
        <div className="navbar">
        <div> 
          <h3>
           </h3>
        </div>
        <div className="flex ">
          <div className="py-4">
          <button className="login-btn" onClick={()=>(loginBtn==="Login"?setLoginBtn("Logout"):setLoginBtn("Login"))}>{loginBtn}</button>
          </div>
          <ul className="flex p-4">
            <li className="px-2">{useOnlineStatus()===true?"✅":"🔴"}</li>
            <li className="px-2">
              <Link to = "/">Home</Link>
            </li>
            <li className="px-2">
              <Link to="/about">About</Link>
            </li>
            <li className="px-2">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="px-2">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="px-2">
              <Link to="">Cart</Link>
            </li>
          </ul>
          </div>
        </div>
      </div>
    );
  };

  export default Header;