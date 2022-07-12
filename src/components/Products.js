import React from "react";

function Products(props) {
  return (
    <div className="product">
      <div className="product-image">
        <img src={require(`../Images/${props.src}`)} alt="" />
      </div>
      <div className="product-text">
        <p>{props.item}</p>
        <p>${props.price}</p>
      </div>
    </div>
  );
}

export default Products;
