import React, { useState } from "react";
import { Food } from "../interfaces/food";
import { useDrag } from "react-dnd";
import { Button } from "react-bootstrap";

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
    const [isDescHidden, setIsDescHidden] = useState<boolean>(true);
    const [rating] = useState<number>(0);
    return (
        <div ref={drag}>
            <Button onClick={() => setIsDescHidden(!isDescHidden)}>
                <img
                    src={image}
                    width="100px"
                    style={{ border: isDragging ? "5px solid black" : "0px" }}
                ></img>
            </Button>
            <div hidden={isDescHidden}>
                <p>
                    <strong>
                        {name} - ${price}
                    </strong>
                    <br></br>
                    {description}
                    <br></br>
                    {calories} Calories per serving
                    <br></br>
                    Ingredients: {ingredients}
                    <br></br>
                    {category}
                    <br></br>
                    This will be the 5 stars {rating}
                </p>
            </div>
        </div>
    );
}
