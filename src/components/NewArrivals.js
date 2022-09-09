import React from "react";
import { useNavigate } from "react-router-dom";

const NewArrivals = (props) => {
  let navigate = useNavigate();
  const handleClick = (e) => {
    const id = e.target.id;
    navigate(`/product/${id}`);
  };

  return (
    <div className="best-sellers" onClick={handleClick}>
      <img
        src={require(`./Images/${props.src}`)}
        alt=""
        id={props.id}
        ref={props.page ? props.page : null}
      />
      <div>
        <p>{props.title}</p>
        <p>{props.price}</p>
      </div>
    </div>
  );
};

export default NewArrivals;
