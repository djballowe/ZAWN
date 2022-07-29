import React from "react";
import PayPal from "../Images/Payment pngs/paypal.png";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  let navigate = useNavigate();

  return (
    <div>
      <div className="checkout-container">
        <div className="payment-payment">
          <h2>Payment</h2>
          <p>All transactions are secure and encrypted.</p>
          <div className="shipping-method">
            <div className="shipping-method-selection">
              <div>
                <div className="shipping-checkbox">
                  <input type="checkbox" />
                  <p>Credit Card</p>
                </div>
                <form action="">
                  <input type="text" placeholder="Card number" required />
                  <input type="text" placeholder="Name on card" required />
                  <div>
                    <input
                      type="text"
                      placeholder="Expiration date (MM / YY)"
                      required
                    />
                    <input type="text" placeholder="Security code" required />
                  </div>
                </form>
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
  );
}
