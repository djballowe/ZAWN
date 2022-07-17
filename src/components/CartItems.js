import React, { useState, useEffect } from "react";
import Plus from "../Images/plus.png";
import Minus from "../Images/minus.png";
import { cartItemsArray } from "./ProductMain";

export default function CartItems(props) {
  const [isQuantity, setIsQuantity] = useState(props.quantity);

  const handleClick = (e) => {
    const index = e.target.getAttribute("name");
    const name = cartItemsArray.find((x) => x.id === index);

    if (e.target.id === "+") {
      setIsQuantity((name.quantity += 1));
    } else if (e.target.id === "-" && name.quantity !== 1) {
      setIsQuantity((name.quantity -= 1));
    } else if (e.target.id === "-" && name.quantity === 1) {
      cartItemsArray.splice(
        cartItemsArray.map((item) => item.id).indexOf(index),
        1
      );
    }
    console.log(cartItemsArray);
  };

  useEffect(() => {
    let total = 0;
    cartItemsArray.forEach((item) => {
      total += item.quantity;
    });
    setIsQuantity(total);
  });

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
        <div className="quantity" id="+" name={props.id}>
          <button
            className="plus-btn"
            onClick={handleClick}
            id="+"
            name={props.id}
          >
            <img src={Plus} alt="" id="+" name={props.id} />
          </button>
          <div>{isQuantity}</div>
          <button
            className="minus-btn"
            id="-"
            onClick={handleClick}
            name={props.id}
          >
            <img src={Minus} alt="" id="-" name={props.id} />
          </button>
        </div>
      </div>
    </div>
  );
}
