import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, orderHistoryRef } from "../../firebase/Config";
import { db } from "../../firebase/Config";
import { accountSignOut } from "../../firebase/Config";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { apiInstance } from "../Data/Utils";
import { useStripe } from "@stripe/react-stripe-js";
import { CardElement, useElements } from "@stripe/react-stripe-js";
import { cartItemsArray } from "../Main Pages/ProductMain";

export default function ShippingForm(props) {
  let navigate = useNavigate();

  const [user] = useAuthState(auth);
  const [isFirstName, setIsFirstName] = useState("");
  const [isLastName, setIsLastName] = useState("");
  const [isAddress, setIsAddress] = useState("");
  const [isCity, setIsCity] = useState("");
  const [isState, setIsState] = useState("");
  const [isZip, setIsZip] = useState("");
  const [isPhone, setIsPhone] = useState("");
  const [isEmail, setIsEmail] = useState("");
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const shippingCollectionRef = collection(db, "Shipping");
  const stripe = useStripe();
  const elements = useElements();

  const configCardElement = {
    iconStyle: "solid",
    style: {
      base: {
        fontSize: "16px",
      },
    },
    hidePostalCode: true,
  };

  async function addOrder() {
    let today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();
    let rand = Math.floor(Math.random() * 100);
    let orderNum = (user.uid.slice(0, 4) + mm + dd + rand).toUpperCase();
    today = mm + "/" + dd + "/" + yyyy;
    await addDoc(orderHistoryRef, {
      uid: user.uid,
      OrderNumber: orderNum,
      FirstName: isFirstName,
      LastName: isLastName,
      address: isAddress,
      city: isCity,
      state: isState,
      zip: isZip,
      email: isEmail,
      amount: props.total,
      date: today,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const cardElement = elements.getElement("card");
    setPaymentProcessing(true);

    apiInstance
      .post("/payments/create", {
        amount: Math.round(props.total * 100),
      })
      .then(({ data: clientSecret }) => {
        stripe
          .createPaymentMethod({
            type: "card",
            card: cardElement,
            billing_details: {
              name: `${isFirstName} ${isLastName}`,
              email: isEmail,
              phone: isPhone,
              address: {
                line1: isAddress,
                city: isCity,
                state: isState,
                postal_code: isZip,
              },
            },
          })
          .then(({ paymentMethod }) => {
            stripe
              .confirmCardPayment(clientSecret, {
                payment_method: paymentMethod.id,
              })
              .then(({ paymentIntent }) => {
                console.log(paymentIntent);
                setPaymentProcessing(false);
                while (cartItemsArray.length) {
                  cartItemsArray.pop();
                }
                localStorage.clear();
                addOrder();
                navigate("/thank-you");
              });
          });
      });
  }

  useEffect(() => {
    const getAddresses = async () => {
      if (user) {
        const data = await getDocs(shippingCollectionRef);
        const addresses = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        let found = addresses.find((item) => item.uid === user.uid);

        setIsFirstName(found.FirstName);
        setIsLastName(found.LastName);
        setIsAddress(found.AddressOne);
        setIsPhone(found.Phone);
        setIsCity(found.City);
        setIsState(found.State);
        setIsZip(found.Zip);
      }
    };
    getAddresses();
  }, [user]);

  if (!user) {
    <div>Loading</div>;
  } else {
    return (
      <div>
        <div className="contact-info">
          <h3>Contact Information</h3>
          <div>
            {" "}
            {user ? (
              <p>
                Signed in as: {user.email}{" "}
                <span onClick={accountSignOut}>
                  <a href="">Log out</a>
                </span>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <span
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  <a href="">Log in</a>
                </span>
              </p>
            )}
          </div>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div className="checkout-email">
            <input
              type="Email"
              defaultValue={user.email}
              placeholder="Email"
              onChange={(e) => {
                setIsEmail(e.target.value);
              }}
              required
            />
            <div className="checkbox">
              <input type="checkbox" />
              <p>Email me with news and offers</p>
            </div>
          </div>
          <div className="checkout-shipping-info">
            <h2>Shipping address</h2>
            <div className="name">
              <input
                type="text"
                defaultValue={isFirstName ? `${isFirstName}` : ""}
                placeholder="First name"
                id="first-name"
                onChange={(e) => {
                  setIsFirstName(e.target.value);
                }}
                required
              />
              <input
                type="text"
                defaultValue={isLastName ? `${isLastName}` : ""}
                placeholder="Last name"
                id="last-name"
                onChange={(e) => {
                  setIsLastName(e.target.value);
                }}
                required
              />
            </div>
            <input
              type="text"
              defaultValue={isAddress ? `${isAddress}` : ""}
              placeholder="Address"
              id="address"
              onChange={(e) => {
                setIsAddress(e.target.value);
              }}
              required
            />
            <div className="address">
              <input
                type="text"
                defaultValue={isCity ? `${isCity}` : ""}
                placeholder="City"
                id="city"
                onChange={(e) => {
                  setIsCity(e.target.value);
                }}
                required
              />
              <input
                type="text"
                defaultValue={isState ? `${isState}` : ""}
                placeholder="State"
                id="state"
                onChange={(e) => {
                  setIsState(e.target.value);
                }}
                required
              />
              <input
                type="text"
                defaultValue={isZip ? `${isZip}` : ""}
                id="zip"
                placeholder="ZIP code"
                onChange={(e) => {
                  setIsZip(e.target.value);
                }}
                required
              />
            </div>
            <input
              type="text"
              defaultValue={isPhone ? `${isPhone}` : ""}
              placeholder="Phone"
              id="phone"
              onChange={(e) => {
                setIsPhone(e.target.id);
              }}
              required
            />
            <div>
              <div className="card-info-container">
                <div className="payment-payment">
                  <h2>Credit Card Information</h2>
                  <p>All transactions are secure and encrypted.</p>
                  <div className="card-element-container">
                    <CardElement options={configCardElement} />
                  </div>
                </div>
                {/* <div className="payment-payment">
                  <h2>Billing Address</h2>
                  <p>
                    Select the address that matches your card or payment method.
                  </p>
                  <div className="shipping-method">
                    <div className="shipping-method-selection">
                      <div className="shipping-checkbox">
                        <input type="checkbox" />
                        <p>Same as shipping address</p>
                      </div>
                    </div>
                    <div className="shipping-method-selection">
                      <div className="shipping-checkbox">
                        <input type="checkbox" />
                        <p>Use a different billing address</p>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="offers-text">
              <input type="checkbox" />
              <p>Text me with news and offers</p>
            </div>
            <div className="continue">
              <button type="submit" disabled={paymentProcessing}>
                Continue
              </button>
              <p
                onClick={() => {
                  navigate(-1);
                }}
              >
                Return to cart
              </p>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
