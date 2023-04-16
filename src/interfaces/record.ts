export interface Users {
    person: "owner" | "employee" | "customer";
}
export const userLookup: Record<string, Array<string>> = {
    owner: [""],
    employee: [""],
    customer: [""]
};
