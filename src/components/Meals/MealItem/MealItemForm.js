import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = ({ id, onAddToCart }) => {
  const amountInputRef = useRef();

  const [isValid, setISValid] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAount;

    if (
      enteredAount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setISValid(false);
      return;
    }

    onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onClick={submitHandler}>
      <Input
        ref={amountInputRef}
        id={"amount_" + id}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!isValid && <p>Please Enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
