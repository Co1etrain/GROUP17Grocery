import { Food } from "./food";

export interface User {
    name: string;
    foodList: Food[];
    role: "owner" | "employee" | "customer";
}
