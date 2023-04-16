/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Food } from "../interfaces/food";

export function CustomerCart(): JSX.Element {
    const [cart] = useState<Food[]>([]);
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
