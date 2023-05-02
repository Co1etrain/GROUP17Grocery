import React from "react";
import { Form } from "react-bootstrap";

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
    const customerNames: JSX.Element[] = currentCustomersRecord.map(
        (name: string) => {
            return (
                <option key={name} value={name}>
                    {name}
                </option>
            );
        }
    );
    return (
        <div>
            <Form.Group controlId="customerSelected">
                <Form.Label>Select Customer:</Form.Label>
                <Form.Select
                    value={currentSelectedCustomer}
                    onChange={updateSelectedCustomer}
                >
                    {[
                        <option
                            key={"Select Customer:"}
                            value={"Select Customer:"}
                        >
                            {"Select Customer:"}
                        </option>,
                        ...customerNames
                    ]}
                </Form.Select>
            </Form.Group>
        </div>
    );
}
