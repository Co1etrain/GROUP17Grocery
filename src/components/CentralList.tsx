import React from "react";
import { Food, FOOD_LIST } from "../interfaces/food";
import { FoodItem } from "./FoodItem";

export function CentralList(): JSX.Element {
    return (
        <div>
            {FOOD_LIST.map((food: Food) => (
                <FoodItem
                    key={food.name}
                    name={food.name}
                    description={""}
                    image={""}
                    price={0}
                    calories={0}
                    ingredients={[]}
                ></FoodItem>
            ))}
        </div>
    );
}
