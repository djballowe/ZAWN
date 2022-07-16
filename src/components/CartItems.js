import React from "react";
import Plus from "../Images/plus.png";
import Minus from "../Images/minus.png";
import { cart } from "./ProductMain";

export default function CartItems(props) {
  const handleClick = (e) => {
    const index = parseInt(e.target.getAttribute("name"));
    if (e.target.id === "+") {
      cart[index].quantity += 1;
    } else if(e.target.id === '-' && cart[index].quantity !== 1){
      cart[index].quantity -= 1;
    } else {
      cart.splice(index, 1);
    }
    console.log(cart);
  };

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
          <input type="text" name="name" placeholder="1" />
          <button
            className="minus-btn"
            id="-"
            onClick={handleClick}
            name={props.item}
          >
            <img src={Minus} alt="" id="-" name={props.id} />
          </button>
        </div>
      </div>
    </div>
  );
}
