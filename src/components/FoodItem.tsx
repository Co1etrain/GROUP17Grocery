import React, { useState } from "react";
import { Food } from "../interfaces/food";
import test from "../test_image/test.jpeg";
import { useDrag } from "react-dnd";

export function FoodItem({
    name,
    description,
    image,
    price,
    calories,
    ingredients,
    category
}: Food): JSX.Element {
    const [{ isDragging }, drag] = useDrag({
        type: "food",
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging
        })
    });
    const [rating] = useState<number>(0);
    return (
        <div
            ref={drag}
            style={{ border: isDragging ? "5px solid black" : "0px" }}
        >
            <img src={test} width="100px"></img>
            {name}
            {image}
            {description}
            {price}
            {calories}
            {ingredients}
            {category}
            {rating}
        </div>
    );
}
