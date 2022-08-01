import React, { useState, useEffect } from "react";
import CheckoutItems from "./CheckoutItems";
import Arrow from "../Images/arrow.png";
import whiteArrow from "../Images/chevron-right.png";
import { cartItemsArray } from "../Main Pages/ProductMain";
import getTotal from "../Data/GetTotal";

export default function OrderCheckout() {
  const [isOpen, setIsOpen] = useState(true);
  const [isTotal, setIsTotal] = useState(0);
  const [isShipping, setIsShipping] = useState(0);

  const checkOutCart = cartItemsArray.map((item) => {
    return (
      <CheckoutItems
        key={item.id}
        id={item.id}
        item={item.title}
        price={item.price}
        quantity={item.quantity}
        src={item.src}
      />
    );
  });

  let tax = (isTotal * 0.0509).toFixed(2);

  useEffect(() => {
    setIsTotal(getTotal());
    isTotal >= 50 ? setIsShipping(0) : setIsShipping(7.95);
  }, [isShipping, isTotal]);

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
            height: isOpen ? "auto" : "0px",
          }}
        >
          <div className="coupon-code">
            <input type="text" placeholder="Gift card or discount code" />
            <button>
              <img src={whiteArrow} alt="" />
            </button>
          </div>
          <div className="checkout-subtotal-container">
            <div>{checkOutCart}</div>
            <div className="checkout-subtotal">
              <p>Subtotal</p>
              <p>${isTotal}</p>
            </div>
            <div className="checkout-shipping">
              <p>Shipping</p>
              <p>{isShipping === 0 ? "Free" : `$${isShipping}`}</p>
            </div>
            <div className="checkout-tax">
              <p>Taxes</p>
              <p>${tax}</p>
            </div>
          </div>
          <div className="checkout-total">
            <p>Total</p>
            <div className="currency">
              <p>USD</p>
              <p>
                ${(isShipping + parseInt(isTotal) + parseInt(tax)).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
