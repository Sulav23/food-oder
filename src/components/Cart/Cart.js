import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = ({ onHideCart }) => {
  return (
    <Modal onClick={onHideCart}>
      <div className={classes.total}>
        <sapn>Total Amount</sapn>
        <sapn>32.56</sapn>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onHideCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
