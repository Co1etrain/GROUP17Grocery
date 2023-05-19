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
    updateNumberOfAppearances: (givenFood: Food, isAdding: boolean) => void;
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
    updateUserList,
    updateNumberOfAppearances
}: DeleteFoodProps): JSX.Element {
    const [{ isOver }, drop] = useDrop({
        accept: "food",
        drop: (item: Food) => deleteFood(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    });

    function ownerDeleteFood(id: number) {
        const deletedFood: Food | undefined = centralList.find(
            (food: Food) => food.id === id
        );
        if (deletedFood) {
            const newCentralList = centralList.filter(
                (food) => food.name !== deletedFood.name
            );
            setCentralList(newCentralList);

            // Update every User in userList to have the filtered version
            const updatedUserList = userList.map((user: User) => ({
                ...user,
                foodList: user.foodList.filter(
                    (food) => food.name !== deletedFood.name
                )
            }));
            setUserList(updatedUserList);
        }
    }

    function employeeDeleteFood(id: number) {
        const newEmployeeList = employeeList.filter((food) => food.id !== id);
        setEmployeeList(newEmployeeList);
    }

    function customerDeleteFood(id: number) {
        const deletedFood: Food | undefined = customerList.find(
            (food: Food) => food.id === id
        );
        if (deletedFood) {
            const deletedFoodInCentral: Food | undefined = centralList.find(
                (food: Food) => food.name === deletedFood.name
            );
            if (deletedFoodInCentral) {
                updateNumberOfAppearances(deletedFoodInCentral, false);
            }
        }

        const newCustomerList = customerList.filter((food) => food.id !== id);
        updateUserList(newCustomerList);
    }

    function deleteFood(id: number) {
        if (currentUser.role === "owner") {
            ownerDeleteFood(id);
            employeeDeleteFood(id);
        } else if (currentUser.role === "employee") {
            employeeDeleteFood(id);
        } else {
            customerDeleteFood(id);
        }
    }

    return (
        <div className="Trash-Can">
            <img
                ref={drop}
                src={isOver ? trashOpen : trashClosed}
                style={{
                    maxHeight: "130px",
                    marginLeft: "20px",
                    padding: "0px"
                }}
            ></img>
        </div>
    );
}
