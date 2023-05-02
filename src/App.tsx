import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Store from "./pages/Store";
import { AddFoodForm } from "./components/AddFoodForm";

function App(): JSX.Element {
    return (
        <DndProvider backend={HTML5Backend}>
            <Navbar updateUser={setUser} currentUser={currentUser}></Navbar>
            <IntroHeader></IntroHeader>
            <div className="App">
                <DisplayCustomerNames
                    setSelectedCustomer={setSelectedCustomer}
                    currentSelectedCustomer={selectedCustomer}
                    currentRecord={currentCustomers}
                    setCustomerList={setCustomerList}
                ></DisplayCustomerNames>
                <TextField
                    addCustomerName={setCustomers}
                    currentRecord={currentCustomers}
                    setSelectedCustomer={setSelectedCustomer}
                    selectedCustomer={selectedCustomer}
                    setCustomerList={setCustomerList}
                ></TextField>
                <Row>
                    <Col>
                        <CustomerCart
                            customerList={customerList}
                            setCustomerList={setCustomerList}
                            customerName={selectedCustomer}
                            currentRecord={currentCustomers}
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
                        <AddFoodForm
                            centralList={centralList}
                            setCentralList={setCentralList}
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
        </DndProvider>
    );
}

export default App;
