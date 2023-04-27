import React, { useState } from "react";
import { Food } from "../interfaces/food";
import { FoodItem } from "./FoodItem";
import "../App.css";
//create a button given a name/ form, name of food and create a new central list without the deleted

export function CentralList({
    foodList,
    onFoodUpdate
}: {
    foodList: Food[];
    onFoodUpdate: (updatedFood: Food) => void;
}): JSX.Element {
    const [sort, setSort] = useState<string>("name");
    const [filter, setFilter] = useState<string>("All");

    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSort(event.target.value);
    };

    const handleFilterChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setFilter(event.target.value);
    };

    const filteredList = foodList
        .filter((food) => filter === "All" || food.category === filter)
        .sort((a, b) => {
            if (sort === "name") {
                return a.name.localeCompare(b.name);
            } else if (sort === "priceLowToHigh") {
                return a.price - b.price;
            } else if (sort === "priceHighToLow") {
                return b.price - a.price;
            } else {
                return 0;
            }
        });

    return (
        <div className="CentralList">
            <div>
                <div>
                    <label>Sort by:</label>
                    <select value={sort} onChange={handleSortChange}>
                        <option value="name">Name</option>
                        <option value="priceLowToHigh">
                            Price Low to High
                        </option>
                        <option value="priceHighToLow">
                            Price High to Low
                        </option>
                    </select>
                </div>
                <br></br>
                <div>
                    <label>Filter by:</label>
                    <select value={filter} onChange={handleFilterChange}>
                        <option value="All">All</option>
                        <option value="Fruits">Fruits</option>
                        <option value="Vegetables">Vegetables</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Drinks">Drinks</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div>
            {filteredList.map((food: Food) => {
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
                        onFoodUpdate={onFoodUpdate}
                    ></FoodItem>
                );
            })}
        </div>
    );
}
