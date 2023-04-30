import React from "react";
import { Button, Form } from "react-bootstrap";
//import { Food } from "../interfaces/food";
//import { CustomersRecord } from "../interfaces/record";

interface customerProps {
    setSelectedCustomer: (customerName: string) => void;
    currentSelectedCustomer: string;
    currentCustomersRecord: string[];
}

export function DisplayCustomerNames({
    setSelectedCustomer,
    currentSelectedCustomer,
    currentCustomersRecord
}: customerProps): JSX.Element {
    function updateSelectedCustomer(
        event: React.ChangeEvent<HTMLSelectElement>
    ): void {
        setSelectedCustomer(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="customerSelected">
                <Form.Label>Select Customer:</Form.Label>
                <Form.Select
                    value={currentSelectedCustomer}
                    onChange={updateSelectedCustomer}
                >
                    {currentCustomersRecord.map((customer: string) => (
                        <option key={customer} value={customer}>
                            {customer}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
        </div>
    );
}
