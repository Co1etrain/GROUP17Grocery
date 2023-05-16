import React, { useState } from "react";
import { Button, Modal, Stack, Form } from "react-bootstrap";
import { User } from "../interfaces/user";
import { Food, FOOD_LIST } from "../interfaces/food";

interface OwnerFoodViewProps {
    currentUser: User;
    userList: User[];
}

export function OwnerFoodView({
    currentUser,
    userList
}: OwnerFoodViewProps): JSX.Element {
    const [showForm, setShowForm] = useState<boolean>(false);
    const [selectedFood, setSelectedFood] = useState<string>("Apples");

    function closeForm() {
        setShowForm(false);
    }

    return (
        <div hidden={currentUser.role !== "owner"}>
            <Button
                onClick={() => {
                    setShowForm(true);
                }}
            >
                View a Food
            </Button>

            <Modal show={showForm} onHide={closeForm}>
                <Modal.Header closeButton>
                    <Modal.Title>View a Food</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Stack gap={3}>
                        <Form.Group controlId="userEmotions">
                            <Form.Label>Select a food:</Form.Label>
                            <Form.Select
                                value={selectedFood}
                                onChange={(
                                    event: React.ChangeEvent<HTMLSelectElement>
                                ) => {
                                    setSelectedFood(event.target.value);
                                }}
                            >
                                {FOOD_LIST.map((food: Food) => {
                                    return (
                                        <option key={food.id}>
                                            {food.name}
                                        </option>
                                    );
                                })}
                            </Form.Select>
                        </Form.Group>
                        <div>
                            <p>
                                The following customers have{" "}
                                <span style={{ fontWeight: "bolder" }}>
                                    {selectedFood}
                                </span>{" "}
                                in their cart:
                            </p>
                            <ul>
                                {userList
                                    .filter((user: User) =>
                                        user.foodList.find(
                                            (food: Food) =>
                                                food.name === selectedFood
                                        )
                                    )
                                    .map((user: User) => {
                                        return (
                                            <li key={user.name}>{user.name}</li>
                                        );
                                    })}
                            </ul>
                        </div>
                    </Stack>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeForm}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
