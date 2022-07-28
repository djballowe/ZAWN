import { cartItemsArray } from "../Main Pages/ProductMain";

export default function getTotal() {
  let total = 0;
  cartItemsArray.forEach((item) => {
    total +=
      Math.round((item.price * item.quantity + Number.EPSILON) * 100) / 100;
  });
  return total.toFixed(2);
}
