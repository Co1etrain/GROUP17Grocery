import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

interface Name {
    name: string[];
}
type NameRecord = Record<string, Name>;

const INITIAL_NAMES: NameRecord = {
    customer1: {
        name: ["food", "other"]
    }
};

export function GetNames(): JSX.Element {
    const [names, setNames] = useState<NameRecord>(INITIAL_NAMES);

    function editNames(givenName: string, food: string[]): void {
        setNames({
            ...names,
            [givenName]: {
                name: food
            }
        });
    }
    function removeNames(givenName: string): void {
        const newNames: NameRecord = names;
        setNames({ ...names });
        delete newNames[givenName];
        setNames({ ...newNames });
    }
    console.log("DEBUG");
    console.log(Object.entries(names));
    return (
        <div>
            {
                <Button onClick={() => editNames("JOHN", ["PIZZA", "STUFF"])}>
                    In1
                </Button>
            }
            {<Button onClick={() => removeNames("JOHN")}>In2</Button>}
        </div>
    );
}
