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
            navigate("/product");
          }}
        >
          Shop
        </p>
      </div>
      <div className="support">
        <p>Support</p>
        <p
          onClick={() => {
            navigate("/contact");
          }}
        >
          Contact Us
        </p>
        <p
          onClick={() => {
            navigate("/shipping");
          }}
        >
          Shipping Policy
        </p>
        <p
          onClick={() => {
            navigate("/return");
          }}
        >
          Return Policy
        </p>
      </div>
      <div>
        <p id="help">Need Help?</p>
        <div className="call">
          <p>Call:</p>
          <button>1-618-4763</button>
        </div>
        <div className="email">
          <p>Email:</p>{" "}
          <button
            onClick={() => (window.location = "mailto:info@zawnproducts.com")}
          >
            info@zawnproducts.com
          </button>
        </div>
      </div>
    </div>
  );
}
