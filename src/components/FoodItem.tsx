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

    const renderContent = () => {
        if (editMode) {
            return (
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
                    <Button onClick={() => setEditMode(false)}>Cancel</Button>
                </Form>
            );
        } else {
            return (
                <>
                    <p>
                        <strong>
                            {name} - ${price.toFixed(2)}
                        </strong>
                        <br />
                        {description}
                        <br />
                        {calories} Calories per serving
                        <br />
                        Ingredients: {ingredients}
                        <br />
                        {category}
                        <br />
                        This will be the 5 stars {rating}
                    </p>
                    {renderEditButton()}
                </>
            );
        }
    };

    const renderEditButton = () => {
        if (onFoodUpdate) {
            return <Button onClick={() => setEditMode(true)}>Edit</Button>;
        }
        return null;
    };

    return (
        <div ref={drag} className="Food-Container">
            <Button
                className="Food-Button"
                onClick={() => setIsDescHidden(!isDescHidden)}
                style={{
                    border: isDragging ? "5px solid Violet" : "0px"
                }}
            >
                <img src={image} width="100px" alt="" />
            </Button>
            <div
                className="Food-Desc"
                hidden={isDescHidden}
                style={{ border: "5px solid Black" }}
            >
                {renderContent()}
            </div>
        </div>
    );
}
