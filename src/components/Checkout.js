import React from "react";
import Logo from "../Images/wave.png";
import PayPal from "../Images/Payment pngs/paypal.png";
import ApplePay from "../Images/Payment pngs/applepay.png";
import Amazon from "../Images/Payment pngs/amazon.png";
import { countryList } from "../CountryData";

export default function Checkout() {
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
        <div>
          <h2>Shipping address</h2>
          <form action="">
            <select name="" id="">
              <option>select country</option>
              {options}
            </select>
            <div>
              <input type="text" placeholder="First name" />
              <input type="text" placeholder="Last name" />
            </div>
            <input type="text" placeholder="Address" />
            <input type="text" placeholder="Apartment, suite, ect" />
            <div>
              <input type="text" placeholder="City" />
              <input type="text" placeholder="State" />
              <input type="text" placeholder="ZIP code" />
            </div>
            <input type="text" placeholder="Phone" />
            <div>
              <input type="checkbox" />
              <p>Text me with news and offers</p>
            </div>
          </form>
        </div>
        <div>
          <p>Return to cart</p>
          <button>Continue to Shipping</button>
        </div>
      </div>
      <div className="checkout-cart-items">
        <div>
          <img src="" alt="" />
          <div>
            <p>Item</p>
            <p>color</p>
          </div>
          <p>$64.00</p>
        </div>
        <div>
          <input type="text" placeholder="Gift card or discount code" />
          <button>Apply</button>
        </div>
        <div>
          <div>
            <p>Subtotal</p>
            <p>$64.00</p>
          </div>
          <div>
            <p>Shipping</p>
            <p>$16.44</p>
          </div>
          <div>
            <p>Taxes</p>
            <p>$4.64</p>
          </div>
        </div>
        <div>
          <p>Total</p>
          <div>
            <p>USD</p>
            <p>$85.08</p>
          </div>
        </div>
      </div>
    </div>
  );
}
