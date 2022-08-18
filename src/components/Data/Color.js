import React, { useState, useEffect } from "react";

const Color = (props) => {
  return (
    <div className="color-picker">
      <div className="colors">
        <div className="notSelected" id={props.color}></div>
        <p>{props.color}</p>
      </div>
    </div>
  );
};

export default Color;
