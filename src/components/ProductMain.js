import React from "react";
import data from "../data.js";
import Star from "@mdi/react";
import { mdiStar } from "@mdi/js";
import Leaf from "@mdi/react"
import { mdiLeaf } from '@mdi/js'; 

function ProductMain() {
  return (
    <div className="individual-container">
      <div className="image">
        <img src={require(`../Images/${data[0].src}`)} alt="" />
      </div>
      <div className="title">
        <p>{data[0].title}</p>
        <p>${data[0].price}</p>
      </div>
        <p>{data[0].description}</p>
      <div className="reviews">
        <Star path={mdiStar} size={1} color="black" />
        <p>{data[0].status.rating} / 5</p>
        <p>{data[0].status.reviews} Reviews</p>
      </div>
      <div className="color-container">
        <h3>Bristle Color</h3>
        <div className="color-picker">
          <div className="colors">
            <div className="white"></div>
            <p>White</p>
          </div>
          <div className="colors">
            <div className="black"></div>
            <p>Black</p>
          </div>
          <div className="colors">
            <div className="blue"></div>
            <p>Blue</p>
          </div>
        </div>
      </div>
      <div className="details">
        <Leaf path={mdiLeaf} size={1} />

      </div>
      <button>Add to Cart</button>
      <div className="promise">
        <p>Made to Order</p>
        <p>60 Day Guarantee</p>
        <p>24/7 Customer Support</p>
      </div>
    </div>
  );
}

export default ProductMain;
