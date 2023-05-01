import React, { useState } from "react";
import { Food } from "../interfaces/food";
import { Modal, Button } from "react-bootstrap";

interface AddFoodProps {
    centralList: Food[];
    setCentralList: (newList: Food[]) => void;
}

export function AddFoodForm({
    centralList,
    setCentralList
}: AddFoodProps): JSX.Element {
    const [showForm, setShowForm] = useState<boolean>(false);

    function appendNewFood() {
        const newCentralList = centralList.map((food: Food) => ({
            ...food,
            Ingredients: [...food.ingredients]
        }));
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
                    <Modal.Title>Import Food</Modal.Title>
                    <Modal.Body>Please fill out all fields!</Modal.Body>
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
