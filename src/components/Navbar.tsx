import React from "react";
import { Button, Container, Nav, Navbar as NavbarBS } from "react-bootstrap";
import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { CustomersRecord, Users } from "../interfaces/record";
import { CreateUserForm } from "./UserForm";
import { Link } from "react-router-dom";
import { Food } from "../interfaces/food";
import { TextField } from "./CustomerInputBox";
import { DisplayCustomerNames } from "./CustomersForm";

interface NavProps {
    updateUser: (userType: Users["person"]) => void;
    currentUser: Users["person"];
    addCustomerName: (record: CustomersRecord) => void;
    currentRecord: CustomersRecord;
    setSelectedCustomer: (customerName: string) => void;
    selectedCustomer: string;
    setCustomerList: (newList: Food[]) => void;
}

export function Navbar({
    updateUser,
    currentUser,
    addCustomerName,
    currentRecord,
    setSelectedCustomer,
    selectedCustomer,
    setCustomerList
}: NavProps) {
    const [cart, setCart] = useState<boolean>(false);

    return (
        <NavbarBS sticky="top" className="bg-white shadow-sm mb-0 p-3">
            <Container>
                <Nav
                    className="me-auto"
                    style={{ fontSize: "2.7rem", fontStyle: "italic" }}
                >
                    <Link to={"/"}>Glocery</Link>
                </Nav>
                <div hidden={currentUser !== "owner"}>
                    <TextField
                        addCustomerName={addCustomerName}
                        currentRecord={currentRecord}
                        setSelectedCustomer={setSelectedCustomer}
                        selectedCustomer={selectedCustomer}
                        setCustomerList={setCustomerList}
                    ></TextField>
                    <DisplayCustomerNames
                        setSelectedCustomer={setSelectedCustomer}
                        currentSelectedCustomer={selectedCustomer}
                        currentRecord={currentRecord}
                        setCustomerList={setCustomerList}
                    ></DisplayCustomerNames>
                </div>
                <CreateUserForm
                    updateUser={updateUser}
                    currentUser={currentUser}
                ></CreateUserForm>
                <Button
                    onClick={() => setCart(true)}
                    style={{
                        width: "6rem",
                        height: "4rem",
                        position: "relative"
                    }}
                    variant="outline-primary"
                    className="rounded-square"
                    disabled={currentUser === "customer"}
                >
                    <span>Requests</span>
                    <div
                        className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                        style={{
                            color: "white",
                            width: "1.5rem",
                            height: "1.5rem",
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            transform: "translate(25%, 25%)"
                        }}
                    >
                        0
                    </div>
                </Button>
                <Offcanvas show={cart} placement="end">
                    <Offcanvas.Header
                        closeButton
                        onClick={() => setCart(false)}
                    >
                        <Offcanvas.Title>Employee Requests</Offcanvas.Title>
                    </Offcanvas.Header>
                </Offcanvas>
            </Container>
        </NavbarBS>
    );
}
