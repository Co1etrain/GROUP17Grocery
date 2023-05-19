import React from "react";
import { Form } from "react-bootstrap";

interface RatingProps {
    rating: string;
    setRating: (newRating: string) => void;
}

export function RatingForm({ rating, setRating }: RatingProps): JSX.Element {
    return (
        <div>
            Rating:
            <br />
            <Form.Check
                inline
                type="radio"
                name="rating"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setRating(e.target.value)
                }
                id="rating-1"
                label="1"
                value="1"
                checked={rating === "1"}
            />
            <Form.Check
                inline
                type="radio"
                name="rating"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setRating(e.target.value)
                }
                id="rating-2"
                label="2"
                value="2"
                checked={rating === "2"}
            />
            <Form.Check
                inline
                type="radio"
                name="rating"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setRating(e.target.value)
                }
                id="rating-3"
                label="3"
                value="3"
                checked={rating === "3"}
            />
            <Form.Check
                inline
                type="radio"
                name="rating"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setRating(e.target.value)
                }
                id="rating-4"
                label="4"
                value="4"
                checked={rating === "4"}
            />
            <Form.Check
                inline
                type="radio"
                name="rating"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setRating(e.target.value)
                }
                id="rating-5"
                label="5"
                value="5"
                checked={rating === "5"}
            />
        </div>
    );
}
