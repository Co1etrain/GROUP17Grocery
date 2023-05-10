import { CustomerCart } from "../components/CustomerCart";
import { render, screen } from "@testing-library/react";
import { FOOD_LIST, Food } from "../interfaces/food";
import "@testing-library/jest-dom/extend-expect";
import React, { useState } from "react";
import { User } from "../interfaces/user";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import userEvent from "@testing-library/user-event";

function doNothing() {
    // Intentionally empty
}
interface Props {
    customerList: Food[];
}

function TestComponent({ customerList }: Props): JSX.Element {
    const [userList, setUserList] = useState<User[]>([
        { name: "Owner", role: "owner", foodList: [] },
        { name: "Cust1", role: "customer", foodList: [] },
        { name: "Cust2", role: "customer", foodList: [] }
    ]);
    const [currentUser] = useState<User>(userList[0]);
    const [centralList] = useState<Food[]>(FOOD_LIST);
    const [, setCustomerList] = useState<Food[]>([]);
    const [foodId, setFoodId] = useState<number>(FOOD_LIST.length + 1);

    function updateUserList(newFoodList: Food[]) {
        // Make deep copy
        const updatedUserList = userList.map((user: User) => ({
            ...user,
            foodList: user.foodList.map((food: Food) => ({
                ...food,
                ingredients: food.ingredients
            }))
        }));
        setCustomerList(newFoodList);
        // Insert updated user object into deep copy of user list
        updatedUserList.splice(
            userList.findIndex((user: User) => user.name === currentUser.name),
            1,
            { ...currentUser, foodList: newFoodList }
        );
        setUserList(updatedUserList);
    }

    return (
        <CustomerCart
            customerList={customerList}
            centralList={centralList}
            currentUser={currentUser}
            updateUserList={updateUserList}
            foodId={foodId}
            setFoodId={setFoodId}
        />
    );
}

describe("CustomerCart Component tests", () => {
    test("The cart title is 'No one' when no customers are current user", () => {
        render(
            <DndProvider backend={HTML5Backend}>
                <TestComponent customerList={[]} />
            </DndProvider>
        );
        expect(screen.getByText("No one's Cart")).toBeInTheDocument();
    });
    test("The cart is hidden when no customer is selected", () => {
        const { container } = render(
            <DndProvider backend={HTML5Backend}>
                <CustomerCart
                    customerList={[FOOD_LIST[0]]}
                    centralList={FOOD_LIST}
                    currentUser={{ name: "owner", role: "owner", foodList: [] }}
                    updateUserList={doNothing}
                    foodId={0}
                    setFoodId={doNothing}
                />
            </DndProvider>
        );
        // Get first div in component (the top one with hidden attribute)
        const cartDiv = container.querySelector("div");
        expect(cartDiv).not.toBeVisible();
    });
    test("The cart is visible when a customer is selected", () => {
        const { container } = render(
            <DndProvider backend={HTML5Backend}>
                <CustomerCart
                    customerList={[FOOD_LIST[0]]}
                    centralList={FOOD_LIST}
                    currentUser={{
                        name: "customer",
                        role: "customer",
                        foodList: []
                    }}
                    updateUserList={doNothing}
                    foodId={0}
                    setFoodId={doNothing}
                />
            </DndProvider>
        );
        // Get first div in component (the top one with hidden attribute)
        const cartDiv = container.querySelector("div");
        expect(cartDiv).toBeVisible();
    });
    test("Cart renders the correct amount of items", () => {
        render(
            <DndProvider backend={HTML5Backend}>
                <CustomerCart
                    customerList={[FOOD_LIST[0], FOOD_LIST[1]]}
                    centralList={FOOD_LIST}
                    currentUser={{
                        name: "customer",
                        role: "customer",
                        foodList: [FOOD_LIST[0], FOOD_LIST[1]]
                    }}
                    updateUserList={doNothing}
                    foodId={0}
                    setFoodId={doNothing}
                />
            </DndProvider>
        );

        // Check that the correct number of items are displayed in cart
        const currentCart = screen.getAllByRole("button", {
            name: "Food icon"
        });
        expect(currentCart.length).toBe(2);
    });
    test("Cart renders the correct amount of items after adding one", () => {
        const { container, rerender } = render(
            <DndProvider backend={HTML5Backend}>
                <TestComponent customerList={[]} />
            </DndProvider>
        );

        // Check that no food items are displayed initially
        const initialFoodItems = container.querySelectorAll(".Food-Container");
        expect(initialFoodItems.length).toBe(0);

        // Add an item to the cart
        rerender(
            <DndProvider backend={HTML5Backend}>
                <TestComponent customerList={[FOOD_LIST[0]]} />
            </DndProvider>
        );

        // Check that the added FoodItem is displayed in the EmployeeCart
        const updatedFoodItems = container.querySelectorAll(".Food-Container");
        expect(updatedFoodItems.length).toBe(1);
    });
    test("Cart is correctly sorted by price and name", () => {
        const { container } = render(
            <DndProvider backend={HTML5Backend}>
                <TestComponent
                    customerList={[
                        {
                            id: 1,
                            name: "Apples",
                            description: "All organic Non-GMO Apples",
                            image: "test",
                            price: 2.2,
                            calories: 95,
                            ingredients: ["Apples"],
                            category: "Fruits"
                        },
                        {
                            id: 2,
                            name: "Whole Wheat Bread",
                            description: "Freshly Made Farmer Market Bread",
                            image: "test",
                            price: 5.0,
                            calories: 92,
                            ingredients: [
                                "Water, ",
                                "Flour, ",
                                "Salt, ",
                                "Eggs, ",
                                "Yeast"
                            ],
                            category: "Other"
                        }
                    ]}
                />
            </DndProvider>
        );
        let foodList = container.querySelectorAll(".Food-Desc");
        expect(foodList[0]).toHaveTextContent(/2.2/i);
        expect(foodList[1]).toHaveTextContent(/5.0/i);
        const sortSelect = container.querySelectorAll("select");
        // First selector is the sort, second is filter
        userEvent.selectOptions(sortSelect[0], "Price High to Low");
        foodList = container.querySelectorAll(".Food-Desc");
        expect(foodList[0]).toHaveTextContent(/5.0/i);
        expect(foodList[1]).toHaveTextContent(/2.2/i);

        userEvent.selectOptions(sortSelect[0], "Price Low to High");
        foodList = container.querySelectorAll(".Food-Desc");
        expect(foodList[0]).toHaveTextContent(/2.2/i);
        expect(foodList[1]).toHaveTextContent(/5.0/i);

        userEvent.selectOptions(sortSelect[0], "Price High to Low");
        foodList = container.querySelectorAll(".Food-Desc");
        expect(foodList[0]).toHaveTextContent(/Whole Wheat Bread/i);
        expect(foodList[1]).toHaveTextContent(/Apples/i);

        userEvent.selectOptions(sortSelect[0], "Name");
        foodList = container.querySelectorAll(".Food-Desc");
        expect(foodList[0]).toHaveTextContent(/Apples/i);
        expect(foodList[1]).toHaveTextContent(/Whole Wheat Bread/i);
    });
    test("Cart is correctly filtered by categories", () => {
        const { container } = render(
            <DndProvider backend={HTML5Backend}>
                <TestComponent
                    customerList={[
                        {
                            id: 1,
                            name: "Apples",
                            description: "All organic Non-GMO Apples",
                            image: "test",
                            price: 2.2,
                            calories: 95,
                            ingredients: ["Apples"],
                            category: "Fruits"
                        },
                        {
                            id: 2,
                            name: "Whole Wheat Bread",
                            description: "Freshly Made Farmer Market Bread",
                            image: "test",
                            price: 5.0,
                            calories: 92,
                            ingredients: [
                                "Water, ",
                                "Flour, ",
                                "Salt, ",
                                "Eggs, ",
                                "Yeast"
                            ],
                            category: "Other"
                        }
                    ]}
                />
            </DndProvider>
        );
        let foodList = container.querySelectorAll(".Food-Desc");
        expect(foodList.length).toBe(2);
        const sortSelect = container.querySelectorAll("select");
        // First selector is the sort, second is filter
        userEvent.selectOptions(sortSelect[1], "Fruits");
        foodList = container.querySelectorAll(".Food-Desc");
        expect(foodList.length).toBe(1);
        expect(foodList[0]).toHaveTextContent(/Other/i);

        userEvent.selectOptions(sortSelect[1], "Other");
        foodList = container.querySelectorAll(".Food-Desc");
        expect(foodList.length).toBe(1);
        expect(foodList[0]).toHaveTextContent(/Fruits/i);

        userEvent.selectOptions(sortSelect[1], "None");
        foodList = container.querySelectorAll(".Food-Desc");
        expect(foodList.length).toBe(2);
    });
    test("Cart's ingredients can be searched for", () => {
        const { container } = render(
            <DndProvider backend={HTML5Backend}>
                <TestComponent
                    customerList={[
                        {
                            id: 1,
                            name: "Apples",
                            description: "All organic Non-GMO Apples",
                            image: "test",
                            price: 2.2,
                            calories: 95,
                            ingredients: ["Apples"],
                            category: "Fruits"
                        },
                        {
                            id: 2,
                            name: "Whole Wheat Bread",
                            description: "Freshly Made Farmer Market Bread",
                            image: "test",
                            price: 5.0,
                            calories: 92,
                            ingredients: [
                                "Water, ",
                                "Flour, ",
                                "Salt, ",
                                "Eggs, ",
                                "Yeast"
                            ],
                            category: "Other"
                        }
                    ]}
                />
            </DndProvider>
        );
        let foodList = container.querySelectorAll(".Food-Desc");
        expect(foodList.length).toBe(2);
        const searchBar = screen.getByRole("textbox", { hidden: true });
        userEvent.type(searchBar, "Eggs");
        foodList = container.querySelectorAll(".Food-Desc");
        expect(foodList.length).toBe(1);
        expect(foodList[0]).toHaveTextContent(/Eggs/i);
    });
});
