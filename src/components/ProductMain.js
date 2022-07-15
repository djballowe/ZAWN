import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../data.js";
import Star from "@mdi/react";
import { mdiStar } from "@mdi/js";
import Leaf from "@mdi/react";
import { mdiLeaf } from "@mdi/js";
import Grass from "@mdi/react";
import { mdiGrass } from "@mdi/js";
import Person from "@mdi/react";
import { mdiAccountCheck } from "@mdi/js";
import Heart from "@mdi/react";
import { mdiCharity } from "@mdi/js";
import Color from "./Color.js";
import Cart from "./Cart.js";

export const cart = [];

class CartItemCreator {
  constructor(title, src, price, id) {
    this.title = title;
    this.src = src;
    this.price = price;
    this.id = id;
  }
}

function ProductMain() {
  let { id } = useParams();

  let product = data.find((x) => x.id === id);

  const color = product.color.map((color, index) => {
    return <Color key={index} color={color} />;
  });

  const handleClick = () => {
    cart.push(
      new CartItemCreator(product.title, product.src, product.price, product.id)
    );
    console.log(cart);
  };

  return (
    <div>
      <div className="individual-container">
        <div className="cell1">
          <div className="image">
            <img src={require(`../Images/${product.src}`)} alt="" />
          </div>
        </div>
        <div className="cell2">
          <div className="title">
            <p>{product.title}</p>
            <p>${product.price}</p>
          </div>
          <p>{product.description}</p>
          <div className="reviews">
            <Star path={mdiStar} size={1} color="black" />
            <p>{product.status.rating} / 5</p>
            <p>{product.status.review} Reviews</p>
          </div>
          <div className="color-container">
            <h3>{product.color.length > 0 ? "Color" : ""}</h3>
            <div className="color-picker">
              {product.color.length > 0 ? color : ""}
            </div>
          </div>
          <div className="details-container">
            <div className="details">
              <Leaf path={mdiLeaf} size={1} />
              <p>100% Biodegradable</p>
            </div>
            <div className="details">
              <Grass path={mdiGrass} size={1} />
              <p>Plastic Free</p>
            </div>
            <div className="details">
              <Person path={mdiAccountCheck} size={1} />
              <p>Ethically Sourced</p>
            </div>
            <div className="details">
              <Heart path={mdiCharity} size={1} />
              <p>Made in America</p>
            </div>
          </div>
          <div className="button">
            <button onClick={handleClick}>Add to Cart</button>
          </div>
          <div className="promise">
            <p>Made to Order</p>
            <p>60 Day Guarantee</p>
            <p>24/7 Customer Support</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductMain;
