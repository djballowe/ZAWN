import React from "react";

export default function Addresses() {
  return (
    <div className="address-details-container">
      <div className="address-details">
        <p>David Ballowe</p>
        <p>3403 Vine Circle</p>
        <p>Rocklin CA 957650</p>
        <p>United States</p>
      </div>
      <div className="crud">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
}
