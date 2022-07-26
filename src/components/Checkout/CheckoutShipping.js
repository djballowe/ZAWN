import React from "react";
import OrderCheckout from "./OrderCheckout";
import Logo from "../Images/wave.png";
import { useNavigate } from "react-router-dom";
import OrderCheckoutDS from "./OrderCheckoutDS";

export default function CheckoutShipping() {
  let navigate = useNavigate();
  return (
    <div>
      <div className="flex-container">
        <div className="checkout-container">
          <div className="checkout-information">
            <div className="logo">
              <h2>ZAWN</h2>
              <img src={Logo} alt="" />
            </div>
            <OrderCheckout />
          </div>
          <div className="shipping-info">
            <div className="shipping-email">
              <p>Contact</p>
              <p>Email</p>
            </div>
            <div className="shipping-address">
              <p>Ship To</p>
              <p>Address</p>
            </div>
          </div>
          <div>
            <h2>Shipping Method</h2>
            <div className="shipping-method">
              <div className="shipping-method-selection">
                <div className="shipping-checkbox">
                  <input type="checkbox" />
                  <p>Standard Shipping</p>
                </div>
                <p>$7.95</p>
              </div>
              <div className="shipping-method-selection">
                <div className="shipping-checkbox">
                  <input type="checkbox" />
                  <p>Priority Shipping</p>
                </div>
                <p>$11.95</p>
              </div>
              <div className="shipping-method-selection">
                <div className="shipping-checkbox">
                  <input type="checkbox" />
                  <p>2 Business Day Shipping</p>
                </div>
                <p>$16.44</p>
              </div>
            </div>
          </div>
          <div className="continue">
            <button
              onClick={() => {
                navigate("/payment");
              }}
            >
              Continue to Payment
            </button>
            <p
              onClick={() => {
                navigate("/checkout");
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
    </div>
  );
}
