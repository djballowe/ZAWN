import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "../Main Pages/Home";
import About from "../Main Pages/About";
import Error from "./Error";
import ProductPage from "../Main Pages/ProductPage";
import ProductMain from "../Main Pages/ProductMain";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import CartIcon from "@mdi/react";
import { mdiWalletTravel } from "@mdi/js";
import Cart from "../Cart/Cart";
import { cartItemsArray } from "../Main Pages/ProductMain";
import LeftArrow from "../Images/chevron-left.png";
import RightArrow from "../Images/chevron-right.png";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import Blog from "../Main Pages/Blog";
import Contact from "../Main Pages/Contact";
import Shipping from "../Main Pages/Shipping";
import Return from "../Main Pages/Return";
import Checkout from "../Checkout/Checkout";
import { mdiAccountOutline } from "@mdi/js";
import Profile from "@mdi/react";
import LogIn from "../Login/LogIn";
import { Register } from "../Login/LogIn";
import AccountPage from "../Login/AccountPage";
import CheckoutShipping from "../Checkout/CheckoutShipping";
import Payment from "../Checkout/Payment";

function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isAmount, setIsAmount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isBanner, setIsBanner] = useState(1);

  // console.log(window.location.pathname);

  const handleClick = () => {
    isMobile ? setIsMobile(false) : setIsMobile(true);
  };

  const bannerClick = (e) => {
    const id = e.target.id;
    const max = document.getElementById("banner-text").childElementCount;
    if (id === "+") {
      isBanner === max ? setIsBanner(1) : setIsBanner(isBanner + 1);
    } else {
      isBanner === 1 ? setIsBanner(max) : setIsBanner(isBanner - 1);
    }
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

    //TODO REENABLE ON DEPLOYMENT

    // const interval = setInterval(() => {
    //   const max = document.getElementById("banner-text").childElementCount;
    //   isBanner === max ? setIsBanner(1) : setIsBanner(isBanner + 1);
    // }, 5000);
    // return () => clearInterval(interval);
  }, [isActive]);

  return (
    <Router>
      <div
        style={{
          display: window.location.pathname === "/checkout" ? "none" : "block",
        }}
      >
        <div className="banner">
          <img src={LeftArrow} alt="" id="-" onClick={bannerClick} />
          <div id="banner-text">
            <p
              style={{
                display: isBanner === 1 ? "block" : "none",
              }}
            >
              Get free shipping when you spent $50!
            </p>
            <p
              style={{
                display: isBanner === 2 ? "block" : "none",
              }}
            >
              Save up to $20 on our Bathroom Essentials bundle
            </p>
          </div>
          <img src={RightArrow} alt="" id="+" onClick={bannerClick} />
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
            <h2>
              <Link to="/">ZAWN</Link>
            </h2>
          </div>
          <div className="nav-container">
            <div className="mobile-menu">
              <div className="icon">
                <CartIcon
                  path={mdiWalletTravel}
                  size={1.2}
                  onClick={cartClick}
                />
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
                <Link to="/login">
                  <Profile path={mdiAccountOutline} size={1} />
                </Link>
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
      </div>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<ProductPage />} />
          <Route
            path="/product/:id"
            element={<ProductMain handle={cartClick} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/return" element={<Return />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout-shipping" element={<CheckoutShipping />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </ScrollToTop>
      {window.location.pathname === "/checkout" ? null : <Footer />}
    </Router>
  );
}

export default Header;
