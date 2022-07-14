import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Error from "./Error";
import ProductPage from "./ProductPage";
import ProductMain from "./ProductMain";
import Icon from "@mdi/react";
import { mdiCar, mdiMenu } from "@mdi/js";
import Cart from "@mdi/react";
import { mdiWalletTravel } from "@mdi/js";
import Logo from "../Images/wave.png";

function Header() {
  const [isMobile, setIsMobile] = useState(false);

  const handleClick = () => {
    isMobile ? setIsMobile(false) : setIsMobile(true);
  };

  return (
    <Router>
      <header>
        <div className="logo">
          {/* <img src={Logo} alt="" /> */}
          <h2>ZAWN</h2>
        </div>
        <div className="nav-container">
          <div className="mobile-menu">
            <div className="icon">
              <Icon
                path={mdiMenu}
                title="mobileMenu"
                size={1.4}
                onClick={handleClick}
                style={{
                  display: isMobile ? "none" : "block",
                }}
              />
            </div>
            <div
              className="side-bar-nav"
              onClick={handleClick}
              style={{
                display: isMobile ? "flex" : "none",
              }}
            >
              <div className="close">X</div>
              <ul>
                <li>
                  <Link to="/" onClick={handleClick}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/product" onClick={handleClick}>
                    Collection
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={handleClick}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/cart" onClick={handleClick}>
                    Cart
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <ul className="nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/product">Collection</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/cart">
                <Cart path={mdiWalletTravel} size={1} />
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductMain />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default Header;
