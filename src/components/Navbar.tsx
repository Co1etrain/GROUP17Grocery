import React from "react";
import { Button, Container, Nav, Navbar as NavbarBS } from "react-bootstrap";
import { useState } from "react";
import { Offcanvas } from "react-bootstrap";

export function Navbar() {
    const [cart, setCart] = useState<boolean>(false);

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
                            transform: "translate(25%, 25%)"
                        }}
                    >
                        3
                    </div>
                </Button>
                <Offcanvas show={cart} placement="end">
                    <Offcanvas.Header
                        closeButton
                        onClick={() => setCart(false)}
                    >
                        <Offcanvas.Title>Cart</Offcanvas.Title>
                    </Offcanvas.Header>
                </Offcanvas>
            </Container>
        </NavbarBS>
    );
}
