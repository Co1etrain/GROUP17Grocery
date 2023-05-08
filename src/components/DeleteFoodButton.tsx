import React from "react";
import "../App.css";
//import { Button, Form, Row, Col } from "react-bootstrap";
import { Food } from "../interfaces/food";
import { useDrop } from "react-dnd";
import trashClosed from "../trash_images/trash_closed.png";
import trashOpen from "../trash_images/trash_open.png";
import { User } from "../interfaces/user";

interface DeleteFoodProps {
    centralList: Food[];
    customerList: Food[];
    employeeList: Food[];
    userList: User[];
    currentUser: User;
    setCentralList: (newList: Food[]) => void;
    setEmployeeList: (newList: Food[]) => void;
    setUserList: (newList: User[]) => void;
    updateUserList: (newList: Food[]) => void;
}

export function DeleteFoodButton({
    centralList,
    customerList,
    employeeList,
    userList,
    currentUser,
    setCentralList,
    setEmployeeList,
    setUserList,
    updateUserList
}: DeleteFoodProps): JSX.Element {
    const [{ isOver }, drop] = useDrop({
        accept: "food",
        drop: (item: Food) => deleteFood(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    });

    function ownerDeleteFood(id: number) {
        const newCentralList = centralList.filter((food) => food.id !== id);
        setCentralList(newCentralList);

        const newCustomerList = customerList.filter((food) => food.id !== id);
        // Update every User in userList to have the filtered version
        const updatedUserList = userList.map((user: User) => ({
            ...user,
            foodList: newCustomerList
        }));
        setUserList(updatedUserList);
    }

    function deleteFood(id: number) {
        if (currentUser.role === "owner") {
            ownerDeleteFood(id);
        } else if (currentUser.role === "employee") {
            const newEmployeeList = employeeList.filter(
                (food) => food.id !== id
            );
            setEmployeeList(newEmployeeList);
        } else {
            const newCustomerList = customerList.filter(
                (food) => food.id !== id
            );
            updateUserList(newCustomerList);
        }
    }

    return (
        <div className="Trash-Can">
            <img
                ref={drop}
                src={isOver ? trashOpen : trashClosed}
                style={{ height: "250px" }}
            ></img>
        </div>
    );
}
