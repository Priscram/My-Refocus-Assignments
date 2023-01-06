let str = "\u20B1";
const menu = {
    "restaurantName": "Balong Restaurant",
    "dishes": [{
            "dishID": 1,
            "dishName": "Pinakbit",
            "dishPrice": 80,
            "ingredients": ["kalabasa", "talong", "okra", "piniritong isda", "coconut oil", "paminta", "siling labuyo"]

        },
        {
            "dishID": 2,
            "dishName": "Paksiw",
            "dishPrice": 50,
            "ingredients": ["isda", "talong", "kamatis", "okra", "bawang", "patis", "suka"]

        },
        {
            "dishID": 3,
            "dishName": "Tinolang Manok",
            "dishPrice": 120,
            "ingredients": ["chicken meat", "ginger", "onion", "garlic", "soy sauce", "lemon grass"]

        }
    ],

    "displayRestaurantName": function() {
        console.log(this.restaurantName);
    },
    "displayMenu": function() {
        // for (element of this.dishes) {
        //    console.log(element);
        //}

        console.log(`${this.dishes[0].dishName}, ${str} ${this.dishes[0].dishPrice} 
        Contains ${this.dishes[0].ingredients.join(', ')}`);
        console.log(`${this.dishes[1].dishName}, ${str} ${this.dishes[1].dishPrice} 
        Contains ${this.dishes[1].ingredients.join(', ')}`);
        console.log(`${this.dishes[2].dishName}, ${str} ${this.dishes[2].dishPrice} 
        Contains ${this.dishes[2].ingredients.join(', ')}`);

    }
}

menu.displayRestaurantName();
menu.displayMenu();