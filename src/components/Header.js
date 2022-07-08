import React from "react";
import Icon from "@mdi/react";
import { mdiMenu } from '@mdi/js'; 

function Header() {
  return (
    <header>
      <div className="logo">
        <h2>ZAWN</h2>
      </div>
      <div className="nav-container">
        <Icon path={mdiMenu} title="mobileMenu" size={1.4} />
        {/* <ul className="nav">
          <li>Home</li>
          <li>Collection</li>
          <li>About</li>
        </ul> */}
      </div>
    </header>
  );
}

export default Header;
