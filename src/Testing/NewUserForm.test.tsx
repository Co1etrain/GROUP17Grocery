import { NewUserForm } from "../components/NewUserForm";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Food } from "../interfaces/food";
import "@testing-library/jest-dom/extend-expect";
import React, { useState } from "react";
import { User } from "../interfaces/user";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

interface TestComponentProps {
    currentUser: User;
}

function TestComponent({ currentUser }: TestComponentProps): JSX.Element {
    const [userList, setUserList] = useState<User[]>([
        { name: "Owner", role: "owner", foodList: [] },
        { name: "Employee_Test", role: "employee", foodList: [] },
        { name: "Customer_Test", role: "customer", foodList: [] }
    ]);
    const [, setCurrentUser] = useState<User>(userList[0]);
    const [, setCustomerList] = useState<Food[]>([]);

    return (
        <NewUserForm
            userList={userList}
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            setCustomerList={setCustomerList}
            setUserList={setUserList}
        ></NewUserForm>
    );
}

describe("NewUserForm Works Correctly", () => {
    it("add user button renders correctly for owner", () => {
        const { container } = render(
            <DndProvider backend={HTML5Backend}>
                <TestComponent
                    currentUser={{
                        name: "Owner",
                        role: "owner",
                        foodList: []
                    }}
                />
            </DndProvider>
        );

        const wrappingDiv = container.querySelector("div");
        expect(wrappingDiv).not.toHaveAttribute("hidden");
    });
    it("add user button not rendered for customer", () => {
        const { container } = render(
            <DndProvider backend={HTML5Backend}>
                <TestComponent
                    currentUser={{
                        name: "Customer_Test",
                        role: "customer",
                        foodList: []
                    }}
                />
            </DndProvider>
        );

        const wrappingDiv = container.querySelector("div");
        expect(wrappingDiv).toHaveAttribute("hidden");
    });

    it("displays 'Create New User' when owner clicks the add user button", () => {
        render(
            <DndProvider backend={HTML5Backend}>
                <TestComponent
                    currentUser={{ name: "Owner", role: "owner", foodList: [] }}
                />
            </DndProvider>
        );

        // checks that the text is not there before the button is clicked
        expect(screen.queryByText("Create New User")).toBeNull();

        const addUserButton = screen.getByText("Add User");
        fireEvent.click(addUserButton);

        // text is there after button click
        expect(screen.getByText("Create New User")).toBeInTheDocument();
    });
    it("allows typing in the 'User Name' text field", () => {
        render(
            <DndProvider backend={HTML5Backend}>
                <TestComponent
                    currentUser={{ name: "Owner", role: "owner", foodList: [] }}
                />
            </DndProvider>
        );

        const addUserButton = screen.getByText("Add User");
        fireEvent.click(addUserButton);

        const nameInput = screen.getByPlaceholderText("User's Name");
        fireEvent.change(nameInput, { target: { value: "Test Name" } });

        expect(nameInput).toHaveValue("Test Name");
    });
    it("select role dropdown works inside create new user form", () => {
        render(
            <DndProvider backend={HTML5Backend}>
                <TestComponent
                    currentUser={{ name: "Owner", role: "owner", foodList: [] }}
                />
            </DndProvider>
        );

        const addUserButton = screen.getByText("Add User");
        fireEvent.click(addUserButton);

        const roleDropdown = screen.getByLabelText("Select desired role");
        fireEvent.change(roleDropdown, { target: { value: "customer" } });
        expect(roleDropdown).toHaveValue("customer");
    });
    it("adds new user to list and closes modal", async () => {
        render(
            <DndProvider backend={HTML5Backend}>
                <TestComponent
                    currentUser={{ name: "Owner", role: "owner", foodList: [] }}
                />
            </DndProvider>
        );
        const addUserButton = screen.getByText("Add User");
        fireEvent.click(addUserButton);

        const nameInput = screen.getByPlaceholderText("User's Name");
        fireEvent.change(nameInput, { target: { value: "Test New User" } });

        const roleDropdown = screen.getByLabelText("Select desired role");
        fireEvent.change(roleDropdown, { target: { value: "customer" } });

        const addNewUserButton = screen.getByText("Add");
        fireEvent.click(addNewUserButton);

        await waitFor(() => {
            expect(
                screen.queryByText("Create New User")
            ).not.toBeInTheDocument();
        });
    });
});
