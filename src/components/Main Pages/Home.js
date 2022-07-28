import React from "react";
import { cartItemsArray } from "./ProductMain";

function Home() {
  return (
    <div>
      <button
        onClick={() => {
          console.log(localStorage);
          console.log(cartItemsArray);
        }}
      >
        Show Storage
      </button>
      <button
        onClick={() => {
          localStorage.clear();
        }}
      >
        Delete Storage
      </button>
    </div>
  );
}

export default Home;
