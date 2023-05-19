import React, { useState } from "react";
import { Food } from "../interfaces/food";
import { FoodItem } from "./FoodItem";
import "../App.css";
import { useDrop } from "react-dnd";
import { Col, Form, Row } from "react-bootstrap";
import { User } from "../interfaces/user";

interface CartProps {
    customerList: Food[];
    centralList: Food[];
    currentUser: User;
    updateUserList: (newList: Food[]) => void;
    foodId: number;
    setFoodId: (newFoodId: number) => void;
    updateNumberOfAppearances: (givenFood: Food, isAdding: boolean) => void;
}

export function CustomerCart({
    customerList,
    centralList,
    currentUser,
    updateUserList,
    foodId,
    setFoodId,
    updateNumberOfAppearances
}: CartProps): JSX.Element {
    const [{ isOver }, drop] = useDrop({
        accept: "food",
        drop: (item: Food) => addFoodToCart(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    });
    const [searchText, setSearchText] = useState("");
    const [sort, setSort] = useState<string>("name");
    const [filter, setFilter] = useState<string>("None");

    function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
        const searchValue = event.target.value;
        setSearchText(searchValue);
    }

    function filterFoodByIngredients(food: Food): boolean {
        if (!searchText) return true;

        return food.ingredients.some((ingredient) =>
            ingredient.toLowerCase().includes(searchText.toLowerCase())
        );
    }

    /*
    Closure which handles receiving a dropped food item and inserting it into the respective user's
    food list
    */
    function addFoodToCart(id: number) {
        const droppedFood: Food | undefined = centralList.find(
            (food: Food) => food.id === id
        );
        if (droppedFood) {
            // Deep copy of current customer list, plus new dropped food item with unique ID
            const newCustomerList: Food[] = [
                ...customerList.map((food: Food) => ({
                    ...food,
                    ingredients: [...food.ingredients]
                })),
                {
                    ...droppedFood,
                    id: foodId
                }
            ];
            setFoodId(foodId + 1);
            // Closure from Store.tsx passed in as props
            updateUserList(newCustomerList);
            // Update how many times the dropped food appears in users' lists
            updateNumberOfAppearances(droppedFood, true);
        }
    }

    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSort(event.target.value);
    };

    const handleFilterChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setFilter(event.target.value);
    };

    const filteredList = customerList
        .filter((food) => filter === "None" || food.category !== filter)
        .filter(filterFoodByIngredients)
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

    function updateRating(updatedFood: Food) {
        const updatedFoodIndex: number = customerList.findIndex(
            (food: Food) => food.id === updatedFood.id
        );

        const updatedCustomerList: Food[] = [
            ...customerList.map((food: Food) => ({
                ...food,
                ingredients: [...food.ingredients]
            }))
        ];

        updatedCustomerList.splice(updatedFoodIndex, 1, {
            ...updatedFood,
            ingredients: [...updatedFood.ingredients]
        });

        updateUserList(updatedCustomerList);
    }

    return (
        <div
            style={{ paddingTop: "15px" }}
            hidden={currentUser.role !== "customer"}
        >
            <h2>
                {currentUser.role === "customer"
                    ? currentUser.name + "'s"
                    : "No one" + "'s"}{" "}
                Cart
            </h2>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Form.Group controlId="sortOptions">
                    <Row>
                        <Col>
                            <Form.Label>Sort by:</Form.Label>
                            <Form.Select
                                value={sort}
                                onChange={handleSortChange}
                            >
                                <option value="name">Name</option>
                                <option value="priceLowToHigh">
                                    Price Low to High
                                </option>
                                <option value="priceHighToLow">
                                    Price High to Low
                                </option>
                            </Form.Select>
                        </Col>
                        <Col>
                            <Form.Label>Filter by (Exclude):</Form.Label>
                            <Form.Select
                                value={filter}
                                onChange={handleFilterChange}
                            >
                                <option value="All">None</option>
                                <option value="Fruits">Fruits</option>
                                <option value="Vegetables">Vegetables</option>
                                <option value="Dairy">Dairy</option>
                                <option value="Snacks">Snacks</option>
                                <option value="Other">Other</option>
                            </Form.Select>
                        </Col>
                    </Row>
                    <p style={{ margin: "10px" }}></p>
                    <input
                        type="text"
                        placeholder="Search Ingredients"
                        value={searchText}
                        onChange={handleSearch}
                        style={{
                            width: "100%",
                            marginBottom: "10px"
                        }}
                    />
                </Form.Group>
            </div>
            <div
                // If the user is not a customer, then the cart is not droppable
                ref={currentUser.role === "customer" ? drop : undefined}
                className="Cart"
                style={{
                    backgroundColor: isOver ? "MediumSeaGreen" : "white"
                }}
            >
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
                            ingredients={[...food.ingredients]}
                            category={food.category}
                            appearances={food.appearances}
                            rating={food.rating}
                            onFoodUpdate={updateRating}
                            showEditButton={false}
                            showAppearances={false}
                            showRating={true}
                            currentUser={currentUser}
                        ></FoodItem>
                    );
                })}
            </div>
        </div>
    );
}
