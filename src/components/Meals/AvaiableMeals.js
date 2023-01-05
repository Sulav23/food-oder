import React from "react";
import { DUMMY_MEALS } from "../../dummy-meals";
import Card from "../UI/Card";
import classes from "./AvaiableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const AvaiableMeals = () => {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => (
            <MealItem key={meal.id} {...meal} />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvaiableMeals;
