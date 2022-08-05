import React, { useEffect, useState, useCallback } from "react";
import { accountSignOut, db } from "../../firebase/Config";
import { useAuthState } from "react-firebase-hooks/auth";
import Addresses from "./Addresses";
import AddAddress from "./AddAddress";
import { getDocs, deleteDoc, doc } from "firebase/firestore";
import {
  auth,
  shippingCollectionRef,
  orderHistoryRef,
} from "../../firebase/Config";


export default function AccountPage(props) {
  const [isAddressOpen, setIsAddressOpen] = useState(false);
  const [orders, setOrders] = useState([]);
  const [isAddAddress, setIsAddAddress] = useState(false);
  const [userAddresses, setUserAddresses] = useState([]);
  const [user] = useAuthState(auth);

  const handleClick = (e) => {
    e.target.id === "orders" ? setIsAddressOpen(false) : setIsAddressOpen(true);
  };
  const addressClick = () => {
    isAddAddress ? setIsAddAddress(false) : setIsAddAddress(true);
    props.overlay();
  };

  const editDeleteAddress = (e) => {
    let found = userAddresses.find((item) => item.id === e.target.id);
    const userDoc = doc(db, "Shipping", found.id);
    e.target.name === "delete" ? deleteDoc(userDoc) : addressClick();
    getAddresses();
  };

  const displayOrders = orders.map((item) => {
    if (item.uid === user.uid) {
      return (
        <Orders
          first={item.FirstName}
          last={item.LastName}
          address={item.address}
          total={item.amount}
          city={item.city}
          date={item.date}
          email={item.email}
          state={item.state}
          uid={item.uid}
          zip={item.zip}
          key={item.id}
        />
      );
    }
  });

  const ad = userAddresses.map((item) => {
    if (item.uid === user.uid) {
      return (
        <Addresses
          FirstName={item.FirstName}
          LastName={item.LastName}
          address={item.AddressOne}
          city={item.City}
          state={item.State}
          zip={item.Zip}
          key={item.id}
          id={item.id}
          edit={editDeleteAddress}
        />
      );
    }
  });

  const getAddresses = useCallback(async () => {
    const data = await getDocs(shippingCollectionRef);
    setUserAddresses(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }, []);

  useEffect(() => {
    getAddresses();

    const getOrders = async () => {
      const data = await getDocs(orderHistoryRef);
      setOrders(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getOrders();

    isAddAddress
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }, [isAddAddress]);

  return (
    <div className="account-container">
      <div
        className="add-address-container"
        style={{
          visibility: isAddAddress ? "visible" : "hidden",
        }}
      >
        <AddAddress
          open={isAddAddress}
          click={addressClick}
          handle={getAddresses}
        />
      </div>
      <ul className="account-navigation">
        <li
          onClick={handleClick}
          id="orders"
          style={{
            textDecoration: isAddressOpen ? "none" : "underline",
          }}
        >
          Orders
        </li>
        <li
          onClick={handleClick}
          id="addresses"
          style={{
            textDecoration: isAddressOpen ? "underline" : "none",
          }}
        >
          Addresses
        </li>
        <li onClick={accountSignOut}>Logout</li>
      </ul>
      <div className="account-orders">
        <div className="order-container">
          {/* <div className="order-notification">1</div> */}
          <h2>{isAddressOpen ? "Addresses" : "Orders"}</h2>
        </div>
      </div>
      <div
        className="orders-wrapper"
        style={{
          display: isAddressOpen ? "none" : "grid",
        }}
      >
        {displayOrders}
      </div>
      <div
        className="addresses-wrapper"
        style={{
          display: isAddressOpen ? "grid" : "none",
        }}
      >
        {ad}
        <div className="add-address">
          <p onClick={addressClick}>Add a new address</p>
        </div>
      </div>
    </div>
  );
}

export function Orders(props) {
  return (
    <div className="order-components-container">
      <div className="orders-components-mobile">
        <div className="orders">
          <p>Order Number:</p>
          <p>#247012</p>
        </div>
        <div className="order-details-container">
          <div className="order-details">
            <div className="date">
              <p>Date</p>
              <p>{props.date}</p>
            </div>
            <div className="payment">
              <p>Name</p>
              <p>
                {props.first} {props.last}
              </p>
            </div>
          </div>
          <div className="order-details">
            <div className="city">
              <p>City</p>
              <p>{props.city}</p>
            </div>
            <div className="state">
              <p>State</p>
              <p>{props.state}</p>
            </div>
          </div>
          <div className="order-details">
            <div className="address">
              <p>Address</p>
              <p>{props.address}</p>
            </div>
          </div>
          <div className="order-details">
            <div className="zip">
              <p>Zip Code</p>
              <p>{props.zip}</p>
            </div>
            <div className="total">
              <p>Total</p>
              <p>${props.total}</p>
            </div>
          </div>
          <div className="button order-button">
            <button>
              <p>View Order Details</p>
            </button>
          </div>
        </div>
        <div className="orders-desktop"></div>
      </div>
    </div>
  );
}
