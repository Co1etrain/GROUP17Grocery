import React, { useState } from "react";
import { Food } from "../interfaces/food";
import { FoodItem } from "./FoodItem";
import "../App.css";
import { useDrop } from "react-dnd";
import { Form } from "react-bootstrap";

interface CartProps {
    customerList: Food[];
    setCustomerList: (newList: Food[]) => void;
    customerName: string;
    centralList: Food[];
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
    centralList
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
        if (droppedFood && !customerList.some((food: Food) => id === food.id)) {
            setCustomerList([...customerList, droppedFood]);
            setTotalPrice(totalPrice + droppedFood.price);
        }
    }

    function updateSortType(event: React.ChangeEvent<HTMLSelectElement>) {
        setSortType(event.target.value);
    }

    return (
        <div style={{ paddingTop: "15px" }}>
            <h2>{customerName + "'s"} Cart</h2>
            <div
                ref={drop}
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
                                ingredients={food.ingredients}
                                category={food.category}
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
