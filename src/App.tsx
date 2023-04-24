import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import { CentralList } from "./components/CentralList";
import { Users, CustomersRecord } from "./interfaces/record";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { CreateUserForm } from "./components/UserForm";
import { Navbar } from "./components/Navbar";
import { CustomerCart } from "./components/CustomerCart";
import { GetNames } from "./interfaces/testing";
import { Food, FOOD_LIST } from "./interfaces/food";

function App(): JSX.Element {
    const [currentUser, setUser] = useState<Users["person"]>("owner");

    function updateUser(event: React.ChangeEvent<HTMLSelectElement>) {
        const toUsersType: Users["person"] = event.target
            .value as Users["person"];
        setUser(toUsersType);
    }

    const [currentCustomers, setCustomers] = useState<CustomersRecord>({});

    function editCustomers(givenCustomer: string, food: Food): void {
        setCustomers({
            ...currentCustomers,
            [givenCustomer]: food
        });
        console.log("TOP_DEBUG");
        console.log(Object.entries(currentCustomers));
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <Navbar></Navbar>
            <div className="App">
                <div>
                    <CreateUserForm
                        updateUser={updateUser}
                        currentUser={currentUser}
                    ></CreateUserForm>
                </div>
                <CustomerCart customerList={[]}></CustomerCart>
                <CentralList></CentralList>
                {<GetNames></GetNames>}
                <Button onClick={() => editCustomers("JOHN", FOOD_LIST[0])}>
                    MOR
                    {console.log(Object.entries(currentCustomers))}
                </Button>

                <p>
                    <p>Michael Bocelli</p>
                    <p>Robert Oratorio</p>
                    <p>Sharanjit Singh</p>
                    <p>Cole McCaleb</p>
                    <p>Andrew Kallai</p>
                </p>
            </div>
        </DndProvider>
    );
}

export default App;
