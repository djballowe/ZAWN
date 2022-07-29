import React, { useState, useEffect } from "react";
import Logo from "../Images/wave.png";
import PayPal from "../Images/Payment pngs/paypal.png";
import ApplePay from "../Images/Payment pngs/applepay.png";
import Amazon from "../Images/Payment pngs/amazon.png";
import { countryList } from "../../CountryData";
import { useNavigate } from "react-router-dom";
import OrderCheckout from "./OrderCheckout";
import CheckoutShipping from "./CheckoutShipping";
import Payment from "./Payment";
import ShippingForm from "./ShippingForm";

export const tempShipping = JSON.parse(localStorage.getItem("shipping")) || [];

export default function Checkout() {
  let navigate = useNavigate();

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
        <ShippingForm />
        <CheckoutShipping />
        <Payment />
        <div className="continue">
          <button type="submit">Continue</button>
        </div>
        <p
          onClick={() => {
            navigate(-1);
          }}
        >
          Return to cart
        </p>
      </div>
    </div>
  );
}
