import React from "react";


export default function CheckoutItems(props) {
  

  return (
    <div>
      <div className="cart-item-checkout">
        <div className="cart-item-info">
          <img src={`../Images/${props.src}`} alt="" />
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
