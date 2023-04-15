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
        // Robert did 11-20
    },
    //21
    {
        name: "Peanut Chunk Chocolate",
        description: "Savory taste of Peanuts with chocolate",
        image: "idk",
        price: 4.1,
        rating: 8,
        calories: 200,
        ingredients: ["Sugar, Flour, Peanuts, cocoa "]
    },
    //22
    {
        name: "Potato Chips",
        description: "Crisy Chips",
        image: "idk",
        price: 4.75,
        rating: 2,
        calories: 60,
        ingredients: ["Potato, Salt"]
    },
    //23
    {
        name: "Oreo's",
        description: "Creamy cookies",
        image: "idk",
        price: 6.12,
        rating: 8,
        calories: 75,
        ingredients: ["Sugar, Cream filling, Chocolate"]
    },
    //24
    {
        name: "FairLife Protien, Chocolate",
        description: "30 grams of pure isloate Protien per bottle. 18 Bottles",
        image: "idk",
        price: 30.5,
        rating: 8,
        calories: 150,
        ingredients: ["Whey Protien, Chocolate, Milk"]
    },
    //25
    //Make category vegan?
    {
        name: "Pea Protien",
        description: "50 grams of pure isloate Protien per Scoop",
        image: "idk",
        price: 55.8,
        rating: 9,
        calories: 200,
        ingredients: ["Pea Whey Protien, Chocolate, Milk"]
    },
    //26
    {
        name: "Rice Cakes",
        description: "Crispy Rice Cakes with hint of honey",
        image: "idk",
        price: 12.25,
        rating: 6,
        calories: 80,
        ingredients: ["Rice, Honey, Salt"]
    },
    //27
    {
        name: "FairLife Protien, Chocolate",
        description: "30 grams of pure isloate Protien",
        image: "idk",
        price: 30.5,
        rating: 8,
        calories: 150,
        ingredients: ["Whey Protien, Chocolate, Milk"]
    },
    //28
    {
        name: "Olive Oil",
        description: "Fresh cooking olive oil",
        image: "idk",
        price: 7.85,
        rating: 8,
        calories: 150,
        ingredients: ["Whey Protien, Chocolate, Milk"]
    },
    //29
    {
        name: "Granola Bars",
        description: "Crispy valley oats Granola",
        image: "idk",
        price: 10.3,
        rating: 10,
        calories: 250,
        ingredients: ["Granola, Sugar, Honey"]
    },
    //30
    {
        name: "PopCorn",
        description: "Buttery PopCorn",
        image: "idk",
        price: 30.5,
        rating: 8,
        calories: 150,
        ingredients: ["Corn, Butter, preservatives"]
    }
];
