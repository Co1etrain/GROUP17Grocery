import React from "react";
import {
    Button,
    Container,
    Nav,
    Navbar as NavbarBS,
    OffcanvasBody
} from "react-bootstrap";
import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { CustomersRecord, Users } from "../interfaces/record";
import { CreateUserForm } from "./UserForm";
import { Link } from "react-router-dom";
import { Food } from "../interfaces/food";
import { TextField } from "./CustomerInputBox";
import { DisplayCustomerNames } from "./CustomersForm";
import { Request } from "../interfaces/request";

interface NavProps {
    updateUser: (userType: Users["person"]) => void;
    currentUser: Users["person"];
    addCustomerName: (record: CustomersRecord) => void;
    currentRecord: CustomersRecord;
    setSelectedCustomer: (customerName: string) => void;
    selectedCustomer: string;
    setCustomerList: (newList: Food[]) => void;
    RequestList: Request[];
    setRequestList: (newList: Request[]) => void;
    centralList: Food[];
    setCentralList: (newList: Food[]) => void;
}

export function Navbar({
    updateUser,
    currentUser,
    addCustomerName,
    currentRecord,
    setSelectedCustomer,
    selectedCustomer,
    setCustomerList,
    RequestList,
    setRequestList,
    centralList,
    setCentralList
}: NavProps) {
    const [cart, setCart] = useState<boolean>(false);
    const [id, setId] = useState<number>(centralList.length + 1);
    function appendNewFood(
        name: string,
        description: string,
        image: string,
        price: number,
        calories: number,
        ingredients: string[],
        category: string
    ) {
        const newCentralList = centralList.map((food: Food) => ({
            ...food,
            Ingredients: [...food.ingredients]
        }));

        setId(id + 1);

        const newFood: Food = {
            id: id,
            name: name,
            description: description,
            image: image,
            price: price,
            calories: calories,
            ingredients: ingredients,
            category: category
        };

        setCentralList([...newCentralList, newFood]);
    }
    function handleDenyRequest(index: number) {
        const newRequestList = [...RequestList];
        newRequestList.splice(index, 1);
        setRequestList(newRequestList);
    }
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
                        {RequestList.length}
                    </div>
                </Button>
                <Offcanvas show={cart} placement="end">
                    <Offcanvas.Header
                        closeButton
                        onClick={() => setCart(false)}
                    >
                        <Offcanvas.Title>Employee Requests</Offcanvas.Title>
                    </Offcanvas.Header>
                    <OffcanvasBody>
                        <ul>
                            {RequestList.map((request, index) => (
                                <li key={index}>
                                    <div>
                                        <p>
                                            <strong>{request.name}</strong>
                                            <br />
                                            {request.description}
                                            <br />
                                            {request.calories} Calories per
                                            serving
                                            <br />
                                            Ingredients: {request.ingredients}
                                            <br />
                                            {request.category}
                                            <br />
                                        </p>
                                        <Button
                                            onClick={() =>
                                                appendNewFood(
                                                    request.name,
                                                    request.description,
                                                    request.image,
                                                    request.price,
                                                    request.calories,
                                                    request.ingredients,
                                                    request.category
                                                )
                                            }
                                            hidden={currentUser !== "owner"}
                                        >
                                            APPROVE
                                        </Button>
                                        <Button
                                            onClick={() =>
                                                handleDenyRequest(index)
                                            }
                                            hidden={currentUser !== "owner"}
                                        >
                                            DENY
                                        </Button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </OffcanvasBody>
                </Offcanvas>
            </Container>
        </NavbarBS>
    );
}
