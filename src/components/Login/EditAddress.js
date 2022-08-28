import React, { useState, useEffect } from "react";
import Close from "@mdi/react";
import { mdiClose } from "@mdi/js";
import { useAuthState } from "react-firebase-hooks/auth";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/Config";

export default function AddAddress(props) {
  const { AddressOne, City, FirstName, LastName, Phone, State, Zip, id } =
    props.name;

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
    const updateAddressRef = doc(db, "Shipping", id);
    await updateDoc(updateAddressRef, {
      FirstName: isFirstName,
      LastName: isLastName,
      Phone: isPhone,
      AddressOne: isAddressOne,
      Zip: isZip,
      City: isCity,
      State: isState,
    });
    props.update();
    document.getElementById("edit").reset();

  }

  useEffect(() => {
    setIsFirstName(props.name.FirstName);
    setIsLastName(props.name.LastName);
    setIsPhone(props.name.Phone);
    setIsAddressOne(props.name.AddressOne);
    setIsCity(props.name.City);
    setIsZip(props.name.Zip);
    setIsState(props.name.State);
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
        <form action="" onSubmit={editAddress} id="edit">
          <p>Please fill in the fields below:</p>
          <div className="address-name">
            <input
              required
              type="text"
              defaultValue={FirstName}
              placeholder="First name"
              onChange={(e) => {
                setIsFirstName(e.target.value);
              }}
            />
            <input
              required
              type="text"
              defaultValue={LastName}
              placeholder="Last Name"
              onChange={(e) => {
                setIsLastName(e.target.value);
              }}
            />
          </div>
          <div className="address-phone">
            <input
              type="text"
              defaultValue={Phone}
              placeholder="Phone Number"
              onChange={(e) => {
                setIsPhone(e.target.value);
              }}
            />
            <input
              required
              type="text"
              defaultValue={AddressOne}
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
              defaultValue={City}
              placeholder="City"
              onChange={(e) => {
                setIsCity(e.target.value);
              }}
            />
            <input
              required
              type="text"
              defaultValue={Zip}
              placeholder="Zip Code"
              onChange={(e) => {
                setIsZip(e.target.value);
              }}
            />
          </div>
          <input
            required
            type="text"
            defaultValue={State}
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
