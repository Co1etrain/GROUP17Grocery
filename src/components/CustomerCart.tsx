import React, { useState } from "react";
import { FOOD_LIST, Food } from "../interfaces/food";
import { FoodItem } from "./FoodItem";
import "../App.css";
import { useDrop } from "react-dnd";
import { Container } from "react-bootstrap";

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
        drop: (item: Food) => addFoodToCart(item.name),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    });

    function addFoodToCart(name: string) {
        const droppedFood: Food[] = FOOD_LIST.filter(
            (food: Food) => food.name === name
        );
        setCartList([...cartList, droppedFood[0]]);
    }

    return (
        <>
            <h2>{customerName + "'s"} Cart</h2>
            <Container ref={drop} className="Cart">
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
                        ></FoodItem>
                    );
                })}
            </Container>
        </>
    );
}
