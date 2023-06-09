import React from "react";
import { Form, Button } from "react-bootstrap";

interface RatingProps {
    handleUpdate: (event: React.FormEvent) => void;
    rating: string;
    setRating: (newRating: string) => void;
}

export function RatingForm({
    handleUpdate,
    rating,
    setRating
}: RatingProps): JSX.Element {
    function updateRating(event: React.ChangeEvent<HTMLInputElement>) {
        if (
            parseInt(event.target.value) >= 1 &&
            parseInt(event.target.value) <= 5
        ) {
            setRating(event.target.value);
        }
    }

    return (
        <div>
            <Form onSubmit={handleUpdate}>
                <Form.Group>
                    <Form.Label>Rate 1-5: </Form.Label>
                    <Form.Control
                        type="number"
                        value={rating}
                        onChange={updateRating}
                    />
                </Form.Group>
                <Button type="submit">Rate</Button>
            </Form>
        </div>
    );
}
