import React from "react";
import { Food } from "../interfaces/food";
import { FoodItem } from "./FoodItem";
import "../App.css";

export function CustomerCart({ cartList }: { cartList: Food[] }): JSX.Element {
    return (
        <div style={{ overflowY: "auto" }}>
            {cartList.map((food: Food) => {
                return (
                    <FoodItem
                        key={food.name}
                        name={food.name}
                        description={food.description}
                        image={food.image}
                        price={food.price}
                        calories={food.calories}
                        ingredients={food.ingredients}
                        category={food.category}
                    ></FoodItem>
                );
            })}
        </div>
    );
}
