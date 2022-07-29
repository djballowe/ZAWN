import React from "react";
import OrderCheckout from "./OrderCheckout";
import OrderCheckoutDS from "./OrderCheckoutDS";
import Logo from "../Images/wave.png";
import PayPal from "../Images/Payment pngs/paypal.png";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  let navigate = useNavigate();

  return (
    <div>
      <div className="checkout-container">
        <div className="test-payment">
          <div className="payment-payment">
            <h2>Payment</h2>
            <p>All transactions are secure and encrypted.</p>
            <div className="shipping-method">
              <div className="shipping-method-selection">
                <div className="shipping-checkbox">
                  <input type="checkbox" />
                  <p>Credit Card</p>
                  <img src="" alt="" />
                  <img src="" alt="" />
                  <img src="" alt="" />
                </div>
              </div>
              <div className="shipping-method-selection">
                <div className="shipping-checkbox">
                  <input type="checkbox" />
                  <img src={PayPal} alt="" />
                </div>
              </div>
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
      <div className="checkout-border"></div>
    </div>
  );
}
