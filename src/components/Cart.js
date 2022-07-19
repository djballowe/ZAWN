import React, { useState, useEffect } from "react";
import CartIcon from "@mdi/react";
import { mdiWalletTravel } from "@mdi/js";
import Close from "@mdi/react";
import { mdiClose } from "@mdi/js";
import CartItems from "./CartItems";
import { cartItemsArray } from "./ProductMain";

export default function Cart(props) {
  const [isTotal, setIsTotal] = useState(0);
  const [isQuantity, setIsQuantity] = useState(props.quantity);
  const [isActive, setIsActive] = useState(props.open);

  const setParentTotal = (value) => {
    setIsQuantity(value);
  };

  const cartComp = cartItemsArray.map((item) => {
    return (
      <CartItems
        key={item.id}
        id={item.id}
        item={item.title}
        price={item.price}
        src={item.src}
        quantity={item.quantity}
        set={setParentTotal}
        open={props.open}
      />
    );
  });

  useEffect(() => {
    let total = 0;
    cartItemsArray.forEach((item) => {
      total +=
        Math.round((item.price * item.quantity + Number.EPSILON) * 100) / 100;
    });
    setIsActive(props.open);
    setIsTotal(total.toFixed(2));
  }, [props.open, isQuantity]);

  return (
    <div
      className="cart-body"
      style={{
        right: isActive ? "0" : "-550px",
      }}
    >
      <div className="cart-top">
        <div className="bag">
          <CartIcon path={mdiWalletTravel} size={1} />
          <p>{isQuantity} ITEMS</p>
        </div>
        <button>
          <Close path={mdiClose} size={1} onClick={props.onClick} />
        </button>
      </div>
      <div className="shipping-container">
        <p>
          {isTotal > 50
            ? "You are eligible for free shipping!"
            : `Spend $${(50 - isTotal).toFixed(2)} to get free shipping!`}
        </p>
        <div className="border">
          <div
            className="bar"
            style={{
              width: isTotal >= 50 ? "100%" : `${(isTotal / 50) * 100}%`,
            }}
          ></div>
        </div>
      </div>
      <div className="components">{cartComp}</div>
      <div className="test">
        <div className="checkout">
          <div className="subtotal">
            <p>Subtotal</p>
            <p>${isTotal}</p>
          </div>
          <button>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}
