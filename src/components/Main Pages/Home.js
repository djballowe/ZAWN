/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import BestSellers from "../BestSellers";
import NewArrivals from "../NewArrivals";
import { mdiChevronRight } from "@mdi/js";
import { mdiChevronLeft } from "@mdi/js";
import LeftArrow from "@mdi/react";
import RightArrow from "@mdi/react";
import Cover2 from "../Images/collection images/cover2.jpg";
import Cover1 from "../Images/collection images/cover1.jpg";
import Cover3 from "../Images/collection images/green.jpg";
import Cover4 from "../Images/collection images/green2.jpg";
import { getDocs } from "firebase/firestore";
import { productCollectionRef } from "../../firebase/Config";

function Home() {
  let navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const sellerRef = useRef();
  const sellerRefLeft = useRef();
  const arrivalRef = useRef();
  const arrivalRefLeft = useRef();

  const { ref: myRef, inView: isVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: cover, inView: coverVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: best, inView: sellerVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: arrival, inView: arrivalVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  let bestSellers = products.filter((item) => item.best_seller === true);

  let newArrivals = products.filter((item) => item.new_arrival === true);

  const sellers = bestSellers.map((item, index) => {
    let sellerProps = {
      title: item.title,
      src: item.src,
      price: item.price,
      key: item.id,
      id: item.id,
    };

    if (index === 5) {
      sellerProps.page = sellerRef;
    } else if (index === 0) {
      sellerProps.page = sellerRefLeft;
    }

    return <BestSellers {...sellerProps} />;
  });

  const arrivals = newArrivals.map((item, index) => {
    let arrivalProps = {
      title: item.title,
      src: item.src,
      price: item.price,
      key: item.id,
      id: item.id,
    };

    if (index === 5) {
      arrivalProps.page = arrivalRef;
    } else if (index === 0) {
      arrivalProps.page = arrivalRefLeft;
    }

    return <NewArrivals {...arrivalProps} />;
  });

  useEffect(() => {
    const getProducts = async () => {
      const products = await getDocs(productCollectionRef);
      setProducts(products.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getProducts();
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
            <p>2022 Collection Out Now</p>
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
      <div
        className={
          sellerVisible ? "animation sellers-container" : "sellers-container"
        }
      >
        <h1>Best Sellers</h1>
        <div className={"sellers"} ref={best}>
          <div className="best-sellers-container">{sellers}</div>
        </div>
        <div className="carousel-controller">
          <button
            className="best-seller-carousel-button"
            onClick={() => {
              sellerRefLeft.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "start",
              });
            }}
          >
            <LeftArrow path={mdiChevronLeft} />
          </button>
          <button
            className="best-seller-carousel-button"
            onClick={() => {
              sellerRef.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "start",
              });
            }}
          >
            <RightArrow path={mdiChevronRight} size={1.5} />
          </button>
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
      <div className="magazines">
        <img src={require("../Images/Mag pngs/forbs.png")} alt="" />
        <img src={require("../Images/Mag pngs/mens.png")} alt="" />
        <img src={require("../Images/Mag pngs/orphan.png")} alt="" />
        <img src={require("../Images/Mag pngs/vogue.png")} alt="" />
      </div>
      <div
        className={
          arrivalVisible ? "animation sellers-container" : "sellers-container"
        }
      >
        <h1>New Arrivals</h1>
        <div className={"sellers"} ref={arrival}>
          <div className="best-sellers-container">{arrivals}</div>
        </div>
        <div className="carousel-controller">
          <button
            className="best-seller-carousel-button"
            onClick={() => {
              arrivalRefLeft.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "start",
              });
            }}
          >
            <LeftArrow path={mdiChevronLeft} />
          </button>
          <button
            className="best-seller-carousel-button"
            onClick={() => {
              arrivalRef.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "start",
              });
            }}
          >
            <RightArrow path={mdiChevronRight} size={1.5} />
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
        <div className="home-cover-images">
          <img src={Cover3} alt="" />
          <img src={Cover4} alt="" />
        </div>
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
      </div>
    </div>
  );
}

export default Home;
