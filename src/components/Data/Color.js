import React, { useState, useEffect } from "react";
import { cartItemsArray } from "./ProductMain";

const Color = (props) => {
  const [isSelected, setIsSelected] = useState();

  const handleClick = (e) => {
    setIsSelected(e.target.id);
  };

  useEffect(() => {});

  return (
    <div className="color-picker">
      <div className="colors">
        <div
          className={`${props.color} ${
            isSelected === props.color ? "selected" : "notSelected"
          }`}
          onClick={handleClick}
          id={props.color}
        ></div>
        <p>{props.color}</p>
      </div>
    </div>
  );
};

export default Color;
