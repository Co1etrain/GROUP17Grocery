import React, { useState } from "react";
import { Food } from "../interfaces/food";
import { FoodItem } from "./FoodItem";
import "../App.css";
import { useDrop } from "react-dnd";
import { Form } from "react-bootstrap";
import { User } from "../interfaces/user";

interface CartProps {
    customerList: Food[];
    centralList: Food[];
    currentUser: User;
    updateUserList: (newList: Food[]) => void;
    foodId: number;
    setFoodId: (newFoodId: number) => void;
}

export function CustomerCart({
    customerList,
    centralList,
    currentUser,
    updateUserList,
    foodId,
    setFoodId
}: CartProps): JSX.Element {
    const [totalPrice, setTotalPrice] = useState<number>(0);
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
                { ...droppedFood, id: foodId }
            ];
            setFoodId(foodId + 1);
            // Closure from Store.tsx passed in as props
            updateUserList(newCustomerList);

            setTotalPrice(totalPrice + droppedFood.price);
        }
        console.log(customerList);
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

    return (
        <div style={{ paddingTop: "15px" }}>
            <h2>
                {currentUser.role === "customer"
                    ? currentUser.name
                    : "No One" + "'s"}{" "}
                Cart
            </h2>
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
                            showEditButton={false}
                            currentUser={currentUser}
                        ></FoodItem>
                    );
                })}
            </div>
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
            <div style={{ display: "flex" }}>
                <Form.Group controlId="sortOptions">
                    <Form.Label>Sort by:</Form.Label>
                    <Form.Select value={sort} onChange={handleSortChange}>
                        <option value="name">Name</option>
                        <option value="priceLowToHigh">
                            Price Low to High
                        </option>
                        <option value="priceHighToLow">
                            Price High to Low
                        </option>
                    </Form.Select>
                    <Form.Label>Filter by (Exclude):</Form.Label>
                    <Form.Select value={filter} onChange={handleFilterChange}>
                        <option value="All">None</option>
                        <option value="Fruits">Fruits</option>
                        <option value="Vegetables">Vegetables</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Other">Other</option>
                    </Form.Select>
                </Form.Group>
                <h3>Total price: {totalPrice.toFixed(2)}</h3>
            </div>
        </div>
    );
}
