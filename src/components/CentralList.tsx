import React, { useState } from "react";
import { Food, FOOD_LIST } from "../interfaces/food";
import { FoodItem } from "./FoodItem";

export function CentralList(): JSX.Element {
    const [centralList] = useState<Food[]>(FOOD_LIST);
    return (
        <div>
            {centralList.map((food: Food) => (
                <FoodItem
                    key={food.name}
                    name={food.name}
                    description={food.description}
                    image={food.image}
                    price={food.price}
                    calories={food.calories}
                    ingredients={food.ingredients}
                ></FoodItem>
            ))}
        </div>
    );
}
