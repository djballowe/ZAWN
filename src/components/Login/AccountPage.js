import React from "react";

export default function AccountPage() {
  return (
    <div className="account-container">
      <ul className="account-navigation">
        <li>Orders</li>
        <li>Addresses</li>
        <li>Logout</li>
      </ul>
      <div className="account-orders">
        <div className="order-container">
          <div className="order-notification">1</div>
          <h2>Orders</h2>
        </div>
      </div>
      <div className="orders-catagories">
        <p>Order Number</p>
        <p>Date</p>
        <p>Payment status</p>
        <p>Fulfillment Status</p>
        <p>Total</p>
      </div>
      <div className="order-comps">
        <p>#247012</p>
        <p>January 19, 2022</p>
        <p>Paid</p>
        <p>Fulfilled</p>
        <p>$37</p>
      </div>
    </div>
  );
}

export function Orders() {
  return <div>Orders</div>;
}
