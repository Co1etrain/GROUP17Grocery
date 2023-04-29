import React, { useState } from "react";
import "../App.css";
import { Button, Form } from "react-bootstrap";
import { Users } from "../interfaces/record";
import { Food } from "../interfaces/food";

interface DeleteFoodProps {
    centralList: Food[];
    customerList: Food[];
    employeeList: Food[];
    setCentralList: (newList: Food[]) => void;
    setCustomerList: (newList: Food[]) => void;
    setEmployeeList: (newList: Food[]) => void;
    currentUser: Users["person"];
}

export function DeleteFoodButton({
    centralList,
    customerList,
    employeeList,
    setCentralList,
    setCustomerList,
    setEmployeeList,
    currentUser
}: DeleteFoodProps): JSX.Element {
    const [foodToBeDeleted, setFoodToBeDeleted] = useState<string>("");

    function deleteFood(name: string) {
        const newCentralList = centralList.filter(
            (food) => food.name.toLocaleLowerCase() !== name.toLocaleLowerCase()
        );
        setCentralList(newCentralList);

        const newCustomerList = customerList.filter(
            (food) => food.name.toLocaleLowerCase() !== name.toLocaleLowerCase()
        );
        setCustomerList(newCustomerList);

        const newEmployeeList = employeeList.filter(
            (food) => food.name.toLocaleLowerCase() !== name.toLocaleLowerCase()
        );
        setEmployeeList(newEmployeeList);
    }

    function updateDeletedFood(event: React.ChangeEvent<HTMLInputElement>) {
        setFoodToBeDeleted(event.target.value);
    }

    return currentUser === "owner" ? (
        <div style={{ marginBottom: "100px" }}>
            <Form.Group controlId="formDeleteFood">
                <Form.Label>Food name:</Form.Label>
                <Form.Control
                    value={foodToBeDeleted}
                    onChange={updateDeletedFood}
                />
            </Form.Group>
            <Button onClick={() => deleteFood(foodToBeDeleted)}>Delete</Button>
        </div>
    ) : (
        <div></div>
    );
}
