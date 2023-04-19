import React, { useState } from "react";
import { Food } from "../interfaces/food";
import test from "../test_image/test.jpeg";
import { useDrag } from "react-dnd";
import { type } from "os";

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
        item: { name: name },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    });
    const [rating] = useState<number>(0);
    return (
        <div ref={drag}>
            <img
                src={test}
                width="100px"
                style={{ border: isDragging ? "5px solid black" : "0px" }}
            ></img>
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
