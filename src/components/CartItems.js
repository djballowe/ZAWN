import React from "react";
import Plus from "@mdi/react";
import { mdiPlus } from "@mdi/js";
import Minus from "@mdi/react";
import { mdiMinus } from "@mdi/js";

export default function CartItems(props) {
  return (
    <div className="item-full">
      <div className="cart-image">
        <img src={require(`../Images/${props.src}`)} alt="" />
      </div>
      <div className="item-container">
        <div className="item-text">
          <h3>{props.item}</h3>
          <p>Forest Green</p>
          <p>${props.price}</p>
        </div>
        <div className="quantity">
          <button className="plus-btn">
            <Plus path={mdiPlus} size={0.7} />
          </button>
          <input type="text" name="name" placeholder="1" />
          <button className="minus-btn">
            <Minus path={mdiMinus} size={0.7} />
          </button>
        </div>
      </div>
    </div>
  );
}
