import React, { useState, useEffect } from "react";
import Close from "@mdi/react";
import { mdiClose } from "@mdi/js";
import { auth, shippingCollectionRef } from "../../firebase/Config";
import { useAuthState } from "react-firebase-hooks/auth";
import { updateDoc } from "firebase/firestore";

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

  async function editAddress(e) {
    e.preventDefault();
    await updateDoc(shippingCollectionRef, {
      uid: user.uid,
      FirstName: isFirstName,
      LastName: isLastName,
      Phone: isPhone,
      AddressOne: isAddressOne,
      Zip: isZip,
      City: isCity,
      State: isState,
    });
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
          <p>Edit Address</p>
        </div>
        <button>
          <Close path={mdiClose} size={1} onClick={props.click} />
        </button>
      </div>
      <div className="address-form">
        <form action="" onSubmit={editAddress} id="new-address-form">
          <p>Please fill in the fields below:</p>
          <div className="address-name">
            <input
              required
              type="text"
              defaultValue={isFirstName}
              placeholder="First name"
              onChange={(e) => {
                setIsFirstName(e.target.value);
              }}
            />
            <input
              required
              type="text"
              defaultValue={isLastName}
              placeholder="Last Name"
              onChange={(e) => {
                setIsLastName(e.target.value);
              }}
            />
          </div>
          <div className="address-phone">
            <input
              type="text"
              defaultValue={isPhone}
              placeholder="Phone Number"
              onChange={(e) => {
                setIsPhone(e.target.value);
              }}
            />
            <input
              required
              type="text"
              defaultValue={isAddressOne}
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
              defaultValue={isCity}
              placeholder="City"
              onChange={(e) => {
                setIsCity(e.target.value);
              }}
            />
            <input
              required
              type="text"
              defaultValue={isZip}
              placeholder="Zip Code"
              onChange={(e) => {
                setIsZip(e.target.value);
              }}
            />
          </div>
          <input
            required
            type="text"
            defaultValue={isState}
            placeholder="State"
            onChange={(e) => {
              setIsState(e.target.value);
            }}
          />
          <button onClick={props.click}>Save</button>
        </form>
      </div>
    </div>
  );
}
