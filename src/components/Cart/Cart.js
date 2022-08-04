import React, { useState, useEffect } from "react";
import CartIcon from "@mdi/react";
import { mdiWalletTravel } from "@mdi/js";
import Close from "@mdi/react";
import { mdiClose } from "@mdi/js";
import CartItems from "./CartItems";
import { cartItemsArray } from "../Main Pages/ProductMain";
import { useNavigate } from "react-router-dom";
import getTotal from "../Data/GetTotal";
import { updateStorage } from "../Main Pages/ProductMain";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/Config";

export default function Cart(props) {
  const [isTotal, setIsTotal] = useState(0);
  const [isQuantity, setIsQuantity] = useState("");
  const [isActive, setIsActive] = useState(props.open);
  const [user] = useAuthState(auth);

  let navigate = useNavigate();

  const setParentTotal = () => {
    let total = 0;
    cartItemsArray.forEach((item) => {
      total += item.quantity;
    });
    setIsQuantity(total);
    updateStorage();
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
    setIsActive(props.open);
    setIsTotal(getTotal());
  }, [props.open, isQuantity, props.quantity, isTotal]);

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
      <div className="cart-components">{cartComp}</div>
      <div className="test">
        <div className="checkout">
          <div className="subtotal">
            <p>Subtotal</p>
            <p>${isTotal}</p>
          </div>
          <button
            onClick={() => {
              if (user) {
                navigate("/checkout");
                props.onClick();
              } else {
                navigate("/login");
                props.onClick();
                alert("Please Login to continue");
              }
            }}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
