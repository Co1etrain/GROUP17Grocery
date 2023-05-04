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

function Store(): JSX.Element {
    const [userList, setUserList] = useState<User[]>([
        { name: "Owner", role: "owner", foodList: [] },
        { name: "Employee_Test", role: "employee", foodList: [] },
        { name: "Customer_Test", role: "customer", foodList: [] }
    ]);
    const [currentUser, setCurrentUser] = useState<User>(userList[0]);
    const [centralList, setCentralList] = useState<Food[]>(FOOD_LIST);
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
                    <Col>
                        <CustomerCart></CustomerCart>
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
                        ></EmployeeCart>
                        <AddFoodForm
                            centralList={centralList}
                            setCentralList={setCentralList}
                            currentUser={currentUser}
                        ></AddFoodForm>
                        <DeleteFoodButton
                            centralList={centralList}
                            customerList={customerList}
                            employeeList={employeeList}
                            setCentralList={setCentralList}
                            setCustomerList={setCustomerList}
                            setEmployeeList={setEmployeeList}
                            currentUser={currentUser}
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
