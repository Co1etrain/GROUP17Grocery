import React, { useState } from "react";
import "./App.css";
import { CentralList } from "./components/CentralList";
import { Users } from "./interfaces/record";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Navbar } from "./components/Navbar";
import { CustomerCart } from "./components/CustomerCart";
import { IntroHeader } from "./components/IntroHeader";

function App(): JSX.Element {
    const [currentUser, setUser] = useState<Users["person"]>("owner");

    function updateUser(event: React.ChangeEvent<HTMLSelectElement>) {
        const toUsersType: Users["person"] = event.target
            .value as Users["person"];
        setUser(toUsersType);
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <Navbar updateUser={updateUser} currentUser={currentUser}></Navbar>
            <IntroHeader></IntroHeader>
            <div className="App">
                <CustomerCart
                    customerList={[]}
                    customerName={""}
                ></CustomerCart>
                <h2>Main Inventory</h2>
                <CentralList></CentralList>
                <div className="Footer">
                    <p style={{ margin: "10px" }}>
                        Created by Michael Bocelli, Robert Oratorio, Sharanjit
                        Singh, Cole McCaleb, and Andrew Kallai.
                    </p>
                </div>
            </div>
        </DndProvider>
    );
}

export default App;
