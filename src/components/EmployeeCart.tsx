import React from "react";
import { FOOD_LIST, Food } from "../interfaces/food";
import { FoodItem } from "./FoodItem";
import "../App.css";
import { useDrop } from "react-dnd";

interface EmployeeCartProps {
    employeeList: Food[];
    setEmployeeList: (newList: Food[]) => void;
    onCentralListUpdate: (updatedFood: Food) => void;
}

export function EmployeeCart({
    employeeList,
    setEmployeeList,
    onCentralListUpdate
}: EmployeeCartProps): JSX.Element {
    const [{ isOver }, drop] = useDrop({
        accept: "food",
        drop: (item: Food) => addFoodToCart(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    });

    function addFoodToCart(id: number) {
        const droppedFood: Food[] = FOOD_LIST.filter(
            (food: Food) => food.id === id
        );
        if (employeeList.find((food: Food) => id === food.id) === undefined) {
            setEmployeeList([...employeeList, droppedFood[0]]);
        }
    }

    function handleFoodUpdate(updatedFood: Food) {
        setEmployeeList(
            employeeList.map((food) =>
                food.id === updatedFood.id ? updatedFood : food
            )
        );
        onCentralListUpdate(updatedFood);
    }

    return (
        <div style={{ paddingTop: "15px" }}>
            <h2>Employee/Manager Cart</h2>
            <div
                ref={drop}
                className="Cart"
                style={{
                    backgroundColor: isOver ? "MediumSeaGreen" : "white"
                }}
            >
                {employeeList.map((food: Food) => {
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
                            onFoodUpdate={handleFoodUpdate}
                            showEditButton={true}
                        ></FoodItem>
                    );
                })}
            </div>
        </div>
    );
}
