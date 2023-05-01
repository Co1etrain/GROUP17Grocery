import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { CustomersRecord } from "../interfaces/record";

interface customerRecordProps {
    addCustomerName: (record: CustomersRecord) => void;
    currentRecord: CustomersRecord;
}

export function TextField({
    addCustomerName,
    currentRecord
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
    }

    return (
        <div>
            <Form.Group controlId="formCustomerName">
                <Form.Label>Type Name Here:</Form.Label>
                <Form.Control onChange={updateCustomerName} />
            </Form.Group>
            <Button onClick={() => editCustomers(customerName)}>
                Add Customer Name
            </Button>
            <Button onClick={() => removeCustomers(customerName)}>
                Remove Customer Name
            </Button>
        </div>
    );
}
