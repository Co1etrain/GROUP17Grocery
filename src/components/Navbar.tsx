import React from "react";
import { Button, Container, Nav, Navbar as NavbarBS } from "react-bootstrap";
import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { FOOD_LIST, Food } from "../interfaces/food";
import { useDrop } from "react-dnd";
import { CustomerCart } from "./CustomerCart";

export function Navbar() {
    const [cartList, setCartList] = useState<Food[]>([]);
    const [cart, setCart] = useState<boolean>(false);
    const [quantity, setQuantity] = useState<number>(0);
    const [{ isOver }, drop] = useDrop({
        accept: "food",
        drop: (item: Food) => addFoodToCart(item.name),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    });

    function addFoodToCart(name: string) {
        const droppedFood: Food[] = FOOD_LIST.filter(
            (food: Food) => food.name === name
        );
        setCartList([...cartList, droppedFood[0]]);
        setQuantity(quantity + 1);
    }

    if (isOver) {
        console.log("Over cart");
    }

    return (
        <NavbarBS sticky="top" className="bg-white shadow-sm mb-3 p-3">
            <Container>
                <Nav
                    className="me-auto"
                    style={{ fontSize: "2.7rem", fontStyle: "italic" }}
                >
                    Home
                </Nav>
                <Button className="m-3">Hello</Button>
                <Button
                    ref={drop}
                    onClick={() => setCart(true)}
                    style={{
                        width: "4rem",
                        height: "4rem",
                        position: "relative"
                    }}
                    variant="outline-primary"
                    className="rounded-circle"
                >
                    Store
                    <div
                        className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                        style={{
                            color: "white",
                            width: "1.5rem",
                            height: "1.5rem",
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            transform: "translate(25%, 25%)",
                            opacity: quantity === 0 ? "0%" : "100%"
                        }}
                    >
                        {quantity}
                    </div>
                </Button>
                <Offcanvas show={cart} placement="end">
                    <Offcanvas.Header
                        closeButton
                        onClick={() => setCart(false)}
                    >
                        <Offcanvas.Title>Cart</Offcanvas.Title>
                    </Offcanvas.Header>
                    <CustomerCart cartList={cartList}></CustomerCart>
                </Offcanvas>
            </Container>
        </NavbarBS>
    );
}
