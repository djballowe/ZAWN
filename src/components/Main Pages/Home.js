/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { cartItemsArray } from "./ProductMain";
import { useNavigate } from "react-router-dom";
import Arrow from "../Images/chevron-left.png";
import BestSellers from "../BestSellers";
import data from "../Data/data";
import Cover2 from "../Images/collection images/cover2.jpg";
import Cover1 from "../Images/collection images/cover1.jpg";
import Cover3 from "../Images/collection images/green.jpg";
import Cover4 from "../Images/collection images/green2.jpg";

function Home() {
  let navigate = useNavigate();
  const { ref: myRef, inView: isVisible } = useInView({
    triggerOnce: true,
    threshold: .3,
  });
  const { ref: cover, inView: coverVisible } = useInView({
    triggerOnce: true,
    threshold: .3,
  });

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
            <p>Products made to bring joy to your life</p>
            <p>and the planet</p>
          </div>
          <div className="home-collection">
            <p>2022 Collection out now</p>
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
      <div className="sellers-container">
        <h1>Best Sellers</h1>
        <div className="sellers">
          <div className="best-sellers-container">{sellers}</div>
        </div>
      </div>
      <div
        className={
          isVisible ? "animation home-cover-container" : "home-cover-container"
        }
        ref={myRef}
      >
        <div className="home-cover-images">
          <img src={Cover1} alt="" />
          <img src={Cover2} alt="" />
        </div>
        <div className="home-cover-text">
          <h1>
            Mornings <span>feel</span>
          </h1>
          <h1>
            <span>better</span> with
          </h1>
          <h1>ZAWN</h1>
          <button
            onClick={() => {
              navigate("/product");
            }}
          >
            Shop Now
          </button>
        </div>
      </div>
      <div
        className={
          coverVisible
            ? "animation home-cover-container"
            : "home-cover-container"
        }
        ref={cover}
      >
        <div className="home-cover-text">
          <h1>Learn more</h1>
          <h1>about our pledge</h1>
          <button
            onClick={() => {
              navigate("/about");
            }}
          >
            About
          </button>
        </div>
        <div className="home-cover-images">
          <img src={Cover3} alt="" />
          <img src={Cover4} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
