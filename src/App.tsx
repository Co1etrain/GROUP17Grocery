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
        <div className="wrapper">
            <nav>
                <span>
                    <h2 className="CartTitle">Customer&apos;s Cart</h2>
                    <span className="CartText">
                        Total Price: <br />
                        <span className="CartText">Quantity: </span>
                    </span>
                </span>

                <Container className="Cart">
                    <CustomerCart></CustomerCart>
                </Container>
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
            </nav>

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
