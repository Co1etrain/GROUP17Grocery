import { EmployeeCart } from "../components/EmployeeCart";
import { render, screen } from "@testing-library/react";
import { FOOD_LIST, Food } from "../interfaces/food";
import "@testing-library/jest-dom/extend-expect";
import React, { useState } from "react";
import { User } from "../interfaces/user";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

interface Props {
    empList: Food[];
}

function TestComponent({ empList }: Props): JSX.Element {
    const [userList] = useState<User[]>([
        { name: "Owner", role: "owner", foodList: [] }
    ]);
    const [currentUser] = useState<User>(userList[0]);
    const [centralList, setCentralList] = useState<Food[]>(FOOD_LIST);
    const [, setEmployeeList] = useState<Food[]>([]);

    const handleCentralListUpdate = (updatedFood: Food) => {
        setCentralList((prevList) =>
            prevList.map((food) =>
                food.id === updatedFood.id ? updatedFood : food
            )
        );
    };

    return (
        <EmployeeCart
            onCentralListUpdate={handleCentralListUpdate}
            currentUser={currentUser}
            employeeList={empList}
            setEmployeeList={setEmployeeList}
            centralList={centralList}
        />
    );
}

describe("Renders Employee Cart", () => {
    it("renders all items", () => {
        render(
            <DndProvider backend={HTML5Backend}>
                <TestComponent empList={[FOOD_LIST[0]]} />
            </DndProvider>
        );

        // Check that the component title is rendered correctly
        expect(screen.getByText("Employee Cart")).toBeInTheDocument();
    });
    it("hides employee cart for customers", () => {
        function doNothing() {
            // Intentionally empty
        }
        const { container } = render(
            <DndProvider backend={HTML5Backend}>
                <EmployeeCart
                    employeeList={[FOOD_LIST[0]]}
                    setEmployeeList={doNothing}
                    centralList={FOOD_LIST}
                    onCentralListUpdate={doNothing}
                    currentUser={{
                        name: "Customer",
                        role: "customer",
                        foodList: []
                    }}
                />
            </DndProvider>
        );

        // Check that the EmployeeCart component is hidden for customers
        const wrappingDiv = container.querySelector("div");
        expect(wrappingDiv).toHaveAttribute("hidden");
    });
    it("shows employee cart for employees", () => {
        function doNothing() {
            // Intentionally empty
        }
        const { container } = render(
            <DndProvider backend={HTML5Backend}>
                <EmployeeCart
                    employeeList={[FOOD_LIST[0]]}
                    setEmployeeList={doNothing}
                    centralList={FOOD_LIST}
                    onCentralListUpdate={doNothing}
                    currentUser={{
                        name: "Employee",
                        role: "employee",
                        foodList: []
                    }}
                />
            </DndProvider>
        );

        // check that employee cart component is shown for employees
        const wrappingDiv = container.querySelector("div");
        expect(wrappingDiv).not.toHaveAttribute("hidden");
    });
    it("displays correct number of items in employee cart", () => {
        const { container } = render(
            <DndProvider backend={HTML5Backend}>
                <TestComponent empList={[FOOD_LIST[0], FOOD_LIST[1]]} />
            </DndProvider>
        );

        // Check that the correct number of items displayed in card
        const foodItems = container.querySelectorAll(".Food-Desc");
        expect(foodItems.length).toBe(2);
    });
    it("adds an item to the cart and displays it", () => {
        const { container, rerender } = render(
            <DndProvider backend={HTML5Backend}>
                <TestComponent empList={[]} />
            </DndProvider>
        );

        // Check that no food items are displayed initially
        const initialFoodItems = container.querySelectorAll(".Food-Desc");
        expect(initialFoodItems.length).toBe(0);

        // Add an item to the cart
        rerender(
            <DndProvider backend={HTML5Backend}>
                <TestComponent empList={[FOOD_LIST[0]]} />
            </DndProvider>
        );

        // Check that the added FoodItem is displayed in the EmployeeCart
        const updatedFoodItems = container.querySelectorAll(".Food-Desc");
        expect(updatedFoodItems.length).toBe(1);
    });
});
