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
        <Orders />
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
