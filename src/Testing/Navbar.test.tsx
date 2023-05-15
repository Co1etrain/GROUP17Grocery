/* eslint-disable @typescript-eslint/no-empty-function */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import React from "react";
import { Navbar } from "../components/Navbar";
import { MemoryRouter } from "react-router-dom";
import { Request } from "../interfaces/request";

import { User } from "../interfaces/user";
import { BrowserRouter } from "react-router-dom";

test("renders the requests button", () => {
    const mockUser: User = {
        name: "John Doe",
        foodList: [],
        role: "customer"
    };
    const { getByTestId } = render(
        <MemoryRouter>
            <Navbar
                setCustomerList={() => {}}
                RequestList={[]}
                setRequestList={() => {}}
                centralList={[]}
                setCentralList={() => {}}
                foodId={0}
                setFoodId={() => {}}
                currentUser={mockUser}
            />
        </MemoryRouter>
    );
    const requestsButton = getByTestId("requests-button");
    expect(requestsButton).toBeInTheDocument();
});

test("renders the title", () => {
    const mockUser: User = {
        name: "John Doe",
        foodList: [],
        role: "customer"
    };
    const { getByText } = render(
        <MemoryRouter>
            <Navbar
                setCustomerList={() => {}}
                RequestList={[]}
                setRequestList={() => {}}
                centralList={[]}
                setCentralList={() => {}}
                foodId={0}
                setFoodId={() => {}}
                currentUser={mockUser}
            />
        </MemoryRouter>
    );
    expect(getByText("Glocery")).toBeInTheDocument();
});

test("disables Requests button when current user is not an owner", () => {
    const mockUser: User = {
        name: "John Doe",
        foodList: [],
        role: "customer"
    };
    const { getByTestId } = render(
        <MemoryRouter>
            <Navbar
                setCustomerList={() => {}}
                RequestList={[]}
                setRequestList={() => {}}
                centralList={[]}
                setCentralList={() => {}}
                foodId={0}
                setFoodId={() => {}}
                currentUser={mockUser}
            />
        </MemoryRouter>
    );
    const requestsButton = getByTestId("requests-button");
    expect(requestsButton).toBeDisabled();
});
describe("Navbar", () => {
    test("renders Navbar component", () => {
        const mockUser: User = {
            name: "John Doe",
            foodList: [],
            role: "customer"
        };
        render(
            <BrowserRouter>
                <Navbar
                    currentUser={mockUser}
                    setCustomerList={() => {}}
                    RequestList={[]}
                    setRequestList={() => {}}
                    centralList={[]}
                    setCentralList={() => {}}
                    foodId={0}
                    setFoodId={() => {}}
                />
            </BrowserRouter>
        );
        const navbarElement = screen.getByRole("navigation");
        expect(navbarElement).toBeInTheDocument();
    });
});

test("Navbar shows 'Requests' button with badge when there are requests in the list", () => {
    const mockUser: User = {
        name: "John Doe",
        foodList: [],
        role: "owner"
    };
    const mockRequests: Request[] = [
        {
            name: "Test Food",
            description: "A test food",
            image: "",
            price: 9.99,
            calories: 100,
            ingredients: ["test ingredient"],
            category: "test"
        }
    ];
    const { getByTestId } = render(
        <MemoryRouter>
            <Navbar
                currentUser={mockUser}
                setCustomerList={() => {}}
                RequestList={mockRequests}
                setRequestList={() => {}}
                centralList={[]}
                setCentralList={() => {}}
                foodId={0}
                setFoodId={() => {}}
            />
        </MemoryRouter>
    );

    const requestsButton = getByTestId("requests-button");
    expect(requestsButton).toBeInTheDocument();
    expect(requestsButton).toBeEnabled();

    const badge = getByTestId("requests-badge");
    expect(badge).toHaveTextContent("1");
});
