import { Food } from "./food";

export interface User {
    name: string;
    foodList: Food[];
    role: "owner" | "employee" | "customer";
}

export type CustomersRecord = Record<string, Food[]>;
