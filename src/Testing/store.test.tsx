//import { render } from "@testing-library/react";
//import { Food } from "../interfaces/food";
//import React from "react";
//import store from "../pages/Store";
import { FOOD_LIST } from "../interfaces/food";
import "@testing-library/jest-dom/extend-expect";
//import assert from "assert";
//import Store from "../pages/Store";
//import { CentralList } from "../components/CentralList";

// I want to check if it is able to handle 30 images
//1
// has 30 images
describe("Store", () => {
    it("check if 30 images in array", () => {
        const images = FOOD_LIST.filter((food) => food.image !== undefined);
        expect(images).toHaveLength(30);
    });
});
//
