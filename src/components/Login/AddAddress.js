import React, { useState, useEffect } from "react";
import Close from "@mdi/react";
import { mdiClose } from "@mdi/js";
import { auth, shippingCollectionRef } from "../../firebase/Config";
import { useAuthState } from "react-firebase-hooks/auth";
import { addDoc } from "firebase/firestore";

export default function AddAddress(props) {
  const [user] = useAuthState(auth);
  const [isOpen, setIsOpen] = useState(props.open);
  const [isFirstName, setIsFirstName] = useState("");
  const [isLastName, setIsLastName] = useState("");
  const [isPhone, setIsPhone] = useState("");
  const [isAddressOne, setIsAddressOne] = useState("");
  const [isCity, setIsCity] = useState("");
  const [isZip, setIsZip] = useState("");
  const [isState, setIsState] = useState("");

  async function createNewAddress(e) {
    e.preventDefault();
    await addDoc(shippingCollectionRef, {
      uid: user.uid,
      FirstName: isFirstName,
      LastName: isLastName,
      Phone: isPhone,
      AddressOne: isAddressOne,
      Zip: isZip,
      City: isCity,
      State: isState,
    });
    document.getElementById("new-address-form").reset();
  }

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
        <form action="" onSubmit={createNewAddress} id="new-address-form">
          <p>Please fill in the fields below:</p>
          <div className="address-name">
            <input
              required
              type="text"
              value={isFirstName}
              placeholder="First name"
              onChange={(e) => {
                setIsFirstName(e.target.value);
              }}
            />
            <input
              required
              type="text"
              value={isLastName}
              placeholder="Last Name"
              onChange={(e) => {
                setIsLastName(e.target.value);
              }}
            />
          </div>
          <div className="address-phone">
            <input
              type="text"
              value={isPhone}
              placeholder="Phone Number"
              onChange={(e) => {
                setIsPhone(e.target.value);
              }}
            />
            <input
              required
              type="text"
              value={isAddressOne}
              placeholder="Address 1"
              onChange={(e) => {
                setIsAddressOne(e.target.value);
              }}
            />
          </div>
          <div className="address-name">
            <input
              required
              type="text"
              value={isCity}
              placeholder="City"
              onChange={(e) => {
                setIsCity(e.target.value);
              }}
            />
            <input
              required
              type="text"
              value={isZip}
              placeholder="Zip Code"
              onChange={(e) => {
                setIsZip(e.target.value);
              }}
            />
          </div>
          <input
            required
            type="text"
            value={isState}
            placeholder="State"
            onChange={(e) => {
              setIsState(e.target.value);
            }}
          />
          <button onClick={props.click}>Add Address</button>
        </form>
      </div>
    </div>
  );
}
