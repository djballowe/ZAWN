import React from "react";

export default function CheckoutShipping() {
  return (
    <div>
      <div className="checkout-container">
        <h2>Shipping Method</h2>
        <div className="shipping-method">
          <div className="shipping-method-selection">
            <div className="shipping-checkbox">
              <input type="checkbox" />
              <p>Free Shipping</p>
            </div>
            <p>$0</p>
          </div>
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
      <div className="checkout-border"></div>
    </div>
  );
}
