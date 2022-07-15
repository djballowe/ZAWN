import React from "react";
import CartIcon from "@mdi/react";
import { mdiWalletTravel } from "@mdi/js";
import Close from "@mdi/react";
import { mdiClose } from "@mdi/js";
import CartItems from "./CartItems";

export default function Cart() {
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
        <div>
          <CartItems />
        </div>
      </div>
    </div>
  );
}
