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
import { Food, FOOD_LIST } from "./interfaces/food";

function App(): JSX.Element {
    const [currentUser, setUser] = useState<Users["person"]>("owner");
    const [centralList, setCentralList] = useState<Food[]>(FOOD_LIST);

    const handleCentralListUpdate = (updatedFood: Food) => {
        setCentralList((prevList) =>
            prevList.map((food) =>
                food.id === updatedFood.id ? updatedFood : food
            )
        );
        const foodIndex = FOOD_LIST.findIndex(
            (food) => food.id === updatedFood.id
        );
        if (foodIndex !== -1) {
            FOOD_LIST[foodIndex] = updatedFood;
        }
    };

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
                <EmployeeCart
                    employeeList={[]}
                    onCentralListUpdate={handleCentralListUpdate}
                ></EmployeeCart>
                <CustomerCart
                    customerList={[]}
                    customerName={""}
                ></CustomerCart>
                <CentralList
                    foodList={centralList}
                    onFoodUpdate={handleCentralListUpdate}
                ></CentralList>
                <div>
                    <p>Michael Bocelli</p>
                    <p>Robert Oratorio</p>
                    <p>Sharanjit Singh</p>
                    <p>Cole McCaleb</p>
                    <p>Andrew Kallai</p>
                </div>
            </div>
        </DndProvider>
    );
}

export default App;
