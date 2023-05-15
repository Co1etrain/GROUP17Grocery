import { fireEvent, render, screen } from "@testing-library/react";
import { CentralList } from "../components/CentralList";
import { Food, FOOD_LIST } from "../interfaces/food";
//import { User } from "../interfaces/user";
// import { Container } from "react-bootstrap";
import "@testing-library/jest-dom/extend-expect";
//import assert from "assert";
import React from "react";
//import { jest } from "@jest/globals";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
//import getByText from "@testing-library/dom";
//import userEvent from "@testing-library/user-event";
//import Store from "../pages/Store";
import { User } from "../interfaces/user";

function testUpdateFood(updateFood: Food): void {
    updateFood;
    throw new Error("Function not implemented.");
}

describe("centrallist render", () => {
    const testUser: User = {
        name: "John Doe",
        foodList: [],
        role: "customer"
    };
    beforeEach(() => {
        render(
            <CentralList
                centralList={[]}
                //onFoodUpdate={function (updatedFood: Food): void {
                //throw new Error("Function not implemented.");
                // }}
                onFoodUpdate={testUpdateFood}
                currentUser={{ name: "owner", role: "owner", foodList: [] }}
            />
        );
    });
    //Test 1
    it("sort dropdown works LtoH", () => {
        const roleDropdown = screen.getByLabelText("Sort by:");
        fireEvent.change(roleDropdown, {
            target: { value: "priceLowToHigh" }
        });
        expect(roleDropdown).toHaveValue("priceLowToHigh");
    });
    //Test 2
    it("sort dropdown works HtoL", () => {
        const roleDropdown = screen.getByLabelText("Sort by:");
        fireEvent.change(roleDropdown, {
            target: { value: "priceHighToLow" }
        });
        expect(roleDropdown).toHaveValue("priceHighToLow");
    });
    //Test 3
    it("color changes on click", () => {
        render(
            <DndProvider backend={HTML5Backend}>
                <CentralList
                    centralList={FOOD_LIST}
                    onFoodUpdate={testUpdateFood}
                    currentUser={testUser}
                />
            </DndProvider>
        );
    });
    //Test 4
    it("sort dropdown works name", () => {
        const roleDropdown = screen.getByLabelText("Sort by:");
        fireEvent.change(roleDropdown, {
            target: { value: "name" }
        });
        expect(roleDropdown).toHaveValue("name");
    });

    //Test 5
    // it("sort dropdown works for filter by Fruit", () => {
    //     const roleDropdown = screen.getByLabelText("Filter by:");
    //     fireEvent.change(roleDropdown, {
    //         target: { value: "Fruits" }
    //     });
    //     expect(roleDropdown).toHaveValue("Fruits");
    // });

    //Test Four
    // it("Filter decreases list length", () => {
    //     render(
    //         <DndProvider backend={HTML5Backend}>
    //             <CentralList
    //                 centralList={FOOD_LIST}
    //                 onFoodUpdate={testUpdateFood}
    //                 currentUser={testUser}
    //             />
    //         </DndProvider>
    //     );
    //     const filterDropdown = screen.getAllByRole(
    //         "combobox"
    //     ) as unknown as HTMLSelectElement;
    //     expect(JSON.stringify(filterDropdown[0])).toEqual("All");
    //     fireEvent.change(filterDropdown, { target: { value: "Fruits" } });

    //     expect(filterDropdown[0]).toHaveValue("Fruits");
    //     const images = screen.queryAllByRole("img");
    //     expect(images).toHaveLength(5);
    // });
    //Test Five
    // it("Testing that 30 images are rendered initially in central list", () => {
    //     render(
    //         <DndProvider backend={HTML5Backend}>
    //             <CentralList
    //                 centralList={FOOD_LIST}
    //                 onFoodUpdate={testUpdateFood}
    //                 currentUser={testUser}
    //             />
    //         </DndProvider>
    //     );
    //     const foodItems = screen.queryAllByRole("listitem", {
    //         name: /food item/i
    //     });
    //     expect(foodItems).toHaveLength(30);
    // });
    // Test Four
    // it("Testing for filtered by Snacks", () => {
    //     render(
    //         <DndProvider backend={ = {HTML5Backend}}>
    //             <CentralList
    //             />
    //         </DndProvider>
    //     )
    // })
});
