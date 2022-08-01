import React, { useState, useEffect } from "react";
import Logo from "../Images/wave.png";
import PayPal from "../Images/Payment pngs/paypal.png";
import ApplePay from "../Images/Payment pngs/applepay.png";
import Amazon from "../Images/Payment pngs/amazon.png";
import { useNavigate } from "react-router-dom";
import OrderCheckout from "./OrderCheckout";
import useCheckoutShipping from "./CheckoutShipping";
import Payment from "./Payment";
import ShippingForm from "./ShippingForm";
import { Elements } from "@stripe/react-stripe-js";
import { publishableKey } from "../../stripe/ConfigStripe";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(publishableKey);

export default function Checkout() {
  let navigate = useNavigate();

  const { render, idIsChecked } = useCheckoutShipping();

  return (
    <div className="flex-container">
      <div className="checkout-container">
        <form action="">
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
              <div className="continue">
                <button type="submit">Continue</button>
                <p
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  Return to cart
                </p>
              </div>
            </div>
            <div className="border-checkout"></div>
            <div className="info-components">
              <ShippingForm />
              {render}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
