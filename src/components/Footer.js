import React, { useRef } from "react";
import { mdiArrowLeft } from "@mdi/js";
import Arrow from "@mdi/react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  let navigate = useNavigate();
  const productsRef = useRef();

  const handleClick = () => {};

  return (
    <div className="footer-container">
      <h2>ZAWN</h2>
      <div className="subscriber">
        <p>Subscribe to Our Newsletter</p>
        <p>
          Become a ZAWN insider and receive special offers, alerts about new
          drops, and more!
        </p>
        <div className="subscriber-input">
          <input type="email" placeholder="Email" />
          <button>
            {" "}
            <Arrow path={mdiArrowLeft} rotate={180} size={1} />{" "}
          </button>
        </div>
      </div>
      <div className="explore">
        <p>Explore</p>
        <p
          onClick={() => {
            navigate("/about");
          }}
        >
          Our Story
        </p>
        <p
          onClick={() => {
            navigate("/blog");
          }}
        >
          Our Blog
        </p>
        <p
          onClick={() => {
            navigate("/about");
          }}
        >
          A Sustainable Future
        </p>
        <p
          onClick={() => {
            navigate("/product")
          }}
        >
          Shop
        </p>
      </div>
      <div className="support">
        <p>Support</p>
        <p>Contact Us</p>
        <p>Shipping Policy</p>
        <p>Return Policy</p>
        <p>FAQ</p>
      </div>
      <div className="help">
        <p>Need Help?</p>
        <p>Call: 1-618-465-4763</p>
        <p>Email: info@ZAWNproducts.com</p>
      </div>
    </div>
  );
}
