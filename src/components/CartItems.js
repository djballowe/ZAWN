import React from "react";
import Plus from "@mdi/react"
import { mdiPlus } from '@mdi/js';
import Minus from '@mdi/react'
import { mdiMinus } from '@mdi/js';  

export default function CartItems() {
  return (
    <div className="item-full">
      <div className="cart-image">
        <img src="" alt="" />
      </div>
      <div className="item-container">
        <h3>Organic Soap</h3>
        <p>Forest Green</p>
        <p>$78.00</p>
        <div className="quantity">
          <button className="plus-btn">
            <Plus path={mdiPlus} size={.7} />
          </button>
          <input type="text" name="name" placeholder="1" />
          <button className="minus-btn">
            <Minus path={mdiMinus} size={.7}/>
          </button>
        </div>
      </div>
    </div>
  );
}
