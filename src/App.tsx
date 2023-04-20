import React, { useState } from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import { CustomerCart } from "./components/CustomerCart";
import { CentralList } from "./components/CentralList";
import { Users } from "./interfaces/record";
import { CreateUserForm } from "./components/UserForm";
import { Navbar } from "./components/Navbar";

function App(): JSX.Element {
    const [currentUser, setUser] = useState<Users["person"]>("owner");

    function updateUser(event: React.ChangeEvent<HTMLSelectElement>) {
        const toUsersType: Users["person"] = event.target
            .value as Users["person"];
        setUser(toUsersType);
    }

    return (
        <div className="App">
            <Navbar></Navbar>
            <p>Michael Bocelli</p>
            <p>Robert Oratorio</p>
            <p>Sharanjit Singh</p>
            <p>Cole McCaleb</p>
            <p>Andrew Kallai</p>
            <CreateUserForm
                updateUser={updateUser}
                currentUser={currentUser}
            ></CreateUserForm>
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
