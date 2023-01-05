import React, { Children } from "react";
import CartContext from "./cart-context";

const CartProvider = ({ children }) => {
  const addItemToCartHandeler = (item) => {};
  const removerItemFromCartHandeler = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandeler,
    removeItem: removerItemFromCartHandeler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
