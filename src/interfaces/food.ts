export interface Food {
    name: string;
    description: string;
    image: string;
    price: number;
    calories: number;
    ingredients: string[];
}

export const FOOD_LIST: Food[] = [
    //1
    {
        name: "Apples",
        description: "All organic Non-GMO Apples",
        image: "idk",
        price: 2.2,
        calories: 95,
        ingredients: ["Apples"]
    },
    //2
    {
        name: "Whole Wheat Bread",
        description: "Freshly Made Farmer Market Bread",
        image: "idk",
        price: 5.0,
        calories: 92,
        ingredients: ["Water", "Flour", "Salt", "egg", "Yeast"]
    },
    //3
    {
        name: "Peanut Butter",
        description: "Easy Spread PeanutButter",
        image: "idk",
        price: 6.25,
        calories: 80,
        ingredients: ["Peanut", "Water"]
    },
    //4
    {
        name: "Chocolate Chip Cookies",
        description: "Freshly made Nestle Chip Cookies",
        image: "idk",
        price: 7.5,
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
        calories: 105,
        ingredients: ["Banana"]
    },
    //6
    {
        name: "Hummus",
        description: "Spicy Hummus",
        image: "idk",
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
        ]
    },
    //7
    {
        name: "BlueBerry Yogurt",
        description: "",
        image: "idk",
        price: 2.5,
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
        calories: 100,
        ingredients: ["Banana"]
    },
    //9
    {
        name: "Lemon Lime Soda",
        description: "Savory taste of the Lemon",
        image: "idk",
        price: 3.75,
        calories: 145,
        ingredients: ["Lemon", "Lime", "Club Soda", "Sugar"]
    },
    //10
    {
        name: "Slighty Salted Cracker",
        description: "Crisp Salted Cracker, 20 Crackers",
        image: "idk",
        price: 5.65,
        calories: 105,
        ingredients: [
            "Flour",
            "Butter",
            "Salted",
            "Water",
            "Baking Powder",
            "Whole Milk"
        ]
    },

    //11
    {
        name: "Peanut Chunk Chocolate",
        description: "Savory taste of Peanuts with chocolate",
        image: "idk",
        price: 4.1,
        calories: 200,
        ingredients: ["Sugar, Flour, Peanuts, cocoa "]
    },
    //12
    {
        name: "Potato Chips",
        description: "Crisy Chips",
        image: "idk",
        price: 4.75,
        calories: 60,
        ingredients: ["Potato, Salt"]
    },
    //13
    {
        name: "Oreo's",
        description: "Creamy cookies",
        image: "idk",
        price: 6.12,
        calories: 75,
        ingredients: ["Sugar, Cream filling, Chocolate"]
    },
    //14
    {
        name: "FairLife Protien, Chocolate",
        description: "30 grams of pure isloate Protien per bottle. 18 Bottles",
        image: "idk",
        price: 30.5,
        calories: 150,
        ingredients: ["Whey Protien, Chocolate, Milk"]
    },
    //15
    //Make category vegan?
    {
        name: "Pea Protien",
        description: "50 grams of pure isloate Protien per Scoop",
        image: "idk",
        price: 55.8,
        calories: 200,
        ingredients: ["Pea Whey Protien, Chocolate, Milk"]
    },
    //16
    {
        name: "Rice Cakes",
        description: "Crispy Rice Cakes with hint of honey",
        image: "idk",
        price: 12.25,
        calories: 80,
        ingredients: ["Rice, Honey, Salt"]
    },
    //17
    {
        name: "FairLife Protien, Chocolate",
        description: "30 grams of pure isloate Protien",
        image: "idk",
        price: 30.5,
        calories: 150,
        ingredients: ["Whey Protien, Chocolate, Milk"]
    },
    //18
    {
        name: "Olive Oil",
        description: "Fresh cooking olive oil",
        image: "idk",
        price: 7.85,
        calories: 150,
        ingredients: ["Whey Protien, Chocolate, Milk"]
    },
    //19
    {
        name: "Granola Bars",
        description: "Crispy valley oats Granola",
        image: "idk",
        price: 10.3,
        calories: 250,
        ingredients: ["Granola, Sugar, Honey"]
    },
    //20
    {
        name: "PopCorn",
        description: "Buttery PopCorn",
        image: "idk",
        price: 30.5,
        calories: 150,
        ingredients: ["Corn, Butter, preservatives"]
    },
    //21
    {
        name: "Eggs",
        description: "Delicious chicken eggs",
        image: "idk",
        price: 5.5,
        calories: 120,
        ingredients: ["Eggs"]
    },
    //22
    {
        name: "Tomatos",
        description: "Delicious sweet red tomatos",
        image: "idk",
        price: 5.45,
        calories: 100,
        ingredients: ["Tomato"]
    },
    //23
    {
        name: "Lemon",
        description: "Delicious",
        image: "idk",
        price: 5.45,
        calories: 20,
        ingredients: ["Lemon"]
    },
    //24
    {
        name: "Celery",
        description: "Nice low-calorie snack",
        image: "idk",
        price: 2.15,
        calories: 10,
        ingredients: ["Celery"]
    },
    //25
    {
        name: "Strawberries",
        description: "Sweet and juicy snack",
        image: "idk",
        price: 3.45,
        calories: 100,
        ingredients: ["Strawberry"]
    },
    //25
    {
        name: "Ribeye Steak",
        description: "High-quality savory cut of meat",
        image: "idk",
        price: 50.95,
        calories: 500,
        ingredients: ["Strawberry"]
    },
    //27
    {
        name: "Pizza",
        description: "Delicious frozen pizza",
        image: "idk",
        price: 7.25,
        calories: 1000,
        ingredients: ["Bread, Tomato Sauce, Cheese, Pepperoni"]
    },
    //28
    {
        name: "Black Beans",
        description: "Popular Latin American cuisine",
        image: "idk",
        price: 3.95,
        calories: 200,
        ingredients: ["Beans, Water, Salt"]
    },
    //29
    {
        name: "Ground Beef",
        description: "Savory dish, 100% beef",
        image: "idk",
        price: 17.15,
        calories: 300,
        ingredients: ["Beef, Salt, Pepper"]
    },
    //30
    {
        name: "Cheese",
        description: "Tasty cheese",
        image: "idk",
        price: 5.85,
        calories: 275,
        ingredients: ["Milk, Salt, Cheese"]
    }
];
