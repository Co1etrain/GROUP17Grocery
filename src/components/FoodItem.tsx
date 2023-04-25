import React, { useState } from "react";
import { Food } from "../interfaces/food";
import { useDrag } from "react-dnd";
import { Button, Form } from "react-bootstrap";

export function FoodItem({
    id,
    name,
    description,
    image,
    price,
    calories,
    ingredients,
    category,
    onFoodUpdate
}: Food & { onFoodUpdate?: (updatedFood: Food) => void }): JSX.Element {
    const [{ isDragging }, drag] = useDrag({
        type: "food",
        item: { id: id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    });
    const [isDescHidden, setIsDescHidden] = useState<boolean>(true);
    const [rating] = useState<number>(0);
    const [editMode, setEditMode] = useState<boolean>(false);
    const [editedName, setEditedName] = useState<string>(name);
    const [editedDescription, setEditedDescription] =
        useState<string>(description);
    const [editedPrice, setEditedPrice] = useState<number>(price);

    const handleUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        const updatedFood: Food = {
            id,
            name: editedName,
            description: editedDescription,
            image,
            price: editedPrice,
            calories,
            ingredients,
            category
        };
        if (onFoodUpdate) {
            onFoodUpdate(updatedFood);
        }
        setEditMode(false);
    };

    return (
        <div ref={drag}>
            <Button
                onClick={() => setIsDescHidden(!isDescHidden)}
                style={{
                    backgroundColor: "pink",
                    border: isDragging ? "5px solid Violet" : "0px",
                    margin: "5px"
                }}
            >
                <img src={image} width="100px"></img>
            </Button>
            <div hidden={isDescHidden}>
                {editMode ? (
                    <Form onSubmit={handleUpdate}>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={editedName}
                                onChange={(e) => setEditedName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                value={editedDescription}
                                onChange={(e) =>
                                    setEditedDescription(e.target.value)
                                }
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="number"
                                value={editedPrice}
                                onChange={(e) =>
                                    setEditedPrice(parseFloat(e.target.value))
                                }
                            />
                        </Form.Group>
                        <Button type="submit">Save</Button>
                        <Button onClick={() => setEditMode(false)}>
                            Cancel
                        </Button>
                    </Form>
                ) : (
                    <>
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
                        {onFoodUpdate && (
                            <Button onClick={() => setEditMode(true)}>
                                Edit
                            </Button>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
