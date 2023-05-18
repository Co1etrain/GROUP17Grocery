import { FoodItem } from "../components/FoodItem";
import { render, screen } from "@testing-library/react";
import { Food, FOOD_LIST } from "../interfaces/food";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { User } from "../interfaces/user";
const { getByText } = screen;

const testFood: Food = FOOD_LIST[0];
const testUser: User = { name: "Owner", role: "owner", foodList: [] };

describe("FoodItem", () => {
    it("renders food item correctly", () => {
        const { getByText } = render(
            <DndProvider backend={HTML5Backend}>
                <FoodItem
                    {...testFood}
                    currentUser={testUser}
                    showEditButton={true}
                    showAppearances={true}
                />
            </DndProvider>
        );

        expect(
            getByText(
                new RegExp(`${testFood.name}.*\\$${testFood.price.toFixed(2)}`)
            )
        ).toBeInTheDocument();
    });

    it("toggles food item description visibility", () => {
        render(
            <DndProvider backend={HTML5Backend}>
                <FoodItem
                    {...testFood}
                    currentUser={testUser}
                    showEditButton={true}
                    showAppearances={true}
                />
            </DndProvider>
        );
        expect(getByText(/95\sCalories\sper\sserving/)).toBeInTheDocument();
    });

    it("does not show edit button for customer role", () => {
        const testUser: User = {
            name: "Customer",
            role: "customer",
            foodList: []
        };
        const { queryByText } = render(
            <DndProvider backend={HTML5Backend}>
                <FoodItem
                    {...testFood}
                    currentUser={testUser}
                    showEditButton={true}
                    showAppearances={true}
                />
            </DndProvider>
        );

        const editButton = queryByText("Edit");
        expect(editButton).not.toBeInTheDocument();
    });

    it("displays the correct price", () => {
        render(
            <DndProvider backend={HTML5Backend}>
                <FoodItem
                    {...testFood}
                    currentUser={testUser}
                    showEditButton={true}
                    showAppearances={true}
                />
            </DndProvider>
        );
        const priceRegex = new RegExp(`\\$${testFood.price.toFixed(2)}`);
        expect(screen.getByText(priceRegex)).toBeInTheDocument();
    });

    it("renders image correctly", () => {
        const { container } = render(
            <DndProvider backend={HTML5Backend}>
                <FoodItem
                    {...testFood}
                    currentUser={testUser}
                    showEditButton={true}
                    showAppearances={true}
                />
            </DndProvider>
        );

        // Check if the food item image is displayed
        expect(container.querySelector("img")).toBeInTheDocument();
    });
});
