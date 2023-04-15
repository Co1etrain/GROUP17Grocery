import React, { useState } from "react";
import { Food } from "../Interface/food";

export function CustomerCart(): JSX.Element {
    const [cart, setCart] = useState<Food[]>([]);
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
