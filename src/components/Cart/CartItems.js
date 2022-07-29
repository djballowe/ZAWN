import React, { useState, useEffect } from "react";
import Plus from "../Images/plus.png";
import Minus from "../Images/minus.png";
import { cartItemsArray } from "../Main Pages/ProductMain";
import { updateStorage } from "../Main Pages/ProductMain";

export default function CartItems(props) {
  const [isQuantity, setIsQuantity] = useState(props.quantity);
  const [isOpen, setIsOpen] = useState(props.open);

  

  const setParent = (value) => {
    props.set(value);
  };

  const handleClick = (e) => {
    const index = e.target.getAttribute("name");
    const name = cartItemsArray.find((x) => x.id === index);
    let value = name.quantity;
    if (e.target.id === "+") {
      value = name.quantity += 1;
      setIsQuantity(value);
      setParent();
    } else if (e.target.id === "-" && name.quantity !== 1) {
      value = name.quantity -= 1;
      setIsQuantity(value);
      setParent();
    } else if (e.target.id === "-" && name.quantity === 1) {
      cartItemsArray.splice(
        cartItemsArray.map((item) => item.id).indexOf(index),
        1
      );
      setParent();
      updateStorage();
    }

    console.log(cartItemsArray);
  };

  let source = props.src;

  useEffect(() => {
    setIsQuantity(props.quantity);
    setIsOpen(props.open);
  }, [props.open, props.quantity]);

  return (
    <div
      className="item-full"
      style={{
        opacity: isOpen ? "1" : 0,
        right: isOpen ? "0" : "-200px",
      }}
    >
      <div className="cart-item-container">
        <div className="cart-image">
          <img src={require(`../Images/${source}`)} alt="" />
        </div>
        <div className="cart-item-container-text">
          <div className="cart-item-text">
            <h3>{props.item}</h3>
            <p>Forest Green</p>
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
      <div className="item-container">
        <div className="item-text">
          <p>${props.price}</p>
        </div>
      </div>
    </div>
  );
}
