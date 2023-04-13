import React, { useState } from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import { CustomerCart } from "./components/CustomerCart";

function App(): JSX.Element {
    return (
        <div className="App">
            <div>
                <h2 className="CartTitle">Customer&apos;s Cart</h2>
                <Container className="Cart">
                    <CustomerCart></CustomerCart>
                </Container>
                <p className="CartText">Total Price: </p>
                <p className="CartText">Quantity: </p>
            </div>
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
