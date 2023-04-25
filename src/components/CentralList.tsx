import React from "react";
import { Food } from "../interfaces/food";
import { FoodItem } from "./FoodItem";
import "../App.css";

export function CentralList({
    foodList,
    onFoodUpdate
}: {
    foodList: Food[];
    onFoodUpdate: (updatedFood: Food) => void;
}): JSX.Element {
    return (
        <div className="CentralList">
            {foodList.map((food: Food) => {
                return (
                    <FoodItem
                        id={food.id}
                        key={food.id}
                        name={food.name}
                        description={food.description}
                        image={food.image}
                        price={food.price}
                        calories={food.calories}
                        ingredients={food.ingredients}
                        category={food.category}
                        onFoodUpdate={onFoodUpdate}
                    ></FoodItem>
                );
            })}
        </div>
    );
}
