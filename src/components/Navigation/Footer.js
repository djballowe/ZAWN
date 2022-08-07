import React, { useState } from "react";
import { mdiArrowLeft } from "@mdi/js";
import Arrow from "@mdi/react";
import { useNavigate } from "react-router-dom";
import Logo from "../Images/wave.png";

export default function Footer() {
  let navigate = useNavigate();
  const [email, setEmail] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isValid = () => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleChange = (e) => {
    if (!isValid(e.target.value)) {
      setError(true);
    } else {
      setError(false);
    }
    setEmail(e.target.value);
  };

  const handleClick = () => {
    let message = document.getElementById("error");
    if (error === true) {
      setError(true);
      message.style.display = "block";
    } else {
      setSuccess(true);
      message.style.display = "none";
    }
  };

  if (window.location.pathname === "/checkout" || window.location.pathname === "/thank-you") {
    return null;
  } else {
    return (
      <div className="footer-container-2">
        <div className="footer-container">
          <div className="logo-sub-container">
            <div className="logo">
              <h2>ZAWN</h2>
              <img src={Logo} alt="" />
            </div>
            <div className="subscriber">
              <p>Subscribe to Our Newsletter</p>
              <p>
                Become a ZAWN insider and receive special offers, alerts about
                new drops, and more!
              </p>
              <div className="subscriber-input">
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  style={{
                    border: error
                      ? "solid red 1px"
                      : "solid rgb(133, 133, 133) 1px",
                  }}
                />
                <button onClick={handleClick}>
                  {" "}
                  <Arrow
                    path={mdiArrowLeft}
                    rotate={180}
                    size={1}
                    color="rgb(133, 133, 133)"
                  />{" "}
                </button>
              </div>
              <div className="error" id="error">
                <p>Please enter a valid email</p>
              </div>
              <div
                className="thank-you"
                style={{
                  display: success ? "block" : "none",
                }}
              >
                <p>Thank You!</p>
              </div>
            </div>
          </div>
          <div className="footer-links">
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
            <div className="help">
              <p id="help">Need Help?</p>
              <div className="call">
                <p>Call:</p>
                <button>1-618-4763</button>
              </div>
              <div className="email">
                <p>Email:</p>{" "}
                <button
                  onClick={() =>
                    (window.location = "mailto:info@zawnproducts.com")
                  }
                >
                  info@zawnproducts.com
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
