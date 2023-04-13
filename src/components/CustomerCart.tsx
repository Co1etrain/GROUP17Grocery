import React, { useState } from "react";
import { Food } from "../interfaces/Food";

const FOOD: Food = { name: "Test" };
const FOODS = [FOOD];

export function CustomerCart(): JSX.Element {
    const [cart, setCart] = useState<Food[]>(FOODS);
    return (
        <div>
            <ul>
                {cart.map((item: Food) => (
                    <li key={item.name}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}
