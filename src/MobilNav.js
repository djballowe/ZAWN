import React, { useState, useEffect } from "react";
import CartIcon from "@mdi/react";
import { mdiWalletTravel } from "@mdi/js";
import { useNavigate } from "react-router-dom";

export default function MobileNav(props) {
  let navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(true);

  const handleClick = () => {
    isMobile ? setIsMobile(false) : setIsMobile(true);
  };

  console.log(props.cart);

  return (
    <div>
      <div className="mobile-menu">
        <div className="icon">
          <CartIcon path={mdiWalletTravel} size={1.2} onClick={props.handle} />
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
            <li
              onClick={() => {
                handleClick();
                navigate("/");
              }}
            >
              Home
            </li>
            <li
              onClick={() => {
                handleClick();
                navigate("product");
              }}
            >
              Collection
            </li>
            <li
              onClick={() => {
                handleClick();
                navigate("/about");
              }}
            >
              About
            </li>
            <li
              onClick={() => {
                handleClick();
                navigate("/account");
              }}
            >
              Account
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
