import React from "react";
import Logo from "../Images/wave.png";
import PayPal from "../Images/Payment pngs/paypal.png";
import ApplePay from "../Images/Payment pngs/applepay.png";
import Amazon from "../Images/Payment pngs/amazon.png";
import { countryList } from "../../CountryData";
import { useNavigate } from "react-router-dom";
import OrderCheckout from "./OrderCheckout";

export default function Checkout() {

  let navigate = useNavigate();

  const options = countryList.map((country) => {
    return (
      <option key={country} value={country}>
        {country}
      </option>
    );
  });

  return (
    <div className="checkout-container">
      <div className="checkout-information">
        <div className="logo">
          <h2>ZAWN</h2>
          <img src={Logo} alt="" />
        </div>
        <OrderCheckout />
      </div>
      <div className="express">
        <p>Express Checkout</p>
        <div className="payment-buttons">
          <button>
            <img src={Amazon} alt="" />
          </button>
          <button>
            <img src={PayPal} alt="" />
          </button>
          <button>
            <img src={ApplePay} alt="" />
          </button>
        </div>
      </div>
      <div className="divider">
        <div></div>
        <p>OR</p>
        <div></div>
      </div>
      <div className="contact-info">
        <h3>Contact Information</h3>
        <p>
          Already have an account? <a href="">Log in</a>
        </p>
      </div>
      <div className="checkout-email">
        <input type="Email" placeholder="Email" required />
        <div className="checkbox">
          <input type="checkbox" />
          <p>Email me with news and offers</p>
        </div>
      </div>
      <div className="checkout-shipping-info">
        <h2>Shipping address</h2>
        <form action="">
          <select name="" id="">
            {options}
          </select>
          <div className="name">
            <input type="text" placeholder="First name" required />
            <input type="text" placeholder="Last name" required />
          </div>
          <input type="text" placeholder="Address" required />
          <input type="text" placeholder="Apartment, suite, ect" required />
          <div className="address">
            <input type="text" placeholder="City" required />
            <input type="text" placeholder="State" required />
            <input type="text" placeholder="ZIP code" required />
          </div>
          <input type="text" placeholder="Phone" required />
          <div className="offers-text">
            <input type="checkbox" />
            <p>Text me with news and offers</p>
          </div>
        </form>
      </div>
      <div className="continue">
        <button
          onClick={() => {
            navigate("/checkout-shipping");
          }}
        >
          Continue to Shipping
        </button>
        <p>Return to cart</p>
      </div>
    </div>
  );
}
