import React from "react";
import "../App.css";
//import { Button, Form, Row, Col } from "react-bootstrap";
import { Users } from "../interfaces/record";
import { Food } from "../interfaces/food";
import { useDrop } from "react-dnd";
import trashClosed from "../trash_images/trash_closed.png";
import trashOpen from "../trash_images/trash_open.png";

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
    const [{ isOver }, drop] = useDrop({
        accept: "food",
        drop: (item: Food) => deleteFood(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    });

    function deleteFood(id: number) {
        const newCentralList = centralList.filter((food) => food.id !== id);
        setCentralList(newCentralList);

        const newCustomerList = customerList.filter((food) => food.id !== id);
        setCustomerList(newCustomerList);

        const newEmployeeList = employeeList.filter((food) => food.id !== id);
        setEmployeeList(newEmployeeList);
    }

    return (
        <div className="Trash-Can">
            <img
                ref={currentUser === "owner" ? drop : undefined}
                src={isOver ? trashOpen : trashClosed}
                style={{ height: "250px" }}
            ></img>
        </div>
    );
    /*currentUser === "owner" ? (
        <div>
            <Form.Group controlId="formDeleteFood" as={Row}>
                <Form.Label column sm={2}>
                    Food name:
                </Form.Label>
                <Col>
                    <Form.Control
                        value={foodToBeDeleted}
                        onChange={updateDeletedFood}
                    />
                </Col>
                <Col>
                    <Button onClick={() => deleteFood(foodToBeDeleted)}>
                        Delete
                    </Button>
                </Col>
            </Form.Group>
        </div>
    ) : (
        <div></div>
    );
    */
}
