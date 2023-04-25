import React from "react";
import { Form } from "react-bootstrap";
import { Users, userLookup } from "../interfaces/record";

interface userProps {
    updateUser: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    currentUser: Users["person"];
}

export function CreateUserForm({
    currentUser,
    updateUser
}: userProps): JSX.Element {
    return (
        <div style={{ marginRight: "20px" }}>
            <Form.Group controlId="userSelected">
                <Form.Label>Select User:</Form.Label>
                <Form.Select value={currentUser} onChange={updateUser}>
                    <option value="owner">owner{userLookup["owner"]}</option>
                    <option value="employee">
                        employee{userLookup["employee"]}
                    </option>
                    <option value="customer">
                        customer{userLookup["customer"]}
                    </option>
                </Form.Select>
            </Form.Group>
        </div>
    );
}
