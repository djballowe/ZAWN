import React from "react";
import testImage from "../Images/Product Page/Tooth Brush/ToothBrush2.jpg";

export default function CheckoutItems(props) {


  return (
    <div>
      <div className="cart-item-checkout">
        <div className="cart-item-info">
          <img src={testImage} alt="" />
          <div>
            <p>{props.item}</p>
            <p>color</p>
            <p>{props.quantity}</p>
          </div>
        </div>
        <p>{props.price}</p>
      </div>
    </div>
  );
}
