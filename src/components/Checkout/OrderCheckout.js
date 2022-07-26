import React, { useState } from "react";
import CheckoutItems from "./CheckoutItems";
import Arrow from "../Images/arrow.png";
import whiteArrow from "../Images/chevron-right.png";

export default function OrderCheckout() {
  const [isOpen, setIsOpen] = useState(false);

  
  return (
    <div>
      <div className="checkout-cart">
        <div className="show-order">
          <p>{isOpen ? "Hide order summary" : "Show order summary"}</p>
          <img
            src={Arrow}
            alt=""
            style={{
              transform: isOpen ? "rotate(90deg)" : "rotate(0)",
            }}
            onClick={() => {
              isOpen ? setIsOpen(false) : setIsOpen(true);
            }}
          />
        </div>
      </div>
      <div>
        <div
          className="checkout-cart-items"
          style={{
            height: isOpen ? "350px" : "0px",
          }}
        >
          <div className="coupon-code">
            <input type="text" placeholder="Gift card or discount code" />
            <button>
              <img src={whiteArrow} alt="" />
            </button>
          </div>
          <div className="checkout-subtotal-container">
            <CheckoutItems />
            <div className="checkout-subtotal">
              <p>Subtotal</p>
              <p>$64.00</p>
            </div>
            <div className="checkout-shipping">
              <p>Shipping</p>
              <p>$16.44</p>
            </div>
            <div className="checkout-tax">
              <p>Taxes</p>
              <p>$4.64</p>
            </div>
          </div>
          <div className="checkout-total">
            <p>Total</p>
            <div className="currency">
              <p>USD</p>
              <p>$85.08</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
