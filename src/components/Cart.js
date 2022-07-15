import React from "react";
import CartIcon from "@mdi/react";
import { mdiWalletTravel } from "@mdi/js";
import Close from "@mdi/react";
import { mdiClose } from "@mdi/js";
import CartItems from "./CartItems";
import { cart } from "./ProductMain";

export default function Cart() {
  const cartComp = cart.map((item) => {
    return (
      <CartItems
        key={item.id}
        id={item.id}
        item={item.title}
        price={item.price}
        src={item.src}
      />
    );
  });

  return (
    <div className="cart-container">
      <div className="cart-body">
        <div className="cart-top">
          <div className="bag">
            <CartIcon path={mdiWalletTravel} size={1} />
            <p>1 ITEM</p>
          </div>
          <button>
            <Close path={mdiClose} size={1} />
          </button>
        </div>

        <div className="shipping-container">
          <p>Spend $17.00 more and get free shipping!</p>
          <div className="border">
            <div className="bar"></div>
          </div>
        </div>
        <div className="components">{cartComp}</div>
        <div className="test">
          <div className="checkout">
            <div className="subtotal">
              <p>Subtotal</p>
              <p>$9.95</p>
            </div>
            <button>Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}
