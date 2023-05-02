import React, { useState } from "react";
import { Food } from "../interfaces/food";
import {
    Modal,
    Button,
    Form,
    InputGroup,
    FloatingLabel
} from "react-bootstrap";

interface AddFoodProps {
    centralList: Food[];
    setCentralList: (newList: Food[]) => void;
}

export function AddFoodForm({
    centralList,
    setCentralList
}: AddFoodProps): JSX.Element {
    const [showForm, setShowForm] = useState<boolean>(false);
    const [id, setId] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [image, setImage] = useState<string>("");
    const [price, setPrice] = useState<string>("");
    const [calories, setCalories] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [ingredients, setIngredients] = useState<string>("");

    function appendNewFood() {
        const newCentralList = centralList.map((food: Food) => ({
            ...food,
            Ingredients: [...food.ingredients]
        }));

        const newFood = {
            id: parseInt(id),
            name: name,
            description: description,
            image: image,
            price: parseInt(price),
            calories: parseInt(calories),
            ingredients: [ingredients],
            category: category
        };

        setCentralList([...newCentralList, newFood]);
    }

    function closeForm() {
        setShowForm(false);
    }

    return (
        <div>
            <Button
                onClick={() => {
                    setShowForm(true);
                }}
            ></Button>

            <Modal show={showForm} onHide={closeForm}>
                <Modal.Header closeButton>
                    <Modal.Title>Please fill out all fields:</Modal.Title>
                    <Modal.Body>
                        <InputGroup.Text>$</InputGroup.Text>
                        <FloatingLabel label="Price">
                            <Form.Control
                                type="price"
                                placeholder="Price"
                                aria-label="Price_Field"
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => setPrice(e.target.value)}
                            />
                        </FloatingLabel>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={closeForm}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={appendNewFood}>
                            Add
                        </Button>
                    </Modal.Footer>
                </Modal.Header>
            </Modal>
        </div>
    );
}
