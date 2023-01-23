import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

function Checkout(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <h4>Your Order Details</h4>
        <ul>
          <li>Lettuce: {props.burger.ingredients.lettuce}</li>
          <li>Bacon: {props.burger.ingredients.bacon}</li>
          <li>Cheese: {props.burger.ingredients.cheese}</li>
          <li>Meat: {props.burger.ingredients.meat}</li>
        </ul>
        <h5>Total Price: RS. {props.burger.price}</h5>
      </Modal.Body>
      <Modal.Footer>
        <h6>Continue to checkout?</h6>
        <Link
          className="btn btn-primary"
          to={"/order"}
          state={{ burger: props.burger }}
        >
          Continue
        </Link>
        <Button className="btn-danger" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default Checkout;
