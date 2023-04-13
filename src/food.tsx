type foodProduct = {
    name: string;
    description: string;
    image: string;
    price: float;
    rating: number;
    calories: number;
    ingredients: string[];
};

export const diffProducts: foodProduct = [
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
        ingredients: ["Peanut", ""]
    },
    //4
    {
        name: "Chocolate Chip Cookies",
        description: "Freshly made Nestle Chip Cookies",
        image: "idk",
        price: 7.5,
        rating: 10,
        calories: 50,
        ingredients: [
            "Flour",
            "Sugar",
            "Butter",
            "Chocolate",
            "Vanilla Extract"
        ]
    },
    //5
    {
        name: "Banana",
        description: "Fresh Bananas",
        image: "idk",
        price: 1.5,
        rating: 7,
        calories: 105,
        ingredients: ["Banana"]
    },
    //6
    {
        name: "Hummus",
        description: "Spicy Hummus",
        image: "idk",
        price: 4.35,
        rating: 9,
        calories: 125,
        ingredients: [
            "Chickpeas",
            "Tahini",
            "Lemon Juice",
            "Olive oil",
            "Garlic",
            "Cumin",
            "Paprika",
            "Cayenne Pepper",
            "Salt",
            "Water",
            "Jalepeno"
        ]
    },
    //7
    {
        name: "BlueBerry Yogurt",
        description: "",
        image: "idk",
        price: 2.5,
        rating: 4,
        calories: 105,
        ingredients: [
            "Milk",
            "Live Culture",
            "BlueBerries",
            "Sugar",
            "Pectin",
            "Natural Flavors"
        ]
    },
    //8
    {
        name: "Broccoli",
        description: "Frozen Pack of Broccoli",
        image: "idk",
        price: 3.75,
        rating: 8,
        calories: 100,
        ingredients: ["Banana"]
    },
    //9
    {
        name: "Lemon Lime Soda",
        description: "Savory taste of the Lemon",
        image: "idk",
        price: 3.75,
        rating: 3,
        calories: 145,
        ingredients: ["Lemon", "Lime", "Club Soda", "Sugar"]
    },
    //10
    {
        name: "Slighty Salted Cracker",
        description: "Crisp Salted Cracker, 20 Crackers",
        image: "idk",
        price: 5.65,
        rating: 7,
        calories: 105,
        ingredients: [
            "Flour",
            "Butter",
            "Salted",
            "Water",
            "Baking Powder",
            "Whole Milk"
        ]
        //11
    }
];
