import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";

const Cart = ({ onHideCart }) => {
  const cartCtx = useContext(CartContext);

  const cartItemRemoveHandeler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandeler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItem = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandeler.bind(null, item.id)}
          onAdd={cartItemAddHandeler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClick={onHideCart}>
      {cartItem}
      <div className={classes.total}>
        <sapn>Total Amount</sapn>
        <sapn>{totalAmount}</sapn>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onHideCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
