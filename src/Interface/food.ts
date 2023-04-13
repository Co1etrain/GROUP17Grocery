export interface Food {
    name: string;
    description: string;
    image: string;
    price: number;
    rating: number;
    calories: number;
    ingredients: string[];
}

export const foodList: Food[] = [
    //1
    {
        name: "Apples",
        description: "All organic Non-GMO Apples",
        image: "idk",
        price: 2.2,
        rating: 9,
        calories: 95,
        ingredients: ["Apples"]
    },
    //2
    {
        name: "Whole Wheat Bread",
        description: "Freshly Made Farmer Market Bread",
        image: "idk",
        price: 5.0,
        rating: 7,
        calories: 92,
        ingredients: ["Water", "Flour", "Salt", "egg", "Yeast"]
    },
    //3
    {
        name: "Peanut Butter",
        description: "Easy Spread PeanutButter",
        image: "idk",
        price: 6.25,
        rating: 8,
        calories: 80,
        ingredients: ["Peanut", "Water"]
    }
];
