export interface Food {
    name: string;
    description: string;
    image: string;
    price: number;
    calories: number;
    ingredients: string[];
    category: string;
}

export const FOOD_LIST: Food[] = [
    //1
    {
        name: "Apples",
        description: "All organic Non-GMO Apples",
        image: "realtive/path/here",
        price: 2.2,
        calories: 95,
        ingredients: ["Apples"],
        category: "Fruit"
    },
    //2
    {
        name: "Whole Wheat Bread",
        description: "Freshly Made Farmer Market Bread",
        image: "realtive/path/here",
        price: 5.0,
        calories: 92,
        ingredients: ["Water", "Flour", "Salt", "egg", "Yeast"],
        category: "Other"
    },
    //3
    {
        name: "Peanut Butter",
        description: "Easy Spread PeanutButter",
        image: "realtive/path/here",
        price: 6.25,
        calories: 80,
        ingredients: ["Peanut", "Water"],
        category: "Other"
    },
    //4
    {
        name: "Chocolate Chip Cookies",
        description: "Freshly made Nestle Chip Cookies",
        image: "realtive/path/here",
        price: 7.5,
        calories: 50,
        ingredients: [
            "Flour",
            "Sugar",
            "Butter",
            "Chocolate",
            "Vanilla Extract"
        ],
        category: "Other"
    },
    //5
    {
        name: "Banana",
        description: "Fresh Bananas",
        image: "realtive/path/here",
        price: 1.5,
        calories: 105,
        ingredients: ["Banana"],
        category: "Fruit"
    },
    //6
    {
        name: "Hummus",
        description: "Spicy Hummus",
        image: "realtive/path/here",
        price: 4.35,
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
        ],
        category: "Other"
    },
    //7
    {
        name: "BlueBerry Yogurt",
        description: "",
        image: "realtive/path/here",
        price: 2.5,
        calories: 105,
        ingredients: [
            "Milk",
            "Live Culture",
            "BlueBerries",
            "Sugar",
            "Pectin",
            "Natural Flavors"
        ],
        category: "Dairy"
    },
    //8
    {
        name: "Broccoli",
        description: "Frozen Pack of Broccoli",
        image: "realtive/path/here",
        price: 3.75,
        calories: 100,
        ingredients: ["Banana"],
        category: "Vegetables"
    },
    //9
    {
        name: "Lemon Lime Soda",
        description: "Savory taste of the Lemon",
        image: "realtive/path/here",
        price: 3.75,
        calories: 145,
        ingredients: ["Lemon", "Lime", "Club Soda", "Sugar"],
        category: "Drinks"
    },
    //10
    {
        name: "Slighty Salted Cracker",
        description: "Crisp Salted Cracker, 20 Crackers",
        image: "realtive/path/here",
        price: 5.65,
        calories: 105,
        ingredients: [
            "Flour",
            "Butter",
            "Salted",
            "Water",
            "Baking Powder",
            "Whole Milk"
        ],
        category: "Snacks"
    },

    //11
    {
        name: "Peanut Chunk Chocolate",
        description: "Savory taste of Peanuts with chocolate",
        image: "realtive/path/here",
        price: 4.1,
        calories: 200,
        ingredients: ["Sugar, Flour, Peanuts, cocoa "],
        category: "Snacks"
    },
    //12
    {
        name: "Potato Chips",
        description: "Crisy Chips",
        image: "realtive/path/here",
        price: 4.75,
        calories: 60,
        ingredients: ["Potato, Salt"],
        category: "Snacks"
    },
    //13
    {
        name: "Oreo's",
        description: "Creamy cookies",
        image: "realtive/path/here",
        price: 6.12,
        calories: 75,
        ingredients: ["Sugar, Cream filling, Chocolate"],
        category: "Snacks"
    },
    //14
    {
        name: "FairLife Protien, Chocolate",
        description: "30 grams of pure isloate Protien per bottle. 18 Bottles",
        image: "realtive/path/here",
        price: 30.5,
        calories: 150,
        ingredients: ["Whey Protien, Chocolate, Milk"],
        category: "Protien"
    },
    //15
    //Make category vegan?
    {
        name: "Pea Protien",
        description: "50 grams of pure isloate Protien per Scoop",
        image: "realtive/path/here",
        price: 55.8,
        calories: 200,
        ingredients: ["Pea Whey Protien, Chocolate, Milk"],
        category: "Protein"
    },
    //16
    {
        name: "Rice Cakes",
        description: "Crispy Rice Cakes with hint of honey",
        image: "realtive/path/here",
        price: 12.25,
        calories: 80,
        ingredients: ["Rice, Honey, Salt"],
        category: "Snacks"
    },
    //17
    {
        name: "Grapes",
        description: "Fresh Farm grapes",
        image: "idk",
        price: 5.2,
        calories: 300,
        ingredients: ["Grapes"],
        category: "Fruits"
    },
    //18
    {
        name: "Olive Oil",
        description: "Fresh cooking olive oil",
        image: "realtive/path/here",
        price: 7.85,
        calories: 150,
        ingredients: ["Whey Protien, Chocolate, Milk"],
        category: "Other"
    },
    //19
    {
        name: "Granola Bars",
        description: "Crispy valley oats Granola",
        image: "realtive/path/here",
        price: 10.3,
        calories: 250,
        ingredients: ["Granola, Sugar, Honey"],
        category: "Snacks"
    },
    //20
    {
        name: "PopCorn",
        description: "Buttery PopCorn",
        image: "realtive/path/here",
        price: 30.5,
        calories: 150,
        ingredients: ["Corn, Butter, preservatives"],
        category: "Snacks"
    },
    //21
    {
        name: "Eggs",
        description: "Delicious chicken eggs",
        image: "realtive/path/here",
        price: 5.5,
        calories: 120,
        ingredients: ["Eggs"],
        category: "Dairy"
    },
    //22
    {
        name: "Tomatos",
        description: "Delicious sweet red tomatos",
        image: "realtive/path/here",
        price: 5.45,
        calories: 100,
        ingredients: ["Tomato"],
        category: "Vegetables"
    },
    //23
    {
        name: "Lemon",
        description: "Delicious",
        image: "realtive/path/here",
        price: 5.45,
        calories: 20,
        ingredients: ["Lemon"],
        category: "Fruits"
    },
    //24
    {
        name: "Celery",
        description: "Nice low-calorie snack",
        image: "realtive/path/here",
        price: 2.15,
        calories: 10,
        ingredients: ["Celery"],
        category: "Vegetables"
    },
    //25
    {
        name: "Strawberries",
        description: "Sweet and juicy snack",
        image: "realtive/path/here",
        price: 3.45,
        calories: 100,
        ingredients: ["Strawberry"],
        category: "Fruits"
    },
    //25
    {
        name: "Ribeye Steak",
        description: "High-quality savory cut of meat",
        image: "realtive/path/here",
        price: 50.95,
        calories: 500,
        ingredients: ["Beef, Salt, Pepper"],
        category: "Meat"
    },
    //27
    {
        name: "Pizza",
        description: "Delicious frozen pizza",
        image: "realtive/path/here",
        price: 7.25,
        calories: 1000,
        ingredients: ["Bread, Tomato Sauce, Cheese, Pepperoni"],
        category: "Frozen"
    },
    //28
    {
        name: "Black Beans",
        description: "Popular Latin American cuisine",
        image: "realtive/path/here",
        price: 3.95,
        calories: 200,
        ingredients: ["Beans, Water, Salt"],
        category: "Vegetables"
    },
    //29
    {
        name: "Ground Beef",
        description: "Savory dish, 100% beef",
        image: "realtive/path/here",
        price: 17.15,
        calories: 300,
        ingredients: ["Beef, Salt, Pepper"],
        category: "Meat"
    },
    //30
    {
        name: "Cheese",
        description: "Tasty cheese",
        image: "realtive/path/here",
        price: 5.85,
        calories: 275,
        ingredients: ["Milk, Salt, Cheese"],
        category: "Dairy"
    }
];
