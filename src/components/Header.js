import React from "react";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import Logo from "../Images/wave.png";

function Header() {
  return (
    <header>
      <div className="logo">
        {/* <img src={Logo} alt="" /> */}
        <h2>ZAWN</h2>
      </div>
      <div className="nav-container">
        <div className="mobile-menu">
          <Icon path={mdiMenu} title="mobileMenu" size={1.4} />
        </div>
        <ul className="nav">
          <li>Home</li>
          <li>Collection</li>
          <li>About</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
