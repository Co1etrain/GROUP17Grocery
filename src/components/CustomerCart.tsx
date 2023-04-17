/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Food } from "../interfaces/food";
import { FoodItem } from "./FoodItem";

export function CustomerCart(): JSX.Element {
    const [cart] = useState<Food[]>([]);
    return (
        <div>
            <ul>
                {cart.map((food: Food) => {
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
                })}
            </ul>
        </div>
    );
}
