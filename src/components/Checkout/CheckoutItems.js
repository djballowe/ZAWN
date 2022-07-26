import React from "react";
import testImage from "../Images/Product Page/Tooth Brush/ToothBrush2.jpg";

export default function CheckoutItems() {
  return (
    <div>
      <div className="cart-item-checkout">
        <div className="cart-item-info">
          <img src={testImage} alt="" />
          <div>
            <p>Item</p>
            <p>color</p>
            <p>quantity</p>
          </div>
        </div>
        <p>$64.00</p>
      </div>
    </div>
  );
}
