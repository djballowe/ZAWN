import React, { useEffect, useState } from "react";
import { accountSignOut } from "../../firebase/Config";
import { useAuthState } from "react-firebase-hooks/auth";
import Addresses from "./Addresses";
import AddAddress from "./AddAddress";
import { doc, getDocs } from "firebase/firestore";
import { auth, shippingCollectionRef } from "../../firebase/Config";

export default function AccountPage() {
  const [isAddressOpen, setIsAddressOpen] = useState(false);
  const [isAddAddress, setIsAddAddress] = useState(false);
  const [userAddresses, setUserAddresses] = useState([]);
  const [user] = useAuthState(auth);

  const handleClick = (e) => {
    e.target.id === "orders" ? setIsAddressOpen(false) : setIsAddressOpen(true);
  };

  const addressClick = () => {
    isAddAddress ? setIsAddAddress(false) : setIsAddAddress(true);
  };

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
        />
      );
    }
  });

  useEffect(() => {
    const getAddresses = async () => {
      const data = await getDocs(shippingCollectionRef);
      setUserAddresses(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getAddresses();

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
        <div
          onClick={addressClick}
          className="overlay"
          style={{
            opacity: isAddAddress ? "1" : "0",
          }}
        ></div>
        <AddAddress open={isAddAddress} click={addressClick} />
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
        <Orders />
        <Orders />
        <Orders />
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

export function Orders() {
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
              <p>January 19, 2022</p>
            </div>
            <div className="payment">
              <p>Payment status</p>
              <p>Paid</p>
            </div>
          </div>
          <div className="order-details">
            <div className="fulfillment">
              <p>Fulfillment Status</p>
              <p>Fulfilled</p>
            </div>
            <div className="order-total">
              <p>Total</p>
              <p>$37</p>
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
