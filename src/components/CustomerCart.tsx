import React, { useState } from "react";
import { FOOD_LIST, Food } from "../interfaces/food";
import { FoodItem } from "./FoodItem";
import { useDrop } from "react-dnd";
import "../App.css";

export function CustomerCart(): JSX.Element {
    const [cart, setCart] = useState<Food[]>([]);
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
        setCart([...cart, droppedFood[0]]);
    }

    return (
        <div
            ref={drop}
            className="Cart"
            style={{ backgroundColor: isOver ? "blue" : "white" }}
        >
            {cart.map((food: Food) => {
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
