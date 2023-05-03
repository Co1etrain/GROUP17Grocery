import React, { useState } from "react";
import { Food } from "../interfaces/food";
import { FoodItem } from "./FoodItem";
import "../App.css";
import { useDrop } from "react-dnd";
import { Form } from "react-bootstrap";
import { CustomersRecord, Users } from "../interfaces/user";

interface CartProps {
    customerList: Food[];
    setCustomerList: (newList: Food[]) => void;
    customerName: string;
    currentRecord: CustomersRecord;
    centralList: Food[];
    currentUser: Users["person"];
}

const SORT_OPTIONS = [
    "by Name",
    "by Price low to high",
    "by Price high to low"
];

export function CustomerCart({
    customerList,
    setCustomerList,
    customerName,
    currentRecord,
    centralList,
    currentUser
}: CartProps): JSX.Element {
    const [sortType, setSortType] = useState<string>(SORT_OPTIONS[0]);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [{ isOver }, drop] = useDrop({
        accept: "food",
        drop: (item: Food) => addFoodToCart(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    });

    function addFoodToCart(id: number) {
        const droppedFood: Food | undefined = centralList.find(
            (food: Food) => food.id === id
        );
        if (droppedFood) {
            if (customerName !== "NO ONE") {
                currentRecord[customerName] = [...customerList, droppedFood];
                setCustomerList([...customerList, droppedFood]);
                setTotalPrice(totalPrice + droppedFood.price);
            } else {
                setCustomerList([]);
                setTotalPrice(0.0);
            }
        }
    }

    function updateSortType(event: React.ChangeEvent<HTMLSelectElement>) {
        setSortType(event.target.value);
    }

    return (
        <div style={{ paddingTop: "15px" }}>
            <h2>{customerName + "'s"} Cart</h2>
            <div
                ref={currentUser === "customer" ? drop : undefined}
                className="Cart"
                style={{
                    backgroundColor: isOver ? "MediumSeaGreen" : "white"
                }}
            >
                {customerList
                    .sort((a: Food, b: Food) =>
                        sortType === "by Price low to high"
                            ? a.price - b.price
                            : a.name.localeCompare(b.name)
                    )
                    .map((food: Food) => {
                        return (
                            <FoodItem
                                id={food.id}
                                key={food.id}
                                name={food.name}
                                description={food.description}
                                image={food.image}
                                price={food.price}
                                calories={food.calories}
                                ingredients={[...food.ingredients]}
                                category={food.category}
                                showEditButton={false}
                                currentUser={currentUser}
                            ></FoodItem>
                        );
                    })}
            </div>
            <div style={{ display: "flex" }}>
                <Form.Group controlId="sortOptions">
                    <Form.Label>Sort</Form.Label>
                    <Form.Select value={sortType} onChange={updateSortType}>
                        {SORT_OPTIONS.map((sortOption: string) => {
                            return (
                                <option key={sortOption} value={sortOption}>
                                    {sortOption}
                                </option>
                            );
                        })}
                    </Form.Select>
                </Form.Group>
                <h3>Total price: {totalPrice.toFixed(2)}</h3>
            </div>
        </div>
    );
}
