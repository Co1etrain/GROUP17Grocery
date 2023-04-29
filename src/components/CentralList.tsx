import React from "react";
import { Food } from "../interfaces/food";
import { FoodItem } from "./FoodItem";
import "../App.css";
import { Users } from "../interfaces/record";
import { Button } from "react-bootstrap";
import { DeleteFoodButton } from "./DeleteFoodButton";

interface CentralListProps {
    centralList: Food[];
    setCentralList: (newCentralList: Food[]) => void;
    onFoodUpdate: (updatedFood: Food) => void;
    currentUser: Users["person"];
}

export function CentralList({
    centralList,
    setCentralList,
    onFoodUpdate,
    currentUser
}: CentralListProps): JSX.Element {
    return (
        <div className="CentralList" id="middle">
            {centralList.map((food: Food) => {
                return (
                    <div key={food.id}>
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
                    </div>
                );
            })}
        </div>
    );
}
