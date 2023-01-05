import { createContext } from "react";

const CartContext = createContext({
  item: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (item) => {},
});

export default CartContext;
