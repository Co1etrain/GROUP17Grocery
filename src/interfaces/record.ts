import { Food } from "./food";
export interface Users {
    person: "owner" | "employee" | "customer";
}
type CustomerCartRecord = Record<string, Food>;
