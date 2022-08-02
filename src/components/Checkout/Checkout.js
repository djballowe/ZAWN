import React, { useState, useEffect } from "react";
import Logo from "../Images/wave.png";
import PayPal from "../Images/Payment pngs/paypal.png";
import ApplePay from "../Images/Payment pngs/applepay.png";
import Amazon from "../Images/Payment pngs/amazon.png";
import { useNavigate } from "react-router-dom";
import OrderCheckout from "./OrderCheckout";
import useCheckoutShipping from "./CheckoutShipping";
import { Elements } from "@stripe/react-stripe-js";
import { publishableKey } from "../../stripe/ConfigStripe";
import { loadStripe } from "@stripe/stripe-js";
import ShippingForm from "./ShippingForm";

const stripePromise = loadStripe(publishableKey);

export default function Checkout() {
  let navigate = useNavigate();
  const [isTotal, setIsTotal] = useState(0);
  const [isCard, setIsCard] = useState(0);

  const { render, idIsChecked } = useCheckoutShipping();

  const setParent = (total) => {
    setIsTotal(total);
  };

  const setCard = (card) => {
    setIsCard(card);
  };

  return (
    <div className="checkout-container">
      <div className="checkout-information">
        <div className="logo">
          <h2>ZAWN</h2>
          <img src={Logo} alt="" />
        </div>
        <OrderCheckout shipping={idIsChecked} setParent={setParent} />
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
      <div className="info-components">
        <Elements stripe={stripePromise}>
          {render}
          <ShippingForm total={isTotal} />
        </Elements>
      </div>
    </div>
  );
}
