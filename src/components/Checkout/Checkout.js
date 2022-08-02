import React, { useState, useEffect } from "react";
import Logo from "../Images/wave.png";
import PayPal from "../Images/Payment pngs/paypal.png";
import ApplePay from "../Images/Payment pngs/applepay.png";
import Amazon from "../Images/Payment pngs/amazon.png";
import { useNavigate } from "react-router-dom";
import OrderCheckout from "./OrderCheckout";
import useCheckoutShipping from "./CheckoutShipping";
import Payment from "./Payment";
import { Elements } from "@stripe/react-stripe-js";
import { publishableKey } from "../../stripe/ConfigStripe";
import { loadStripe } from "@stripe/stripe-js";
import useShippingForm from "./ShippingForm";

const stripePromise = loadStripe(publishableKey);

export default function Checkout() {
  let navigate = useNavigate();

  const { render, idIsChecked } = useCheckoutShipping();
  const {
    renderInfo,
    isFirstName,
    isLastName,
    isAddress,
    isCity,
    isState,
    isZip,
    isPhone,
    isEmail,
  } = useShippingForm();

  return (
    <div className="flex-container">
      <div className="checkout-container">
          <div className="top">
            <div className="desk">
              <div className="checkout-information">
                <div className="logo">
                  <h2>ZAWN</h2>
                  <img src={Logo} alt="" />
                </div>
                <OrderCheckout shipping={idIsChecked} />
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
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </div>
            <div className="border-checkout"></div>
            <div className="info-components">
              {render}
              {renderInfo}
            </div>
          </div>
      </div>
    </div>
  );
}
