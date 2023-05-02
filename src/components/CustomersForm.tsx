import React from "react";
import { Form } from "react-bootstrap";
import { CustomersRecord } from "../interfaces/record";
import { Food } from "../interfaces/food";

interface customerProps {
    setSelectedCustomer: (customerName: string) => void;
    currentSelectedCustomer: string;
    currentRecord: CustomersRecord;
    setCustomerList: (newList: Food[]) => void;
}

export function DisplayCustomerNames({
    setSelectedCustomer,
    currentSelectedCustomer,
    currentRecord,
    setCustomerList
}: customerProps): JSX.Element {
    function updateSelectedCustomer(
        event: React.ChangeEvent<HTMLSelectElement>
    ): void {
        if (event.target.value !== "Select Customer:") {
            setSelectedCustomer(event.target.value);
            setCustomerList(currentRecord[event.target.value]);
        }
    }
    const customerNames: JSX.Element[] = Object.keys(currentRecord).map(
        (name: string) => {
            return (
                <option key={name} value={name}>
                    {name}
                </option>
            );
        }
    );
    return (
        <div style={{ marginRight: "20px" }}>
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
