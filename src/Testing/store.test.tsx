import React from "react";
import { render, screen } from "@testing-library/react";
import { CentralList } from "../components/CentralList";
import { Food, FOOD_LIST } from "../interfaces/food";
import { User } from "../interfaces/user";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

describe("CentralList", () => {
    const testUser: User = {
        name: "John Doe",
        foodList: [],
        role: "customer"
    };

    test("check if 30 images in CentralList array of Foods", () => {
        const foods: Food[] = FOOD_LIST.filter(
            (food: Food) => food.image !== undefined
        );
        expect(foods).toHaveLength(30);
    });
    test("renders CentralList component", () => {
        render(
            <DndProvider backend={HTML5Backend}>
                <CentralList
                    centralList={FOOD_LIST}
                    onFoodUpdate={(updatedFood: Food) => {}}
                    currentUser={testUser}
                />
            </DndProvider>
        );
    });
    test("Main Inventory is displayed", () => {
        render(
            <DndProvider backend={HTML5Backend}>
                <CentralList
                    centralList={FOOD_LIST}
                    onFoodUpdate={(updatedFood: Food) => {}}
                    currentUser={testUser}
                />
            </DndProvider>
        );
        expect(screen.getByText("Main Inventory")).toBeInTheDocument();
    });
    test("Two selection boxes are present", () => {
        render(
            <DndProvider backend={HTML5Backend}>
                <CentralList
                    centralList={FOOD_LIST}
                    onFoodUpdate={(updatedFood: Food) => {}}
                    currentUser={testUser}
                />
            </DndProvider>
        );
        expect(screen.queryAllByRole("combobox")).toHaveLength(2);
    });
});
