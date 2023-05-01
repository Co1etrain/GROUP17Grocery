import React, { useState } from "react";
import "./App.css";
import { CentralList } from "./components/CentralList";
import { Users, CustomersRecord } from "./interfaces/record";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Navbar } from "./components/Navbar";
import { CustomerCart } from "./components/CustomerCart";
import { DisplayCustomerNames } from "./components/CustomersForm";
import { TextField } from "./components/CustomerInputBox";
import { EmployeeCart } from "./components/EmployeeCart";
import { Food, FOOD_LIST } from "./interfaces/food";
import { IntroHeader } from "./components/IntroHeader";
import { DeleteFoodButton } from "./components/DeleteFoodButton";
import { Row, Col } from "react-bootstrap";

function App(): JSX.Element {
    const [currentUser, setUser] = useState<Users["person"]>("owner");
    const [centralList, setCentralList] = useState<Food[]>(FOOD_LIST);
    const [customerList, setCustomerList] = useState<Food[]>([]);
    const [employeeList, setEmployeeList] = useState<Food[]>([]);

    const handleCentralListUpdate = (updatedFood: Food) => {
        setCentralList((prevList) =>
            prevList.map((food) =>
                food.id === updatedFood.id ? updatedFood : food
            )
        );
        const foodIndex = FOOD_LIST.findIndex(
            (food) => food.id === updatedFood.id
        );
        if (foodIndex !== -1) {
            FOOD_LIST[foodIndex] = updatedFood;
        }
    };

    const [currentCustomers, setCustomers] = useState<CustomersRecord>({});

    const [selectedCustomer, setSelectedCustomer] = useState<string>("");

    return (
        <DndProvider backend={HTML5Backend}>
            <Navbar updateUser={setUser} currentUser={currentUser}></Navbar>
            <IntroHeader></IntroHeader>
            <div className="App">
                <DisplayCustomerNames
                    setSelectedCustomer={setSelectedCustomer}
                    currentSelectedCustomer={selectedCustomer}
                    currentCustomersRecord={Object.keys(currentCustomers)}
                ></DisplayCustomerNames>
                <TextField
                    addCustomerName={setCustomers}
                    currentRecord={currentCustomers}
                ></TextField>
                <Row>
                    <Col>
                        <CustomerCart
                            customerList={customerList}
                            setCustomerList={setCustomerList}
                            customerName={""}
                        ></CustomerCart>
                    </Col>
                    <Col>
                        <CentralList
                            centralList={centralList}
                            onFoodUpdate={handleCentralListUpdate}
                        ></CentralList>
                    </Col>
                    <Col>
                        <EmployeeCart
                            employeeList={employeeList}
                            setEmployeeList={setEmployeeList}
                            onCentralListUpdate={handleCentralListUpdate}
                        ></EmployeeCart>
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
        </DndProvider>
    );
}

export default App;
