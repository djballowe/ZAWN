import React from "react";
import { cartItemsArray } from "./ProductMain";
import { useNavigate } from "react-router-dom";
import Arrow from "../Images/chevron-left.png";
import BestSellers from "../BestSellers";
import data from "../Data/data";

function Home() {
  let navigate = useNavigate();

  let bestSellers = data.filter((item) => item.best_seller === true);

  const sellers = bestSellers.map((item) => {
    return (
      <BestSellers
        title={item.title}
        src={item.src}
        price={item.price}
        key={item.id}
        id={item.id}
      />
    );
  });

  return (
    <div className="home-container">
      <div className="banner-container">
        <div className="banner-content">
          <div className="home-logo">
            <h1>ZAWN</h1>
          </div>
          <div className="home-collection">
            <p>2021 Collection out now</p>
            <div className="home-shop">
              <a
                onClick={() => {
                  navigate("/product");
                }}
              >
                Shop
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="sellers">
          <h1>Best Sellers</h1>
          <div className="best-sellers-container">
            {sellers}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
