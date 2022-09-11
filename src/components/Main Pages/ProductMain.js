import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
import Color from "../Data/Color";
import Slides from "../Data/Slides";
import { productCollectionRef } from "../../firebase/Config";
import { getDocs } from "firebase/firestore";
import Spinner from "../Navigation/Spinner";

export const cartItemsArray = JSON.parse(localStorage.getItem("cart")) || [];

class CartItemCreator {
  constructor(title, src, price, id, quantity, color) {
    this.title = title;
    this.src = src;
    this.price = price;
    this.id = id;
    this.quantity = quantity;
    this.color = color;
  }
}

export function updateStorage() {
  localStorage.clear();
  if (cartItemsArray.length !== 0) {
    localStorage.setItem("cart", JSON.stringify(cartItemsArray));
  }
}

function ProductMain(props) {
  const [selectedColor, setSelectedColor] = useState("");
  const [products, setProducts] = useState([]);

  let { id } = useParams();

  let product = products.find((x) => x.id === id);

  const handleClick = () => {
    props.handle();
    if (cartItemsArray.find((x) => x.id === product.id)) {
      cartItemsArray[
        cartItemsArray.map((item) => item.id).indexOf(product.id)
      ].quantity += 1;
    } else {
      cartItemsArray.push(
        new CartItemCreator(
          product.title,
          product.src,
          product.price,
          product.id,
          1,
          selectedColor
        )
      );
    }
    updateStorage();
  };

  const getColor = (e) => {
    const id = e.target.id;
    const selected = e.target.className;
    if (selected === "notSelected") {
      for (let i = 0; i < product.color.length; i++) {
        if (
          document.getElementById(product.color[i]).className === "selected"
        ) {
          document.getElementById(product.color[i]).className = "notSelected";
        }
      }
      document.getElementById(id).className = "selected";
      setSelectedColor(id);
    }
  };

  useEffect(() => {
    const getProducts = async () => {
      const products = await getDocs(productCollectionRef);
      setProducts(products.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getProducts();
  }, []);

  if (!product) {
    return <Spinner />;
  } else {
    const color = product.color.map((color, index) => {
      return <Color key={index} color={color} />;
    });

    return (
      <div>
        <div className="individual-container">
          <div className="products-image">
            <Slides img={product.img} />
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
              <div
                className="color-picker"
                onClick={getColor}
                id="color-picker"
              >
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
}

export default ProductMain;
