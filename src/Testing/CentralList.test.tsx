import { render, screen } from "@testing-library/react";
import { CentralList } from "../components/CentralList";
import { Food, FOOD_LIST } from "../interfaces/food";
//import { User } from "../interfaces/user";
// import { Container } from "react-bootstrap";
import "@testing-library/jest-dom/extend-expect";
import assert from "assert";
import React from "react";
//import { jest } from "@jest/globals";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
//import getByText from "@testing-library/dom";
//import userEvent from "@testing-library/user-event";
//import Store from "../pages/Store";
//import { User } from "../interfaces/user";

//TEST ONE
function testUpdateFood(updateFood: Food): void {
    updateFood;
    throw new Error("Function not implemented.");
}
/*
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
    //TEST One
    it("renders 30 images", () => {
        //
        //expect(document.getElementById("middle")?.childNodes).toHaveLength(30);
        //assert(document.getElementById("middle")?.childNodes.length == 30);
        expect(document.getElementById("middle"));
        assert(document.getElementById("middle"));
    });
    //Test TWO
    it("Renders Filters List", () => {
        //expect(document.getElementById("filterFoodType")).toBeInTheDocument();
        //expect(screen.getByRole("combobox",  id:"filterFoodType" );
        expect(screen.queryAllByRole("combobox")).toHaveLength(2);

        //expect(document.getElementById("filterFoodType"));
        //assert(document.getElementById("filterFoodType"));
    });
    //Test Three
    it("Testing for filtered by Fruit", () => {
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
    //Test Four
    // it("Testing for filtered by Snacks", () => {
    //     render(
    //         <DndProvider backend={ = {HTML5Backend}}>
    //             <CentralList
    //             />
    //         </DndProvider>
    //     )
    // })
});
*/
