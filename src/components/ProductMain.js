import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
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

function ProductMain() {
  let { id } = useParams();
  return (
    <div>
        <div className="individual-container">
      <div className="cell1">
        <div className="image">
          <img src={require(`../Images/${data[id].src}`)} alt="" />
        </div>
      </div>
      <div className="cell2">
        <div className="title">
          <p>{data[id].title}</p>
          <p>${data[id].price}</p>
        </div>
        <p>{data[id].description}</p>
        <div className="reviews">
          <Star path={mdiStar} size={1} color="black" />
          <p>{data[id].status.rating} / 5</p>
          <p>{data[id].status.review} Reviews</p>
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
          <button>Add to Cart</button>
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
