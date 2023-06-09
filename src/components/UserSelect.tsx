import React from "react";
import { Form } from "react-bootstrap";
import { User } from "../interfaces/user";
import { Food } from "../interfaces/food";

interface UserSelectProps {
    userList: User[];
    currentUser: User;
    setCurrentUser: (newUser: User) => void;
    setCustomerList: (newList: Food[]) => void;
}

export function UserSelect({
    userList,
    currentUser,
    setCurrentUser,
    setCustomerList
}: UserSelectProps) {
    function updateUser(e: React.ChangeEvent<HTMLSelectElement>) {
        const newUser: User | undefined = userList.find(
            (user: User) => user.name === e.target.value
        );

        if (newUser) {
            setCurrentUser(newUser);
            setCustomerList(newUser.foodList);
        }
    }

    return (
        <div style={{ width: "300px" }}>
            <Form.Group controlId="users">
                <Form.Label>Select user:</Form.Label>
                <Form.Select value={currentUser.name} onChange={updateUser}>
                    {userList.map((user: User) => {
                        return (
                            <option key={user.name} value={user.name}>
                                {user.name + " (" + user.role + ")"}
                            </option>
                        );
                    })}
                </Form.Select>
            </Form.Group>
        </div>
    );
}
