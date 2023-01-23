import { Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { createOrder } from "../database/db";
import { makeBurger } from "./Burger";
import "./Burger.css";

function Order() {
  let location = useLocation();
  const burger = location.state.burger;

  return (
    <>
      <h2>We hope it tastes well!</h2>
      <div className="burgerIngredients">
        <div className="top"></div>
        {makeBurger(burger.ingredients)}
        <div className="bottom"></div>
      </div>
      <div className="ingredientBtns">
        <Button
          onClick={() => {
            createOrder(burger.ingredients, burger.price);
          }}
          className="btn btn-primary"
        >
          Continue
        </Button>
        <Link to={"/"}>
          <Button className="btn-danger">Cancel</Button>
        </Link>
      </div>
    </>
  );
}
export default Order;
