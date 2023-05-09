import React from "react";
import { render, screen } from "@testing-library/react";
import { CustomerCart } from "./components/CustomerCart";
import { Food, FOOD_LIST } from "./interfaces/food";
import { User } from "./interfaces/user";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

let mockFoodId: number = FOOD_LIST.length + 1;

function mockSetFoodId(newId: number): void {
    mockFoodId = newId;
}

let mockUserList: User[] = [
    { name: "Owner", role: "owner", foodList: [] },
    { name: "Employee_Test", role: "employee", foodList: [] },
    { name: "Customer_Test", role: "customer", foodList: [] },
    { name: "Customer_Test2", role: "customer", foodList: [] }
];

function mockSetUserList(newList: User[]) {
    mockUserList = newList;
}

const mockCurrentUser: User = mockUserList[2];

let mockCustomerList: Food[] = [];

function mockSetCustomerList(newList: Food[]): void {
    mockCustomerList = newList;
}

function mockUpdateUserList(newFoodList: Food[]) {
    // Make deep copy
    const updatedUserList = mockUserList.map((user: User) => ({
        ...user,
        foodList: user.foodList.map((food: Food) => ({
            ...food,
            ingredients: food.ingredients
        }))
    }));
    mockSetCustomerList(newFoodList);
    // Insert updated user object into deep copy of user list
    updatedUserList.splice(
        mockUserList.findIndex(
            (user: User) => user.name === mockCurrentUser.name
        ),
        1,
        { ...mockCurrentUser, foodList: newFoodList }
    );
    mockSetUserList(updatedUserList);
}

describe("CustomerCart Component tests", () => {
    test("The initial cart is empty", () => {
        render(
            <DndProvider backend={HTML5Backend}>
                <CustomerCart
                    customerList={mockCustomerList}
                    centralList={FOOD_LIST}
                    currentUser={{
                        name: "customer_test",
                        role: "customer",
                        foodList: []
                    }}
                    updateUserList={mockUpdateUserList}
                    foodId={mockFoodId}
                    setFoodId={mockSetFoodId}
                />
            </DndProvider>
        );
        const currentCart = screen.queryAllByRole("listitem");
        expect(currentCart).toHaveLength(0);
    });
    test("The cart starts with an initial price of 0", () => {
        render(
            <DndProvider backend={HTML5Backend}>
                <CustomerCart
                    customerList={mockCustomerList}
                    centralList={FOOD_LIST}
                    currentUser={{
                        name: "customer_test",
                        role: "customer",
                        foodList: []
                    }}
                    updateUserList={mockUpdateUserList}
                    foodId={mockFoodId}
                    setFoodId={mockSetFoodId}
                />
            </DndProvider>
        );
        expect(screen.getByText("Total price: 0.00")).toBeInTheDocument();
    });
    test("The cart has one item and price is updated to match", () => {
        render(
            <DndProvider backend={HTML5Backend}>
                <CustomerCart
                    customerList={[FOOD_LIST[0]]}
                    centralList={FOOD_LIST}
                    currentUser={{
                        name: "customer_test",
                        role: "customer",
                        foodList: [FOOD_LIST[0]]
                    }}
                    updateUserList={mockUpdateUserList}
                    foodId={mockFoodId}
                    setFoodId={mockSetFoodId}
                />
            </DndProvider>
        );
        console.log(mockCustomerList);
        const currentCart = screen.queryAllByRole("listitem");
        expect(currentCart).toHaveLength(1);
        expect(
            screen.getByText(
                "Total price: " + mockCustomerList[0].price.toFixed(2)
            )
        ).toBeInTheDocument();
    });
});
