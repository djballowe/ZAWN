import React, { useState, useEffect } from "react";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import CartIcon from "@mdi/react";
import { mdiWalletTravel } from "@mdi/js";
import Cart from "../Cart/Cart";
import { cartItemsArray } from "../Main Pages/ProductMain";
import LeftArrow from "../Images/chevron-left.png";
import RightArrow from "../Images/chevron-right.png";
import { mdiAccountOutline } from "@mdi/js";
import Profile from "@mdi/react";
import MobileNav from "./MobilNav";
import { useNavigate } from "react-router-dom";

function Header() {
  let navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [isAmount, setIsAmount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isBanner, setIsBanner] = useState(1);

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

    let total = 0;
    cartItemsArray.forEach((item) => {
      total += item.quantity;
    });
    setIsAmount(total);

    // const interval = setInterval(() => {
    //   const max = document.getElementById("banner-text").childElementCount;
    //   isBanner === max ? setIsBanner(1) : setIsBanner(isBanner + 1);
    // }, 5000);
    // return () => clearInterval(interval);
  }, [isActive]);

  if (window.location.pathname === "/checkout") {
    return null;
  } else {
    return {
      cartClick,
      nav: (
        <div>
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
            <Cart onClick={cartClick} open={isActive} />
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
            <div
              className="logo"
              onClick={() => {
                navigate("/");
              }}
            >
              <h2>ZAWN</h2>
            </div>
            <div className="nav-container">
              <MobileNav
                cart={cartClick}
                mobile={handleClick}
                handle={isMobile}
              />
              <ul className="nav">
                <li
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  <a>Home</a>
                </li>
                <li
                  onClick={() => {
                    navigate("product");
                  }}
                >
                  <a>Collection</a>
                </li>
                <li
                  onClick={() => {
                    navigate("about");
                  }}
                >
                  <a>About</a>
                </li>
                <li
                  onClick={() => {
                    navigate("login");
                  }}
                >
                  <Profile path={mdiAccountOutline} size={1} />
                </li>
                <li>
                  <CartIcon
                    path={mdiWalletTravel}
                    size={1}
                    onClick={cartClick}
                  />
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
      ),
    };
  }
}

export default Header;
