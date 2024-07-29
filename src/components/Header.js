import { CDN_LOGO } from "../utils/constants";

const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img
            src={CDN_LOGO}
            className="header-logo"
          ></img>
        </div>
        <div className="navbar">
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