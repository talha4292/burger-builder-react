import "./OrderItem.css";

function OrderItem(props) {
  return (
    <div className="order">
      <p>
        Ingredients:{" "}
        <span className="ing-item">
          bacon ({props.order.ingredients.bacon})
        </span>
        <span className="ing-item">
          cheese ({props.order.ingredients.cheese})
        </span>
        <span className="ing-item">
          lettuce ({props.order.ingredients.lettuce})
        </span>
        <span className="ing-item">meat ({props.order.ingredients.meat})</span>
      </p>
      <p>
        Price <strong>RS {props.order.price}</strong>
      </p>
    </div>
  );
}

export default OrderItem;
