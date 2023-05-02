import { Food } from "./food";
export interface Users {
    person: "owner" | "employee" | "customer";
}
export type CustomersRecord = Record<string, Food[]>;
