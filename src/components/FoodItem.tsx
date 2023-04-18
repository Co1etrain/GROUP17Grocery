import React, { useState } from "react";
import { Food } from "../interfaces/food";
import test from "../test_image/test.jpeg";

export function FoodItem({
    name,
    description,
    image,
    price,
    calories,
    ingredients,
    category
}: Food): JSX.Element {
    const [rating] = useState<number>(0);
    return (
        <div>
            <img src={test} width="100px"></img>
            <div hidden={true}>
                {name}
                {image}
                {description}
                {price}
                {calories}
                {ingredients}
                {category}
                {rating}
            </div>
        </div>
    );
}
