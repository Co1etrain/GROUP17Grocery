import { render, screen, fireEvent, queryByText } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import React from "react";
import { Navbar } from "../components/Navbar";
import { MemoryRouter } from "react-router-dom";
import { Request } from "../interfaces/request";

import { User } from "../interfaces/user";
import { BrowserRouter } from "react-router-dom";
import { RequestForm } from "../components/RequestForm";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

test("clicking Request Food button should open the modal", () => {
    const mockUser: User = {
        name: "John Doe",
        foodList: [],
        role: "employee"
    };
    render(
        <RequestForm
            requestList={[]}
            setRequestList={jest.fn()}
            currentUser={mockUser}
        />
    );
    const requestButton = screen.getByText("Request Food");
    fireEvent.click(requestButton);
    const modalTitle = screen.getByText("Please fill out all fields:");
    expect(modalTitle).toBeInTheDocument();
});
test("Button shouldnt be visible to customer", () => {
    const mockUser: User = {
        name: "John Doe",
        foodList: [],
        role: "customer"
    };
    const { queryByText } = render(
        <DndProvider backend={HTML5Backend}>
            <RequestForm
                requestList={[]}
                setRequestList={jest.fn()}
                currentUser={mockUser}
            />
        </DndProvider>
    );
    const requestButton = screen.getByText("Request Food");
    expect(requestButton).toBeNull();
});
