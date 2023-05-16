import { DeleteUserModal } from "../components/DeleteUserModal";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React, { useState } from "react";
import { User } from "../interfaces/user";

function doNothing() {
    // Intentionally empty
}

interface Props {
    userList: User[];
}

function TestComponent({ userList }: Props): JSX.Element {
    const [, setUserList] = useState<User[]>([]);
    const [currentUser] = useState<User>(userList[0]);

    return (
        <DeleteUserModal
            currentUser={currentUser}
            userList={userList}
            setUserList={setUserList}
        />
    );
}

describe("New User Form Tests", () => {
    test("The button renders if current user is owner", () => {
        render(
            <DeleteUserModal
                currentUser={{ name: "owner", role: "owner", foodList: [] }}
                userList={[{ name: "owner", role: "owner", foodList: [] }]}
                setUserList={doNothing}
            />
        );

        const deleteButton = screen.getByRole("button");
        expect(deleteButton).toBeVisible();
    });
    test("The button does not render if current user is not owner", () => {
        render(
            <DeleteUserModal
                currentUser={{
                    name: "customer",
                    role: "customer",
                    foodList: []
                }}
                userList={[
                    {
                        name: "customer",
                        role: "customer",
                        foodList: []
                    }
                ]}
                setUserList={doNothing}
            />
        );

        const deleteButton = screen.getByRole("button", {
            hidden: true
        });
        expect(deleteButton).not.toBeVisible();
    });
    test("The button opens a modal window with number of buttons === 2", () => {
        render(
            <DeleteUserModal
                currentUser={{ name: "owner", role: "owner", foodList: [] }}
                userList={[{ name: "owner", role: "owner", foodList: [] }]}
                setUserList={doNothing}
            />
        );

        const modalButtons = screen.getAllByRole("button");
        expect(modalButtons.length).toBe(2);
    });
});
