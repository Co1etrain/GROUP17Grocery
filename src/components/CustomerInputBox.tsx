import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function TextField(): JSX.Element {
    const [customerName, setCustomerName] = useState<string>("");

    function updateCustomerName(event: React.ChangeEvent<HTMLInputElement>) {
        setCustomerName(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="formCustomerName">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                    value={customerName}
                    onChange={updateCustomerName}
                />
            </Form.Group>
    );
}
