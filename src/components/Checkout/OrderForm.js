import React from "react";
import { mdiCheckboxMarkedCircleOutline } from "@mdi/js";
import Check from "@mdi/react";

export default function OrderForm() {
  return (
    <div>
      <div>
        <Check path={mdiCheckboxMarkedCircleOutline} />
        <h1>Your order is complete!</h1>
        <p>You will be receiving a confirmation email with order details.</p>
        <div>
          <button>Return to homepage</button>
        </div>
      </div>
    </div>
  );
}
