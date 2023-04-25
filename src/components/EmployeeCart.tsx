import React, { useState } from "react";
import { FOOD_LIST, Food } from "../interfaces/food";
import { FoodItem } from "./FoodItem";
import "../App.css";
import { useDrop } from "react-dnd";

export function EmployeeCart({
    employeeList
}: {
    employeeList: Food[];
}): JSX.Element {
    const [cartList, setCartList] = useState<Food[]>(employeeList);
    const [{ isOver }, drop] = useDrop({
        accept: "food",
        drop: (item: Food) => addFoodToCart(item.name),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    });

    function addFoodToCart(name: string) {
        const droppedFood: Food[] = FOOD_LIST.filter(
            (food: Food) => food.name === name
        );
        if (cartList.find((food: Food) => name === food.name) === undefined) {
            setCartList([...cartList, droppedFood[0]]);
        }
    }

    function handleFoodUpdate(updatedFood: Food) {
        setCartList((prevCartList) =>
            prevCartList.map((food) =>
                food.name === updatedFood.name ? updatedFood : food
            )
        );
    }

    return (
        <div>
            <h2>Employee/Manager Cart</h2>
            <div
                ref={drop}
                className="Cart"
                style={{
                    backgroundColor: isOver ? "MediumSeaGreen" : "white"
                }}
            >
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
                            onFoodUpdate={handleFoodUpdate}
                        ></FoodItem>
                    );
                })}
            </div>
        </div>
    );
}
