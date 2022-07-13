import React from "react";
import ProductMain from "./ProductMain";
import data from "../data.js";
import { useNavigate, useParams } from "react-router-dom";

function Products(props) {
  let navigate = useNavigate();
  let { product } = useParams();

  const handleClick = (e) => {
    const id = e.target.id
    navigate(`/product/${id}`);
  };

  return (
    <div className="product">
      <div className="product-image" onClick={handleClick}>
        <img src={require(`../Images/${props.src}`)} alt="" id={props.id} />
      </div>
      <div className="product-text">
        <p>{props.item}</p>
        <p>${props.price}</p>
      </div>
    </div>
  );
}

export default Products;
