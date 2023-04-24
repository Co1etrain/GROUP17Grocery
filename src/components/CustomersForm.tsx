import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

interface customerProps {
    updateSelectedCustomer: (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => void;
    currentSelectedCustomer: string;
}

export function DisplayCustomerNames({
    updateSelectedCustomer,
    currentSelectedCustomer
}: customerProps): JSX.Element {
    return (
        <div>
            <Form.Group controlId="customerSelected">
                <Form.Label>Select Customer:</Form.Label>
                <Form.Select
                    value={currentSelectedCustomer}
                    onChange={updateSelectedCustomer}
                >
                    <option value="customer1">customer1</option>
                </Form.Select>
            </Form.Group>
        </div>
    );
}
