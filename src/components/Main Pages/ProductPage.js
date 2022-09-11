import React, { useRef, useEffect, useState } from "react";
import Products from "../Data/Products";
import data from "../Data/data";
import Cover from "../Images/collection images/cover.jpg";
import DownArrow from "@mdi/react";
import { mdiChevronDown } from "@mdi/js";
import { getDocs } from "firebase/firestore";
import { productCollectionRef } from "../../firebase/Config";

function ProductPage() {
  const productsRef = useRef();

  const [products, setProducts] = useState([]);

  const handleClick = () => {
    productsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const productTiles = products.map((item) => {
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

  useEffect(() => {
    const getProducts = async () => {
      const products = await getDocs(productCollectionRef);
      setProducts(products.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getProducts();
  }, []);

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
      <div className="products-grid">{productTiles}</div>
    </div>
  );
}

export default ProductPage;
