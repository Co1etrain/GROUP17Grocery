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
import { Food, FOOD_LIST } from "./interfaces/food";
import { DisplayCustomerNames } from "./components/CustomersForm";

function App(): JSX.Element {
    const [currentUser, setUser] = useState<Users["person"]>("owner");

    function updateUser(event: React.ChangeEvent<HTMLSelectElement>): void {
        const toUsersType: Users["person"] = event.target
            .value as Users["person"];
        setUser(toUsersType);
    }

    const [currentCustomers, setCustomers] = useState<CustomersRecord>({});

    function editCustomers(givenCustomer: string, food: Food[]): void {
        setCustomers({
            ...currentCustomers,
            [givenCustomer]: food
        });
    }

    function removeCustomers(givenCustomer: string): void {
        const newCustomers: CustomersRecord = currentCustomers;
        setCustomers({ ...currentCustomers });
        delete newCustomers[givenCustomer];
        setCustomers({ ...newCustomers });
    }

    const [selectedCustomer, setSelectedCustomer] = useState<string>("");

    function updateSelectedCustomer(
        event: React.ChangeEvent<HTMLSelectElement>
    ): void {
        setSelectedCustomer(event.target.value);
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

                <DisplayCustomerNames
                    updateSelectedCustomer={updateSelectedCustomer}
                    currentSelectedCustomer={selectedCustomer}
                    currentCustomersRecord={Object.keys(currentCustomers)}
                ></DisplayCustomerNames>
                <Button onClick={() => editCustomers("JOHN", [FOOD_LIST[0]])}>
                    MORE
                    {console.log(Object.entries(currentCustomers))}
                </Button>
                <Button onClick={() => removeCustomers("JOHN")}>
                    LESS
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
