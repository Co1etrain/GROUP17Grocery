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
import { Link } from "react-router-dom";
import { Request } from "../interfaces/request";
import { Food } from "../interfaces/food";
import { User } from "../interfaces/user";

interface NavProps {
    currentUser: User;
    setCustomerList: (newList: Food[]) => void;
    RequestList: Request[];
    setRequestList: (newList: Request[]) => void;
    centralList: Food[];
    setCentralList: (newList: Food[]) => void;
    foodId: number;
    setFoodId: (newId: number) => void;
}

export function Navbar({
    currentUser,
    RequestList,
    setRequestList,
    centralList,
    setCentralList,
    foodId,
    setFoodId
}: NavProps) {
    const [cart, setCart] = useState<boolean>(false);
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

        setFoodId(foodId + 1);

        const newFood: Food = {
            id: foodId,
            name: name,
            description: description,
            image: image,
            price: price,
            calories: calories,
            ingredients: ingredients,
            category: category,
            appearances: 0
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
                <Button
                    onClick={() => setCart(true)}
                    style={{
                        width: "6rem",
                        height: "4rem",
                        position: "relative"
                    }}
                    variant="outline-primary"
                    className="rounded-square"
                    disabled={currentUser.role !== "owner"}
                    data-testid="requests-button"
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
                        data-testid="requests-badge"
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
                    <OffcanvasBody data-testid="requests-body">
                        <ul>
                            {RequestList.map((request, index) => {
                                return (
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
                                                Ingredients:{" "}
                                                {request.ingredients}
                                                <br />
                                                {request.category}
                                                <br />
                                            </p>
                                            <Button
                                                onClick={() => {
                                                    appendNewFood(
                                                        request.name,
                                                        request.description,
                                                        request.image,
                                                        request.price,
                                                        request.calories,
                                                        request.ingredients,
                                                        request.category
                                                    );
                                                    handleDenyRequest(index);
                                                }}
                                                hidden={
                                                    currentUser.role !== "owner"
                                                }
                                            >
                                                APPROVE
                                            </Button>
                                            <Button
                                                onClick={() =>
                                                    handleDenyRequest(index)
                                                }
                                                hidden={
                                                    currentUser.role !== "owner"
                                                }
                                            >
                                                DENY
                                            </Button>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </OffcanvasBody>
                </Offcanvas>
            </Container>
        </NavbarBS>
    );
}
