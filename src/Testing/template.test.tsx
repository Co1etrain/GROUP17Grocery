import React from "react";
import { render } from "@testing-library/react";
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
});
