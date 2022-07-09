import React from "react";
import Products from "./Products";
import data from "../data.js";

function ProductPage() {
  const products = data.map((item) => {
    return (
      <Products
        key={item.id}
        id={item.id}
        item={item.title}
        price={item.price}
        src={item.src}
      />
    );
  });

  return (
    <div className="products-container">
      <div className="collection">
        <div className="collection-text">
          <h2>COLLECTION</h2>
          <p>2022</p>
        </div>
      </div>
      <div className="products-grid">{products}</div>
    </div>
  );
}

export default ProductPage;
