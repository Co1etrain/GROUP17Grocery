import React, { useState } from "react";
import { FOOD_LIST, Food } from "../interfaces/food";
import { FoodItem } from "./FoodItem";
import "../App.css";
import { useDrop } from "react-dnd";
import { Form } from "react-bootstrap";

interface CartProps {
    customerList: Food[];
    customerName: string;
}

const SORT_OPTIONS = [
    "by Name",
    "by Price low to high",
    "by Price high to low"
];

export function CustomerCart({
    customerList,
    customerName
}: CartProps): JSX.Element {
    const [cartList, setCartList] = useState<Food[]>(customerList);
    const [sortType, setSortType] = useState<string>(SORT_OPTIONS[0]);
    const [{ isOver }, drop] = useDrop({
        accept: "food",
        drop: (item: Food) => addFoodToCart(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    });

    function addFoodToCart(id: number) {
        const droppedFood: Food | undefined = FOOD_LIST.find(
            (food: Food) => food.id === id
        );
        if (droppedFood && !cartList.some((food: Food) => id === food.id)) {
            setCartList([...cartList, droppedFood]);
        }
    }

    function updateSortType(event: React.ChangeEvent<HTMLSelectElement>) {
        setSortType(event.target.value);
    }

    return (
        <div>
            <h2>{customerName + "'s"} Cart</h2>

            <div
                ref={drop}
                className="Cart"
                style={{
                    backgroundColor: isOver ? "MediumSeaGreen" : "white"
                }}
            >
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
                {cartList
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
        </div>
    );
}
