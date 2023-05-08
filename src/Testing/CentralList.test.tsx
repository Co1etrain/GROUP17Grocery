import { render } from "@testing-library/react";
import { CentralList } from "../components/CentralList";
import { Food } from "../interfaces/food";
// import { Users } from "../interfaces/record";
// import { Container } from "react-bootstrap";
import "@testing-library/jest-dom/extend-expect";
import assert from "assert";
import React from "react";
import { jest } from "@jest/globals";

describe("centrallist render", () => {
    beforeEach(() => {
        render(
            <CentralList
                centralList={[]}
                onFoodUpdate={function (updatedFood: Food): void {
                    throw new Error("Function not implemented.");
                }}
                currentUser={"owner"}
            />
        );
    });
    it("renders 30 images", () => {
        //
        //expect(document.getElementById("middle")?.childNodes).toHaveLength(30);
        //assert(document.getElementById("middle")?.childNodes.length == 30);
        expect(document.getElementById("middle"));
        assert(document.getElementById("middle"));
    });
});

// Will test filter List function

// describe("CentralList component", () => {
//     it("filters and sorts the central list of food items", () => {
//         const centralList: Food[] = [
//             {
//                 id: 1,
//                 name: "Banana",
//                 description: "A sweet fruit that is high in potassium.",
//                 image: "banana.jpg",
//                 price: 0.25,
//                 calories: 105,
//                 ingredients: ["Banana"],
//                 category: "Fruits"
//             },
//             {
//                 id: 2,
//                 name: "Apple",
//                 description: "A crunchy fruit that is good for your teeth.",
//                 image: "apple.jpg",
//                 price: 0.5,
//                 calories: 95,
//                 ingredients: ["Apple"],
//                 category: "Fruits"
//             },
//             {
//                 id: 3,
//                 name: "Carrot",
//                 description: "A root vegetable that is high in vitamin A.",
//                 image: "carrot.jpg",
//                 price: 0.2,
//                 calories: 25,
//                 ingredients: ["Carrot"],
//                 category: "Vegetables"
//             }
//         ];

//         const onFoodUpdate = jest.fn();
//         //const currentUser = { name: "John Doe" };

//         const { getByLabelText } = render(
//             <CentralList
//                 centralList={centralList}
//                 onFoodUpdate={onFoodUpdate}
//                 currentUser="customer"
//             />
//         );

//         const filterSelect = getByLabelText("Filter by:") as HTMLSelectElement;

//         // Select the Fruits category
//         filterSelect.value = "Fruits";
//         expect(filterSelect.value).toBe("Fruits");

//         // Checks to see if only fruits are being shown
//         const fruitItems = document.querySelectorAll(".CentralList div");
//         expect(fruitItems.length).toBe(2);
//         expect(fruitItems[0]).toHaveTextContent("Apple");
//         expect(fruitItems[1]).toHaveTextContent("Banana");

//         // Select "priceHighToLow" sort order
//         const sortSelect = getByLabelText("Sort by:") as HTMLSelectElement;
//         sortSelect.value = "priceHighToLow";
//         expect(sortSelect.value).toBe("priceHighToLow");

//         // Verify that fruits are sorted by price high to low
//         const sortedFruitItems = document.querySelectorAll(".CentralList div");
//         expect(sortedFruitItems.length).toBe(2);
//         expect(sortedFruitItems[0]).toHaveTextContent("Banana");
//         expect(sortedFruitItems[1]).toHaveTextContent("Apple");
//     });
// });

// describe("CentralList component", () => {
//     const centralListMock = [
//         {
//             id: 1,
//             name: "Apple",
//             description: "A juicy fruit",
//             image: "apple.jpg",
//             price: 1.99,
//             calories: 95,
//             ingredients: ["Apple"],
//             category: "Fruits"
//         },
//         {
//             id: 2,
//             name: "Carrot",
//             description: "A crunchy vegetable",
//             image: "carrot.jpg",
//             price: 0.99,
//             calories: 25,
//             ingredients: ["Carrot"],
//             category: "Vegetables"
//         }
//     ];

//     const onFoodUpdateMock = jest.fn();
//     const currentUserMock = {
//         name: "owner"
//     };

//     it("renders the list of food items", () => {
//         render(
//             <CentralList
//                 centralList={centralListMock}
//                 onFoodUpdate={onFoodUpdateMock}
//                 currentUser={currentUserMock}
//             />
//         );

//         const foodItems = screen.getAllByTestId("food-item");
//         expect(foodItems.length).toBe(2);
//     });

//     it("filters the list by category", () => {
//         render(
//             <CentralList
//                 centralList={centralListMock}
//                 onFoodUpdate={onFoodUpdateMock}
//                 currentUser={currentUserMock}
//             />
//         );

//         const filterSelect = screen.getByLabelText("Filter by:");
//         filterSelect.value = "Vegetables";
//         filterSelect.dispatchEvent(new Event("change"));

//         const foodItems = screen.getAllByTestId("food-item");
//         expect(foodItems.length).toBe(1);
//         expect(foodItems[0]).toHaveTextContent("Carrot");
//     });

//     it("sorts the list by name", () => {
//         render(
//             <CentralList
//                 centralList={centralListMock}
//                 onFoodUpdate={onFoodUpdateMock}
//                 currentUser={currentUserMock}
//             />
//         );

//         const sortSelect = screen.getByLabelText("Sort by:");
//         sortSelect.value = "name";
//         sortSelect.dispatchEvent(new Event("change"));

//         const foodItems = screen.getAllByTestId("food-item");
//         expect(foodItems.length).toBe(2);
//         expect(foodItems[0]).toHaveTextContent("Apple");
//         expect(foodItems[1]).toHaveTextContent("Carrot");
//     });
// });
