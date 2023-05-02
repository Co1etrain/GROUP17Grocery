import React, { useState } from "react";
import { Food } from "../interfaces/food";
import {
    Modal,
    Button,
    Form,
    InputGroup,
    FloatingLabel,
    FormText,
    Stack,
    Row,
    Col
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
    const [id, setId] = useState<number>(centralList.length + 1);
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [image, setImage] = useState<string>("");
    const [price, setPrice] = useState<string>("0");
    const [calories, setCalories] = useState<string>("0");
    const [category, setCategory] = useState<string>("");
    const [ingredients, setIngredients] = useState<string>("");

    function appendNewFood() {
        const newCentralList = centralList.map((food: Food) => ({
            ...food,
            Ingredients: [...food.ingredients]
        }));

        setId(id + 1);

        const newFood: Food = {
            id: id,
            name: name,
            description: description,
            image: image,
            price: parseInt(price),
            calories: parseInt(calories),
            ingredients: ingredients.split(","),
            category: category
        };

        setCentralList([...newCentralList, newFood]);
        closeForm();
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
            >
                Add Food
            </Button>

            <Modal show={showForm} onHide={closeForm}>
                <Modal.Header closeButton>
                    <Modal.Title>Please fill out all fields:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Stack gap={3}>
                        <Form.Group>
                            <FloatingLabel label="Food Name">
                                <Form.Control
                                    type="food name"
                                    placeholder="Food Name"
                                    aria-label="Name_Field"
                                    onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>
                                    ) => setName(e.target.value)}
                                />
                            </FloatingLabel>
                        </Form.Group>
                        <Row>
                            <InputGroup as={Col}>
                                <InputGroup.Text>$</InputGroup.Text>
                                <Form.Control
                                    type="number"
                                    placeholder="Price"
                                    aria-label="Price_Field"
                                    onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>
                                    ) => setPrice(e.target.value)}
                                />
                            </InputGroup>

                            <InputGroup as={Col}>
                                <Form.Control
                                    type="number"
                                    placeholder="Calories"
                                    aria-label="Calorie_Field"
                                    onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>
                                    ) => setCalories(e.target.value)}
                                />
                                <InputGroup.Text>cal</InputGroup.Text>
                            </InputGroup>
                        </Row>

                        <FloatingLabel label="Description">
                            <Form.Control
                                as="textarea"
                                type="descripton"
                                placeholder="Description"
                                aria-label="Description_Field"
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => setDescription(e.target.value)}
                            />
                        </FloatingLabel>
                        <FloatingLabel label="Image URL">
                            <Form.Control
                                type="image_url"
                                placeholder="Image URL"
                                aria-label="Image_Field"
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => setImage(e.target.value)}
                            />
                            <FormText>Ex: https://www.imageurl.com/</FormText>
                        </FloatingLabel>

                        <Form.Group>
                            <Form.Label>Select Aisle</Form.Label>
                            <Form.Select
                                aria-label="Select food category"
                                value={category}
                                onChange={(
                                    e: React.ChangeEvent<HTMLSelectElement>
                                ) => setCategory(e.target.value)}
                            >
                                <option>category1</option>
                                <option>category2</option>
                            </Form.Select>
                        </Form.Group>
                        <InputGroup>
                            <FloatingLabel label="Ingredients">
                                <Form.Control
                                    as="textarea"
                                    type="ingredients"
                                    placeholder="Ingredients"
                                    aria-label="Ingredients_Field"
                                    onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>
                                    ) => setIngredients(e.target.value)}
                                />
                                <FormText>
                                    Please enter as a comma separated list, i.e.
                                    ing1, ing2, ...
                                </FormText>
                            </FloatingLabel>
                        </InputGroup>
                    </Stack>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeForm}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={appendNewFood}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
