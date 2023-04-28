/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Food } from "../interfaces/food";
import { FoodItem } from "./FoodItem";
import "../App.css";
import { Users } from "../interfaces/record";
//create a button given a name/ form, name of food and create a new central list without the deleted

export function CentralList({
    foodList,
    onFoodUpdate,
    currentUser
}: {
    foodList: Food[];
    onFoodUpdate: (updatedFood: Food) => void;
    currentUser: Users["person"];
}): JSX.Element {
    const [centralList, setCentralList] = useState<Food[]>(foodList);

    function deleteFood(name: string) {
        const newCentralList = centralList.filter((food) => food.name !== name);
        setCentralList(newCentralList);
    }

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
                        {currentUser == "owner" ? (
                            <button onClick={() => deleteFood(food.name)}>
                                Delete
                            </button>
                        ) : (
                            <div> Invalid user </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
