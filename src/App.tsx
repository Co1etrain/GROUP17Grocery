import React, { useState } from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import { CustomerCart } from "./components/CustomerCart";
import { CentralList } from "./components/CentralList";
type userType = "owner" | "employee" | "customer";

function App(): JSX.Element {
    // eslint-disable-next-line
    const [currentUser, setUser] = useState<userType>("owner");
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
            <CentralList></CentralList>
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
