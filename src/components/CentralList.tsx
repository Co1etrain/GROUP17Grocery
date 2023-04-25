import React from "react";
import { Food } from "../interfaces/food";
import { FoodItem } from "./FoodItem";
import "../App.css";

export function CentralList({ foodList }: { foodList: Food[] }): JSX.Element {
    return (
        <div className="CentralList">
            {foodList.map((food: Food) => {
                return (
                    <FoodItem
                        id={food.id}
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
