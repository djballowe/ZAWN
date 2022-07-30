import React from "react";

export default function Addresses(props) {
  return (
    <div className="address-details-container" id={props.id}>
      <div className="address-details">
        <p>
          {props.FirstName} {props.LastName}
        </p>
        <p>{props.address}</p>
        <p>
          {props.city} {props.state} {props.zip}
        </p>
        <p>United States</p>
      </div>
      <div className="crud">
        <button onClick={props.edit} id={props.id} name='edit'>
          Edit
        </button>
        <button onClick={props.edit} id={props.id} name='delete'>Delete</button>
      </div>
    </div>
  );
}
