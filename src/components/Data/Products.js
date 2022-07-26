import React from "react";
import { useNavigate } from "react-router-dom";

function Products(props) {
  let navigate = useNavigate();

  const handleClick = (e) => {
    const id = e.target.id;
    navigate(`/product/${id}`);
  };

  return (
    <div className="product">
      <div className="product-image" onClick={handleClick}>
        <img src={require(`../Images/${props.src}`)} alt="" id={props.id} />
      </div>
      <div className="product-text">
        <p>{props.item}</p>
        <p>${props.price}</p>
      </div>
    </div>
  );
}

export default Products;
