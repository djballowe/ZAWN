import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Error from "./Error";
import ProductPage from "./ProductPage";
import ProductMain from "./ProductMain";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import CartIcon from "@mdi/react";
import { mdiWalletTravel } from "@mdi/js";
import Cart from "./Cart";
import { cartItemsArray } from "./ProductMain";
import Arrow from "@mdi/react";
import { mdiChevronDown } from "@mdi/js";

function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isAmount, setIsAmount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    isMobile ? setIsMobile(false) : setIsMobile(true);
  };

  const cartClick = () => {
    let total = 0;
    cartItemsArray.forEach((item) => {
      total += item.quantity;
    });
    setIsAmount(total);
    isActive ? setIsActive(false) : setIsActive(true);
  };

  useEffect(() => {
    isActive === true
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  });

  return (
    <Router>
      <div className="banner">
        <Arrow path={mdiChevronDown} rotate={90} size={1}/>
        <p>Get free shipping when you spent $50!</p>
        <p>Save up to $20 on our Bathroom Essentials bundle</p>
        <Arrow path={mdiChevronDown} rotate={-90} size={1}/>
      </div>
      <div
        className="test-cart"
        style={{
          visibility: isActive ? "visible" : "hidden",
        }}
      >
        <Cart onClick={cartClick} quantity={isAmount} open={isActive} />
        <div
          onClick={cartClick}
          className="overlay"
          style={{
            opacity: isActive ? "1" : "0",
          }}
        ></div>
      </div>
      <header>
        <div className="mobile-menu">
          <Icon
            path={mdiMenu}
            title="mobileMenu"
            size={1.4}
            onClick={handleClick}
          />
        </div>
        <div className="logo">
          <h2>ZAWN</h2>
        </div>
        <div className="nav-container">
          <div className="mobile-menu">
            <div className="icon">
              <CartIcon path={mdiWalletTravel} size={1.2} onClick={cartClick} />
            </div>
            <div
              className="side-bar-nav"
              onClick={handleClick}
              style={{
                visibility: isMobile ? "visible" : "hidden",
                opacity: isMobile ? "1" : "0",
              }}
            >
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
                <li></li>
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
              <CartIcon path={mdiWalletTravel} size={1} onClick={cartClick} />
              <div
                onClick={cartClick}
                className="cart-num"
                style={{
                  display: isAmount > 0 ? "flex" : "none",
                }}
              >
                {isAmount}
              </div>
            </li>
          </ul>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<ProductPage />} />
        <Route
          path="/product/:id"
          element={<ProductMain handle={cartClick} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default Header;
