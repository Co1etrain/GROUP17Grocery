import React, { useState } from "react";
import { FOOD_LIST, Food } from "../interfaces/food";
import { FoodItem } from "./FoodItem";
import "../App.css";
import { useDrop } from "react-dnd";

export function EmployeeCart({
    employeeList,
    onCentralListUpdate
}: {
    employeeList: Food[];
    onCentralListUpdate: (updatedFood: Food) => void;
}): JSX.Element {
    const [cartList, setCartList] = useState<Food[]>(employeeList);
    const [{ isOver }, drop] = useDrop({
        accept: "food",
        drop: (item: Food) => addFoodToCart(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    });

    function addFoodToCart(id: number) {
        const droppedFood: Food[] = FOOD_LIST.filter(
            (food: Food) => food.id === id
        );
        if (cartList.find((food: Food) => id === food.id) === undefined) {
            setCartList([...cartList, droppedFood[0]]);
        }
    }

    function handleFoodUpdate(updatedFood: Food) {
        setCartList((prevCartList) =>
            prevCartList.map((food) =>
                food.id === updatedFood.id ? updatedFood : food
            )
        );
        onCentralListUpdate(updatedFood);
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
                            id={food.id}
                            key={food.id}
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
