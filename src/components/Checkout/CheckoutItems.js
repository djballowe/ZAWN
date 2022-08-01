

export default function CheckoutItems(props) {
  return (
    <div>
      <div className="cart-item-checkout">
        <div className="cart-item-info">
          <img src={require(`/home/david/GitHub/CHO/src/components/Images/${props.src}`)} alt="" />
          <div>
            <p>{props.item}</p>
            <p>color</p>
            <p>{props.quantity}</p>
          </div>
        </div>
        <p>{props.price}</p>
      </div>
    </div>
  );
}
