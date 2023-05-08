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

    const handleCentralListUpdate = (updatedFood: Food) => {
        setCentralList((prevList) =>
            prevList.map((food) =>
                food.id === updatedFood.id ? updatedFood : food
            )
        );
    };

    return (
        <div>
            <Navbar></Navbar>
            <div className="App">
                <Row>
                    <UserSelect
                        userList={userList}
                        currentUser={currentUser}
                        setCurrentUser={setCurrentUser}
                        setCustomerList={setCustomerList}
                    ></UserSelect>
                </Row>
                <Row>
                    <Col>
                        <CustomerCart
                            setCustomerList={setCustomerList}
                            centralList={centralList}
                            currentUser={currentUser}
                            setCurrentUser={setCurrentUser}
                            userList={userList}
                            setUserList={setUserList}
                            customerList={customerList}
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
                        ></AddFoodForm>
                        <DeleteFoodButton
                            centralList={centralList}
                            employeeList={employeeList}
                            setCentralList={setCentralList}
                            setEmployeeList={setEmployeeList}
                            currentUser={currentUser}
                            customerList={[]}
                            setCustomerList={function (newList: Food[]): void {
                                throw new Error("Function not implemented.");
                            }}
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
