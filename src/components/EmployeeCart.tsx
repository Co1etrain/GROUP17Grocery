import React from "react";
import { Food } from "../interfaces/food";
import { FoodItem } from "./FoodItem";
import "../App.css";
import { useDrop } from "react-dnd";
import { User } from "../interfaces/user";

interface EmployeeCartProps {
    employeeList: Food[];
    setEmployeeList: (newList: Food[]) => void;
    centralList: Food[];
    onCentralListUpdate: (updatedFood: Food) => void;
    currentUser: User;
}

export function EmployeeCart({
    employeeList,
    setEmployeeList,
    centralList,
    onCentralListUpdate,
    currentUser
}: EmployeeCartProps): JSX.Element {
    const [{ isOver }, drop] = useDrop({
        accept: "food",
        drop: (item: Food) => addFoodToCart(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    });

    function addFoodToCart(id: number) {
        const droppedFood: Food[] = centralList.filter(
            (food: Food) => food.id === id
        );

        if (employeeList.find((food: Food) => id === food.id) === undefined) {
            const newEmployeeList: Food[] = employeeList.map((food: Food) => ({
                ...food,
                Ingredients: [...food.ingredients]
            }));
            setEmployeeList([...newEmployeeList, droppedFood[0]]);
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
        <div
            style={{ paddingTop: "15px" }}
            hidden={currentUser.role === "customer"}
        >
            <h2>Employee Cart</h2>
            <div
                ref={currentUser.role !== "customer" ? drop : undefined}
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
                            ingredients={[...food.ingredients]}
                            category={food.category}
                            onFoodUpdate={handleFoodUpdate}
                            showEditButton={true}
                            currentUser={currentUser}
                            showRating={false}
                            ratings={food.ratings}
                        ></FoodItem>
                    );
                })}
            </div>
        </div>
    );
}
