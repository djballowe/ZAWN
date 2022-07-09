import React from "react";



function Products(props) {
  return (
    <div className="product">
      <img src={require(`../Images/Product Page/Tooth Brush/${props.src}`)} alt="" />
      <p>{props.item}</p>
      <p>{props.price}</p>
    </div>
  );
}

export default Products;
