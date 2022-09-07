import React, { useState, useEffect } from "react";
import CartIcon from "@mdi/react";
import { mdiWalletTravel } from "@mdi/js";
import { useNavigate } from "react-router-dom";

export default function MobileNav(props) {
  let navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  const handleClick = () => {
    isMobile ? setIsMobile(false) : setIsMobile(true);
  };

  useEffect(() => {
    setIsMobile(props.handle);
  }, [props.handle]);

  return (
    <div>
      <div className="mobile-menu">
        <div className="icon">
          <CartIcon path={mdiWalletTravel} size={1.2} onClick={props.cart} />
        </div>
        <div
          className="side-bar-nav"
          onClick={() => {
            handleClick();
            props.mobile();
          }}
          style={{
            visibility: isMobile ? "visible" : "hidden",
            opacity: isMobile ? "1" : "0",
          }}
        >
          <ul>
            <li
              onClick={() => {
                handleClick();
                props.mobile();
                navigate("/");
              }}
            >
              Home
            </li>
            <li
              onClick={() => {
                handleClick();
                props.mobile();
                navigate("product");
              }}
            >
              Collection
            </li>
            <li
              onClick={() => {
                handleClick();
                props.mobile();
                navigate("/about");
              }}
            >
              About
            </li>
            <li
              onClick={() => {
                handleClick();
                props.mobile();
                navigate("/login");
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
