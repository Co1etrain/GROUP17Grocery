import React from "react";
import { Form } from "react-bootstrap";
import { Users } from "../interfaces/record";

interface userProps {
    updateUser: (userType: Users["person"]) => void;
    currentUser: Users["person"];
}

export function CreateUserForm({
    updateUser,
    currentUser
}: userProps): JSX.Element {
    function changeSelectedUser(
        event: React.ChangeEvent<HTMLSelectElement>
    ): void {
        const toUsersType: Users["person"] = event.target
            .value as Users["person"];
        updateUser(toUsersType);
    }

    return (
        <div style={{ marginRight: "20px" }}>
            <Form.Group controlId="userSelected">
                <Form.Label>Select Role:</Form.Label>
                <Form.Select value={currentUser} onChange={changeSelectedUser}>
                    <option value="owner">Owner</option>
                    <option value="employee">Employee</option>
                    <option value="customer">Customer</option>
                </Form.Select>
            </Form.Group>
        </div>
    );
}
