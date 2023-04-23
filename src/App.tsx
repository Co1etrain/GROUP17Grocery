import React, { useState } from "react";
import "./App.css";
import { CentralList } from "./components/CentralList";
import { Users } from "./interfaces/record";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { CreateUserForm } from "./components/UserForm";
import { Navbar } from "./components/Navbar";
import { CustomerCart } from "./components/CustomerCart";
import { EmployeeCart } from "./components/EmployeeCart";

function App(): JSX.Element {
    const [currentUser, setUser] = useState<Users["person"]>("owner");

    function updateUser(event: React.ChangeEvent<HTMLSelectElement>) {
        const toUsersType: Users["person"] = event.target
            .value as Users["person"];
        setUser(toUsersType);
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
                <EmployeeCart employeeList={[]}></EmployeeCart>
                <CustomerCart customerList={[]}></CustomerCart>
                <CentralList></CentralList>
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
