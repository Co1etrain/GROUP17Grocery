import React, { useState } from "react";
import { Form } from "react-bootstrap";
interface customerRecordProps {
    setTheState: () => void;
    event: React.ChangeEvent<HTMLInputElement>;
}
/*
export function TextField(): JSX.Element {
    const [customerName, setCustomerName] = useState<string>("");

    function updateCustomerName({setTheState, event}: customerRecordProps) {
        setTheState(event.target.value);
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
        </div>
    );
}*/
