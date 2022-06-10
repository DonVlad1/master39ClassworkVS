let order = []

const coffeeShop = {
    branch:"Stockport",
    drinkPrices: { "Tea": 1.20, "Earl Grey Tea": 1.30, "Herbal Tea": 1.40, "Turkish Coffee": 1.50, "Americano": 1.70, "Coffee": 2.00, "Latte": 2.00, "Cappuccino": 2.40, "Hot Chocolate": 2.50, "Mocha": 2.70},
    foodPrices: {"Hot Sandwich": 3.00, "Cold Sandwich": 2.00, "Toastie": 2.00, "Omelette": 3.00, "Jacket Potato": 2.50, "Scone": 1.00, "Tea Cake": 1.30, "Chocolate Fudge Cake": 2.50, "Red Velvet Cake": 2.50, "Carrot Cake": 2.50},

    drinksOrdered(drink1, drink2)
    {
        let drinks = Object.keys(this.drinkPrices)
        let drinkValues = Object.values(this.drinkPrices)

        order.push(drinkValues[drinks.indexOf(drink1)])
        order.push(drinkValues[drinks.indexOf(drink2)])
        return `Drinks you have ordered : ${drink1} and ${drink2}`},
        orderedFood(food1,food2)
        {
            let food = Object.keys(this.foodPrices)
            let foodValues = Object.values(this.foodPrices)
            
            order.push(foodValues[food.indexOf(food1)])
            order.push(foodValues[food.indexOf(food2)])
            return `Food you have ordered : ${food1} and ${food2}`
        }
}

console.log(coffeeShop.drinksOrdered("Tea", "Hot Chocolate"))
console.log(coffeeShop.orderedFood("Toastie", "Red Velvet Cake"))
let totalToPay = 0
for(i = 0; i < order.length;i++){
    totalToPay += order[i]
}

console.log(`Your total bill is £${totalToPay}`)