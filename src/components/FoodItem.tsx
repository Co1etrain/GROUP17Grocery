import React, { useState } from "react";
import { Food } from "../interfaces/food";

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
            {name}
            <div hidden={true}>
                {description}
                {image}
                {price}
                {calories}
                {ingredients}
                {category}
                {rating}
            </div>
        </div>
    );
}
