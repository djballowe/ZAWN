import React from "react";
import { mdiCheckboxMarkedCircleOutline } from "@mdi/js";
import Arrow from "../Images/chevron-left.png";
import Check from "@mdi/react";
import { useNavigate } from "react-router-dom";

export default function OrderForm() {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    window.location.reload(false);
  };

  return (
    <div>
      <div className="complete-container">
        <div className="shadow">
          <div className="complete-text">
            <Check path={mdiCheckboxMarkedCircleOutline} size={5} />
            <h1>Your order is complete!</h1>
            <p>
              You will be receiving a confirmation email with your order
              details.
            </p>
            <p>Thank you for shopping at ZAWN</p>
          </div>
          <p>Need anything else?</p>
          <button onClick={handleClick}>
            <img src={Arrow} alt="" /> Return to home
          </button>
        </div>
      </div>
    </div>
  );
}
