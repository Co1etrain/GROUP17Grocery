import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { CustomersRecord } from "../interfaces/record";
import { Food } from "../interfaces/food";

interface customerRecordProps {
    addCustomerName: (record: CustomersRecord) => void;
    currentRecord: CustomersRecord;
    setSelectedCustomer: (customerName: string) => void;
    selectedCustomer: string;
    setCustomerList: (newList: Food[]) => void;
}

export function TextField({
    addCustomerName,
    currentRecord,
    setSelectedCustomer,
    selectedCustomer,
    setCustomerList
}: customerRecordProps): JSX.Element {
    const [customerName, setCustomerName] = useState<string>("");

    function updateCustomerName(event: React.ChangeEvent<HTMLInputElement>) {
        setCustomerName(event.target.value);
    }

    function editCustomers(name: string): void {
        addCustomerName({
            ...currentRecord,
            [name]: []
        });
    }

    function removeCustomers(givenCustomer: string): void {
        const newCustomers: CustomersRecord = currentRecord;
        addCustomerName({ ...currentRecord });
        delete newCustomers[givenCustomer];
        addCustomerName({ ...newCustomers });
        setSelectedCustomer("NO ONE");
        setCustomerList([]);
    }

    return (
        <div style={{ marginRight: "20px" }}>
            <Form.Group controlId="formCustomerName">
                <Form.Label>Type Name Here:</Form.Label>
                <Form.Control onChange={updateCustomerName} />
            </Form.Group>
            <Button
                className="m-3"
                size="sm"
                onClick={() => editCustomers(customerName)}
            >
                Add Customer Name
            </Button>
            <Button
                className="m-3"
                size="sm"
                onClick={() => removeCustomers(selectedCustomer)}
            >
                Remove Customer Name
            </Button>
        </div>
    );
}
