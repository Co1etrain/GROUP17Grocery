import React, { useState } from "react";
import "./App.css";
import { Container, Form } from "react-bootstrap";
import { CustomerCart } from "./components/CustomerCart";
import { CentralList } from "./components/CentralList";
import { Users, userLookup } from "./interfaces/record";

function App(): JSX.Element {
    const [currentUser, setUser] = useState<Users["person"]>("owner");

    function updateUser(event: React.ChangeEvent<HTMLSelectElement>) {
        const toUsersType: Users["person"] = event.target
            .value as Users["person"];
        setUser(toUsersType);
    }

    return (
        <div className="App">
            <p>Michael Bocelli</p>
            <p>Robert Oratorio</p>
            <p>Sharanjit Singh</p>
            <div>
                <Form.Group controlId="userSelected">
                    <Form.Label>Select User:</Form.Label>
                    <Form.Select value={currentUser} onChange={updateUser}>
                        <option value="owner">
                            owner{userLookup["owner"]}
                        </option>
                        <option value="employee">
                            employee{userLookup["employee"]}
                        </option>
                        <option value="customer">
                            customer{userLookup["customer"]}
                        </option>
                    </Form.Select>
                </Form.Group>
            </div>
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
