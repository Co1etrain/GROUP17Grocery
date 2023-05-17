import React, { useState } from "react";
import { Food } from "../interfaces/food";
import { useDrag } from "react-dnd";
import { Button, Form } from "react-bootstrap";
import { User } from "../interfaces/user";

export function FoodItem({
    id,
    name,
    description,
    image,
    price,
    calories,
    ingredients,
    category,
    onFoodUpdate,
    showEditButton,
    currentUser
}: Food & { onFoodUpdate?: (updatedFood: Food) => void } & {
    showEditButton: boolean;
} & { currentUser: User }): JSX.Element {
    const [{ isDragging }, drag] = useDrag({
        type: "food",
        item: { id: id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    });
    const [isDescHidden, setIsDescHidden] = useState<boolean>(true);
    const [editMode, setEditMode] = useState<boolean>(false);
    const [editedName, setEditedName] = useState<string>(name);
    const [editedDescription, setEditedDescription] =
        useState<string>(description);
    const [editedPrice, setEditedPrice] = useState<number>(price);

    const handleUpdate = (event: React.FormEvent) => {
        event.preventDefault();
        const updatedFood: Food = {
            id,
            name: editedName,
            description: editedDescription,
            image,
            price: editedPrice,
            calories,
            ingredients: [...ingredients],
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
                            onChange={(event) =>
                                setEditedName(event.target.value)
                            }
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="text"
                            value={editedDescription}
                            onChange={(event) =>
                                setEditedDescription(event.target.value)
                            }
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="number"
                            value={editedPrice}
                            onChange={(event) =>
                                setEditedPrice(parseFloat(event.target.value))
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
                        Ingredients:{" "}
                        {ingredients.reduce(
                            (finalString: string, ingredient: string): string =>
                                finalString + ingredient + ", ",
                            ""
                        )}
                        <br />
                        Aisle: {category}
                        <br />
                        Rating:
                    </p>
                    {renderEditButton()}
                </>
            );
        }
    };

    const renderEditButton = () => {
        if (onFoodUpdate && showEditButton && currentUser.role !== "customer") {
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
                    border: isDragging ? "0px" : "0px"
                }}
            >
                <img src={image} width="100px" alt="Food icon" />
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
