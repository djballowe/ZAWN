import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/Config";
import { db } from "../../firebase/Config";
import { accountSignOut } from "../../firebase/Config";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function ShippingForm() {
  let navigate = useNavigate();

  const [user] = useAuthState(auth);
  const [isFirstName, setIsFirstName] = useState("");
  const [isLastName, setIsLastName] = useState("");
  const [isAddress, setIsAddress] = useState("");
  const [isCity, setIsCity] = useState("");
  const [isState, setIsState] = useState("");
  const [isZip, setIsZip] = useState("");
  const [isPhone, setIsPhone] = useState("");
  const [isEmail, setIsEmail] = useState("");
  const shippingCollectionRef = collection(db, "Shipping");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDoc(shippingCollectionRef, {
      FirstName: isFirstName,
      LastName: isLastName,
      Address: isAddress,
      City: isCity,
      State: isState,
      Zip: isZip,
      Phone: isPhone,
      Email: isEmail,
    });
    navigate("/checkout-shipping");
  };

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
    <div>
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
        <input
          type="Email"
          placeholder="Email"
          onChange={(e) => {
            setIsEmail(e.target.id);
          }}
          required
        />
        <div className="checkbox">
          <input type="checkbox" />
          <p>Email me with news and offers</p>
        </div>
      </div>
      <div className="checkout-shipping-info">
        <h2>Shipping address</h2>
        <form action="" onSubmit={handleSubmit}>
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
        </form>
      </div>
    </div>
  );
}
