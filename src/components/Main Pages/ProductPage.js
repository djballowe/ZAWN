import React, { useRef } from "react";
import Products from "../Data/Products";
import data from "../Data/data";
import Cover from "../Images/collection images/cover.jpg";
import DownArrow from "@mdi/react";
import { mdiChevronDown } from "@mdi/js";

function ProductPage() {
  const productsRef = useRef();

  const handleClick = () => {
    productsRef.current.scrollIntoView({ behavior: "smooth" });
  };

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
        <div className="text">
          <div className="collection-text">
            <h2>COLLECTION</h2>
            <p>2022</p>
          </div>
          <div className="shopNow" onClick={handleClick}>
            <p>Shop Now</p>
            <div className="test-animation">
              <DownArrow path={mdiChevronDown} size={2} />
            </div>
          </div>
        </div>
        <div className="collection-image">
          <img src={Cover} alt="" />
        </div>
      </div>
      <div className="scroll" ref={productsRef}></div>
      <div className="products-grid">{products}</div>
    </div>
  );
}

export default ProductPage;
