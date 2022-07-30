import React, { useState, useEffect } from "react";
import Close from "@mdi/react";
import { mdiClose } from "@mdi/js";

export default function AddAddress(props) {
  const [isOpen, setIsOpen] = useState(props.open);

  useEffect(() => {
    setIsOpen(props.open);
  }, [props.open]);
  return (
    <div
      className="add-address-body"
      style={{
        right: isOpen ? "0" : "-550px",
      }}
    >
      <div className="cart-top">
        <div className="bag">
          <p>Add New Address</p>
        </div>
        <button>
          <Close path={mdiClose} size={1} onClick={props.click} />
        </button>
      </div>
      <div className="address-form">
        <form action="">
          <p>Please fill in the fields below:</p>
          <div className="address-name">
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="address-phone">
            <input type="text" placeholder="Phone Number" />
            <input type="text" placeholder="Address 1" />
            <input type="text" placeholder="Address 2" />
          </div>
          <div className="address-name">
            <input type="text" placeholder="City" />
            <input type="text" placeholder="Zip Code" />
          </div>
          <input type="text" placeholder="State" />
          <button>Add Address</button>
        </form>
      </div>
    </div>
  );
}
