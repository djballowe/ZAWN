import React from "react";
import PayPal from "../Images/Payment pngs/paypal.png";
import { useNavigate } from "react-router-dom";
import { CardElement } from "@stripe/react-stripe-js";

export default function Payment() {
  let navigate = useNavigate();

  const configCardElement = {
    iconStyle: "solid",
    style: {
      base: {
        fontSize: "16px",
      },
    },
    hidePostalCode: true,
  };

  return (
    <div>
      <div className="checkout-container">
        <div className="payment-payment">
          <h2>Credit Card Payment</h2>
          <p>All transactions are secure and encrypted.</p>
          <div className="card-element-container">
            <CardElement options={configCardElement} />
          </div>
        </div>
        <div className="payment-payment">
          <h2>Billing Address</h2>
          <p>Select the address that matches your card or payment method.</p>
          <div className="shipping-method">
            <div className="shipping-method-selection">
              <div className="shipping-checkbox">
                <input type="checkbox" />
                <p>Same as shipping address</p>
              </div>
            </div>
            <div className="shipping-method-selection">
              <div className="shipping-checkbox">
                <input type="checkbox" />
                <p>Use a different billing address</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
