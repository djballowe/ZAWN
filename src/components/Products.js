import React from "react";



function Products(props) {
  return (
    <div className="product">
      <img src={require(`../Images/Product Page/Tooth Brush/${props.src}`)} alt="" />
      <div className="product-text">
        <p>${props.price}</p>
        <p>{props.item}</p>
    </div>
    </div>
  );
}

export default Products;
