import React from "react";
import { render, screen } from "@testing-library/react";
import { CentralList } from "../components/CentralList";
import { Food, FOOD_LIST } from "../interfaces/food";
import { User } from "../interfaces/user";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

describe("CentralList", () => {
    function onFoodUpdate(input: Food): void {
        input;
        return void 0;
    }

    const testUser: User = {
        name: "John Doe",
        foodList: [],
        role: "customer"
    };
    //Test 1
    test("check if 30 images in CentralList array of Foods", () => {
        const foods: Food[] = FOOD_LIST.filter(
            (food: Food) => food.image !== undefined
        );
        expect(foods).toHaveLength(30);
    });
    //Test 2
    test("renders CentralList component", () => {
        render(
            <DndProvider backend={HTML5Backend}>
                <CentralList
                    centralList={FOOD_LIST}
                    onFoodUpdate={onFoodUpdate}
                    currentUser={testUser}
                />
            </DndProvider>
        );
    });
    //Test 3
    test("Main Inventory is displayed", () => {
        render(
            <DndProvider backend={HTML5Backend}>
                <CentralList
                    centralList={FOOD_LIST}
                    onFoodUpdate={onFoodUpdate}
                    currentUser={testUser}
                />
            </DndProvider>
        );
        expect(screen.getByText("Main Inventory")).toBeInTheDocument();
    });
    //Test 4
    test("Two selection boxes are present", () => {
        render(
            <DndProvider backend={HTML5Backend}>
                <CentralList
                    centralList={FOOD_LIST}
                    onFoodUpdate={onFoodUpdate}
                    currentUser={testUser}
                />
            </DndProvider>
        );
        expect(screen.queryAllByRole("combobox")).toHaveLength(2);
    });
    //Test 5
    test("Checks to see if three selection options are present for the sort by: form", () => {
        render(
            <DndProvider backend={HTML5Backend}>
                <CentralList
                    centralList={FOOD_LIST}
                    onFoodUpdate={onFoodUpdate}
                    currentUser={testUser}
                />
            </DndProvider>
        );
        expect(screen.queryAllByRole("combobox")[0]).toHaveLength(3);
    });
});
