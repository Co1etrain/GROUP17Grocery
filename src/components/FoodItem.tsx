import React, { useState } from "react";
import { Food } from "../Interface/food";

export function FoodItem({
    name,
    description,
    image,
    price,
    calories,
    ingredients
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
                {rating}
            </div>
        </div>
    );
}
