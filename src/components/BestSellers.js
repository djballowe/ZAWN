import React from "react";


export default function BestSellers(props) {


  return (
    <div className="best-sellers">
      <img src={require(`./Images/${props.src}`)} alt="" id={props.id} />
      <div>
        <p>{props.title}</p>
        <p>{props.price}</p>
      </div>
    </div>
  );
}
