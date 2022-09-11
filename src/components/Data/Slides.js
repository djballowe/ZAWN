import React, { useState } from "react";

export default function Slides(props) {
  const [isActive, setIsActive] = useState(props.img[0]);

  const handleClick = (e) => {
    setIsActive(props.img[e.target.id]);
  };

  const images = props.img.map((image, index) => {
    return (
      <img
        src={require(`../Images/${image}`)}
        alt=""
        id={index}
        key={index}
        onClick={handleClick}
      />
    );
  });

  return (
    <div className="slide-container">
      <div className="main-image">
        <img src={require(`../Images/${isActive}`)} alt="" />
      </div>
      <div className="slide-images">{props.img.length === 1 ? "" : images}</div>
    </div>
  );
}
