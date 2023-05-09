import React, { useState } from "react";
import "../App.css";
import { CentralList } from "../components/CentralList";
import { User } from "../interfaces/user";
import { Navbar } from "../components/Navbar";
import { CustomerCart } from "../components/CustomerCart";
import { EmployeeCart } from "../components/EmployeeCart";
import { Food, FOOD_LIST } from "../interfaces/food";
import { DeleteFoodButton } from "../components/DeleteFoodButton";
import { Row, Col } from "react-bootstrap";
import { AddFoodForm } from "../components/AddFoodForm";
import { UserSelect } from "../components/UserSelect";
import { NewUserForm } from "../components/NewUserForm";

function Store(): JSX.Element {
    const [userList, setUserList] = useState<User[]>([
        { name: "Owner", role: "owner", foodList: [] },
        { name: "Employee_Test", role: "employee", foodList: [] },
        { name: "Customer_Test", role: "customer", foodList: [] },
        { name: "Customer_Test2", role: "customer", foodList: [] }
    ]);
    const [currentUser, setCurrentUser] = useState<User>(userList[0]);
    const [centralList, setCentralList] = useState<Food[]>(FOOD_LIST);
    const [customerList, setCustomerList] = useState<Food[]>([]);
    const [employeeList, setEmployeeList] = useState<Food[]>([]);
    const [foodId, setFoodId] = useState<number>(FOOD_LIST.length + 1);

    /*
    Closure which handles updating the central list according to edits made to food objects
    within the employee list.
    */
    const handleCentralListUpdate = (updatedFood: Food) => {
        setCentralList((prevList) =>
            prevList.map((food) =>
                food.id === updatedFood.id ? updatedFood : food
            )
        );
    };

    /*
    Closure which handles deep copying the user list and updating the specific user's list
    which has been modified in some capacity (passed in as parameter).
    */
    function updateUserList(newFoodList: Food[]) {
        // Make deep copy
        const updatedUserList = userList.map((user: User) => ({
            ...user,
            foodList: user.foodList.map((food: Food) => ({
                ...food,
                ingredients: food.ingredients
            }))
        }));
        setCustomerList(newFoodList);
        // Insert updated user object into deep copy of user list
        updatedUserList.splice(
            userList.findIndex((user: User) => user.name === currentUser.name),
            1,
            { ...currentUser, foodList: newFoodList }
        );
        setUserList(updatedUserList);
    }

    // Render all components
    return (
        <div>
            <Navbar></Navbar>
            <div className="App">
                <Row>
                    <Col>
                        <UserSelect
                            userList={userList}
                            currentUser={currentUser}
                            setCurrentUser={setCurrentUser}
                            setCustomerList={setCustomerList}
                        ></UserSelect>
                    </Col>
                    <Col>
                        <NewUserForm
                            userList={userList}
                            currentUser={currentUser}
                            setCurrentUser={setCurrentUser}
                            setCustomerList={setCustomerList}
                            setUserList={setUserList}
                        ></NewUserForm>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CustomerCart
                            customerList={customerList}
                            centralList={centralList}
                            currentUser={currentUser}
                            updateUserList={updateUserList}
                            foodId={foodId}
                            setFoodId={setFoodId}
                        ></CustomerCart>
                    </Col>
                    <Col>
                        <CentralList
                            centralList={centralList}
                            onFoodUpdate={handleCentralListUpdate}
                            currentUser={currentUser}
                        ></CentralList>
                    </Col>
                    <Col>
                        <EmployeeCart
                            centralList={centralList}
                            onCentralListUpdate={handleCentralListUpdate}
                            currentUser={currentUser}
                            employeeList={employeeList}
                            setEmployeeList={setEmployeeList}
                        ></EmployeeCart>
                        <AddFoodForm
                            centralList={centralList}
                            setCentralList={setCentralList}
                            currentUser={currentUser}
                            foodId={foodId}
                            setFoodId={setFoodId}
                        ></AddFoodForm>
                        <DeleteFoodButton
                            centralList={centralList}
                            customerList={customerList}
                            employeeList={employeeList}
                            userList={userList}
                            currentUser={currentUser}
                            setCentralList={setCentralList}
                            setEmployeeList={setEmployeeList}
                            setUserList={setUserList}
                            updateUserList={updateUserList}
                        ></DeleteFoodButton>
                    </Col>
                </Row>
                <div className="Footer">
                    <p style={{ margin: "10px" }}>
                        Created by Michael Bocelli, Robert Oratorio, Sharanjit
                        Singh, Cole McCaleb, and Andrew Kallai.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Store;
