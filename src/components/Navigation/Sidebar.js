import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="side-bar-nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/product">Collection</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
}
