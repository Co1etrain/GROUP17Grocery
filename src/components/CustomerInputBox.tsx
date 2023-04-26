import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { CustomersRecord } from "../interfaces/record";
import { Food } from "../interfaces/food";
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

    function editCustomers(
        { addCustomerName, currentRecord }: customerRecordProps,
        name: string
    ): void {
        addCustomerName({
            ...currentRecord,
            [name]: []
        });
    }

    return (
        <div>
            <Form.Group controlId="formCustomerName">
                <Form.Label>Name:</Form.Label>
                <Form.Control onChange={updateCustomerName} />
            </Form.Group>
            <Button
                onClick={() =>
                    editCustomers(
                        {
                            addCustomerName: addCustomerName,
                            currentRecord: currentRecord
                        },
                        customerName
                    )
                }
            >
                MESS
            </Button>
        </div>
    );
}
