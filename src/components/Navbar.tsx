import React from "react";
import { Button, Container, Nav, Navbar as NavbarBS } from "react-bootstrap";
import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Navbar() {
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
