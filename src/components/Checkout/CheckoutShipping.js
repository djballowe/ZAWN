import React, { useState, useEffect } from "react";
import getTotal from "../Data/GetTotal";

export default function useCheckoutShipping() {
  const [idIsChecked, setIdIsChecked] = useState("");

  const handleChange = (e) => {
    const id = e.target.id;
    setIdIsChecked(id);
  };

  useEffect(() => {
    getTotal >= 50 ? setIdIsChecked("free") : setIdIsChecked("standard");
  }, []);
  
  return {
    idIsChecked,
    render: (
      <div>
        <div className="checkout-container">
          <h2>Shipping Method</h2>
          <div className="shipping-method">
            <>
              {getTotal >= 50 && (
                <div className="shipping-method-selection">
                  <div className="shipping-checkbox">
                    <input
                      type="checkbox"
                      id="free"
                      onChange={handleChange}
                      checked={idIsChecked === "free" ? true : false}
                    />
                    <p>Free Shipping</p>
                  </div>
                  <p>$0</p>
                </div>
              )}
            </>
            <div className="shipping-method-selection">
              <div className="shipping-checkbox">
                <input
                  type="checkbox"
                  id="standard"
                  checked={idIsChecked === "standard" ? true : false}
                  onChange={handleChange}
                />
                <p>Standard Shipping</p>
              </div>
              <p>$7.95</p>
            </div>
            <div className="shipping-method-selection">
              <div className="shipping-checkbox">
                <input
                  type="checkbox"
                  id="priority"
                  checked={idIsChecked === "priority" ? true : false}
                  onChange={handleChange}
                />
                <p>Priority Shipping</p>
              </div>
              <p>$11.95</p>
            </div>
            <div className="shipping-method-selection">
              <div className="shipping-checkbox">
                <input
                  type="checkbox"
                  id="business"
                  checked={idIsChecked === "business" ? true : false}
                  onChange={handleChange}
                />
                <p>2 Business Day Shipping</p>
              </div>
              <p>$16.44</p>
            </div>
          </div>
        </div>
        <div className="checkout-border"></div>
      </div>
    ),
  };
}
