import React, { useState } from "react";
import { Food, FOOD_LIST } from "../interfaces/food";
import { FoodItem } from "./FoodItem";
//create a button given a name/ form, name of food and create a new central list without the deleted
export function CentralList(): JSX.Element {
    const [centralList] = useState<Food[]>(FOOD_LIST);
    return (
        <div>
            {centralList.map((food: Food) => {
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
