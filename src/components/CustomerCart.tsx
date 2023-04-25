import React, { useState } from "react";
import { FOOD_LIST, Food } from "../interfaces/food";
import { FoodItem } from "./FoodItem";
import "../App.css";
import { useDrop } from "react-dnd";

export function CustomerCart(
    {
        customerList
    }: {
        customerList: Food[];
    },
    { customerName }: { customerName: string }
): JSX.Element {
    const [cartList, setCartList] = useState<Food[]>(customerList);
    const [{ isOver }, drop] = useDrop({
        accept: "food",
        drop: (item: Food) => addFoodToCart(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    });

    function addFoodToCart(id: number) {
        const droppedFood: Food | undefined = FOOD_LIST.find(
            (food: Food) => food.id === id
        );
        if (droppedFood && !cartList.some((food: Food) => id === food.id)) {
            setCartList([...cartList, droppedFood]);
        }
    }

    return (
        <div>
            <h2>{customerName + "'s"} Cart</h2>
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
                        ></FoodItem>
                    );
                })}
            </div>
        </div>
    );
}
