import React, { useState, useEffect } from "react";
import Logo from "../Images/wave.png";
import PayPal from "../Images/Payment pngs/paypal.png";
import ApplePay from "../Images/Payment pngs/applepay.png";
import Amazon from "../Images/Payment pngs/amazon.png";
import { countryList } from "../../CountryData";
import { useNavigate } from "react-router-dom";
import OrderCheckout from "./OrderCheckout";
import OrderCheckoutDS from "./OrderCheckoutDS";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/Config";
import { accountSignOut } from "../../firebase/Config";

export const tempUser = JSON.parse(localStorage.getItem("temp-user")) || [];

export default function Checkout() {
  let navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [isFirstName, setIsFirstName] = useState("");
  const [isLastName, setIsLastName] = useState("");
  const [isAddress, setIsAddress] = useState("");
  const [isApartment, setIsApartment] = useState("");
  const [isCity, setIsCity] = useState("");
  const [isState, setIsState] = useState("");
  const [isZip, setIsZip] = useState("");
  const [isPhone, setIsPhone] = useState("");

  const handleSubmit = () => {};

  const options = countryList.map((country) => {
    return (
      <option key={country} value={country}>
        {country}
      </option>
    );
  });

  useEffect(() => {
    const isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(isZip);
    if (isZip !== "") {
      isValidZip
        ? (document.getElementById("zip").style.backgroundColor =
            "rgba(202, 240, 202, 0.815)")
        : (document.getElementById("zip").style.backgroundColor =
            "rgba(241, 182, 182, 0.733)");
    }
  });

  return (
    <div className="flex-container">
      <div className="checkout-container">
        <div className="checkout-information">
          <div className="logo">
            <h2>ZAWN</h2>
            <img src={Logo} alt="" />
          </div>
          <OrderCheckout />
        </div>
        <div className="express">
          <p>Express Checkout</p>
          <div className="payment-buttons">
            <button>
              <img src={Amazon} alt="" />
            </button>
            <button>
              <img src={PayPal} alt="" />
            </button>
            <button>
              <img src={ApplePay} alt="" />
            </button>
          </div>
        </div>
        <div className="divider">
          <div></div>
          <p>OR</p>
          <div></div>
        </div>
        <div className="contact-info">
          <h3>Contact Information</h3>
          <div>
            {" "}
            {user ? (
              <p>
                Signed in as: {user.displayName}{" "}
                <span onClick={accountSignOut}>
                  <a href="">Log out</a>
                </span>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <span
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  <a href="">Log in</a>
                </span>
              </p>
            )}
          </div>
        </div>
        <div className="checkout-email">
          <input type="Email" placeholder="Email" required />
          <div className="checkbox">
            <input type="checkbox" />
            <p>Email me with news and offers</p>
          </div>
        </div>
        <div className="checkout-shipping-info">
          <h2>Shipping address</h2>
          <form action="" onSubmit={handleSubmit}>
            <select name="" id="">
              {options}
            </select>
            <div className="name">
              <input
                type="text"
                placeholder="First name"
                onChange={(e) => {
                  setIsFirstName(e.target.value);
                }}
                required
              />
              <input
                type="text"
                placeholder="Last name"
                onChange={(e) => {
                  setIsLastName(e.target.value);
                }}
                required
              />
            </div>
            <input
              type="text"
              placeholder="Address"
              onChange={(e) => {
                setIsAddress(e.target.value);
              }}
              required
            />
            <input
              type="text"
              placeholder="Apartment, suite, ect"
              onChange={(e) => {
                setIsApartment(e.target.value);
              }}
            />
            <div className="address">
              <input
                type="text"
                placeholder="City"
                onChange={(e) => {
                  setIsCity(e.target.value);
                }}
                required
              />
              <input
                type="text"
                placeholder="State"
                onChange={(e) => {
                  setIsState(e.target.value);
                }}
                required
              />
              <input
                type="text"
                id="zip"
                placeholder="ZIP code"
                onChange={(e) => {
                  setIsZip(e.target.value);
                }}
                required
              />
            </div>
            <input
              type="text"
              placeholder="Phone"
              onChange={(e) => {
                setIsPhone(e.target.id);
              }}
              required
            />
            <div className="offers-text">
              <input type="checkbox" />
              <p>Text me with news and offers</p>
            </div>
            <div className="continue">
              <button type="submit">Continue to Shipping</button>
            </div>
          </form>
          <p
            onClick={() => {
              navigate(-1);
            }}
          >
            Return to cart
          </p>
        </div>
      </div>
      <div className="checkout-border"></div>
      <div className="order-checkout-component-desktop">
        <OrderCheckoutDS />
      </div>
    </div>
  );
}
