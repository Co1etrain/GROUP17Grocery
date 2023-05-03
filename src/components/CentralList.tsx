import React from "react";
import { Food } from "../interfaces/food";
import { FoodItem } from "./FoodItem";
import "../App.css";
import { Users } from "../interfaces/user";
//import { Users } from "../interfaces/record";

interface CentralListProps {
    centralList: Food[];
    //setCentralList: (newCentralList: Food[]) => void;
    onFoodUpdate: (updatedFood: Food) => void;
    currentUser: Users["person"];
}

export function CentralList({
    centralList,
    onFoodUpdate,
    currentUser
}: CentralListProps): JSX.Element {
    return (
        <div style={{ paddingTop: "15px" }}>
            <h2>Main Inventory</h2>
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
                                ingredients={[...food.ingredients]}
                                category={food.category}
                                onFoodUpdate={onFoodUpdate}
                                showEditButton={false}
                                currentUser={currentUser}
                            ></FoodItem>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
