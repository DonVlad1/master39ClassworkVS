// const pressGrindBeans = () => 
// {
//     console.log("Grinding for 20 seconds")
// }

// for (let index = 0; index < 5; index++) {
//     pressGrindBeans()
// }


// let coffeeIsGrinding= true

// const pressGrindBeans = () => 
// {
//     if (coffeeIsGrinding) 
//     {
//         console.log("Stopping the grind")
//         coffeeIsGrinding = false;
//     }
//     else
//     {
//         console.log("Grinding is about to begin")
//         coffeeIsGrinding = true
//     }
// }

// pressGrindBeans()


// const cashWithdrawal = (amount, accnum) => 
// {
//     console.log(`Withdrawing ${amount} from account ${accnum}`)
// }

// cashWithdrawal(30,50449921)
// cashWithdrawal(30,50449921)
// cashWithdrawal(200,50447921)


// let greeting = (firstName) =>
// {
//     console.log(`Hello ${firstName}`)
// }

// greeting("Vlad")


// const multiplyByNineFifth = (celsius) =>
// {
//     return celsius * (9/5)
// }

// const getFahrenheit = (celsius) =>
// {
//     return multiplyByNineFifth(celsius) + 32
// }

// console.log("The temperature is " + getFahrenheit(15)+ "F")



// const divideByNineFifth = (Fahrenheit) =>
// {
//     return Fahrenheit - 32
// }

// const getCelsius = (Fahrenheit) =>
// {
//     return divideByNineFifth(Fahrenheit) / (9/5)
// }

// console.log("The temperature is " + getCelsius(59)+ "C")


// function square(number)
// {
//     return number * number
// }

// console.log(square(5))


// let sayHello = () =>
// {
//     return "Hello"
// }

// function sayGoodbye()
// {
//     return "GoodBye"
// }

// console.log(sayHello())
// console.log(sayGoodbye())

// function factorial (n)
// {
//     if ((n === 0 ) || (n === 1))
//     {
//         return 1
//     }
//     else
//     {
//         return (n * factorial(n-1))
//     }
// }
// console.log(factorial)

// //---Activity 1---

// const factorial = (n) => 
// {
//     if ((n === 0 ) || (n === 1))
//     {
//         return 1
//     }
//     else
//     {
//         return (n * factorial(n-1))
//     }
// }
// console.log(factorial(33))


// const cafe =
// {
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: [
//         "Cappucino",
//         "Latte",
//         "Filter Coffee",
//         "Tea",
//         "Hot Chocolate"
//     ]
// }



// const person =
// {
//     firstName: "Vlad",
//     lastName: "Stoian",
//     age: 26
// }
// console.log(person["firstName"])


// let offce = "none";
// let time = 0900;

// const cafe =
// {
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: [
//         "Cappucino",
//         "Latte",
//         "Filter Coffee",
//         "Tea",
//         "Hot Chocolate"
//     ],

//     breakfastOffer: "Free croissant with coffee",
//     lunchOffer: "Free drink with suprisingly priced sandwich",
//     noOffer: "Sorry no offer"
// }
// //console.log(cafe)

// if (time <1100)
// {
//     offer = cafe.breakfastOffer;
//     console.log(cafe.breakfastOffer);
// }
// else if (time < 1500)
// {
//     offer = cafe.lunchOffer;
//     console.log(cafe.lunchOffer)
// }

// let day = "Saturday"

// const alarm =
// {
//     weekendAlarm: ["Saturday"],//, "Sunday"],
//     weekdayAlarm: ["Monday"]//, "Tuesday", "Wednesday", "Thursday", "Friday"]
// }

// if (alarm.weekdayAlarm == day) 
// {
//     console.log(`Get up at 7am NAW`)    
// }
// else if (alarm.weekendAlarm == day)
// {
//     console.log("Don't wake up pls")
// }
// else
// {
//     console.log("Fail Alarm")
// }

// let alarmState = true;
// let day = "Monday"

// const alarm =
// {
//     weekendAlarm: "No Alarm needed",
//     weekdayAlarm: "get up at 7am"
// }

// if (day == "Saturday" || day == "Sunday") 
// {
//     alarmState = false;
//     console.log("Don't wake up pls");

// }
// else
// {
//     alarmState = true;
//     console.log("Pls wake up at 7am")
// }


// //--- Activity 1 ---
// const person =
// {
//     firstName: "Vlad",
//     lastName: "Stoian",
//     age: 26,
//     printMyName()
//     {
//         console.log(`Hello my name is ${this.firstName}`)
//     }
// }

// person.printMyName()

// --- Activity 2 ---

// const pet =
// {
//     name:"Muppet",
//     typeOfPet:"Husky",
//     age:"3",
//     colour:"grey",

//     eat()
//     {
//         return console.log(`Your pet ${this.name} is eating.` );
//     },

//     drink()
//     {
//         return console.log(`Your pet ${this.name} is drinking.` );
//     }
// }

// pet.eat();
// pet.drink();

//---Activity 3---

const coffeeShop =
{
    branch:"Telford",
    drinksAndPrice:["Tea", 10,"Fanta", 5,"Sprite", 7],
    foodAndPrice:["Burger", 20,"Sandwhich", 10, "Crisps", 5],

    drinksOrdered()
    {
        let drinksPriceTotal = 0;
        let drinksList = []
        let drinksPriceList = []

        for (let drinksPriceIndex = 1; drinksPriceIndex < this.drinksAndPrice.length; drinksPriceIndex++) 
        {
            drinksPriceTotal += this.drinksAndPrice[drinksPriceIndex]
            drinksPriceIndex += 1
        }

        for (let drinksListIndex = 0; drinksListIndex < this.drinksAndPrice.length; drinksListIndex++) {
            
            drinksList.push(this.drinksAndPrice[drinksListIndex])
            drinksListIndex += 1 
        }

        return [drinksPriceTotal, drinksList, drinksPriceList]

    },

    foodOrdered()
    {
        let foodPriceTotal = 0;
        let foodList = []

        for (let foodPriceIndex = 1; foodPriceIndex < this.foodAndPrice.length; foodPriceIndex++) 
        {
            foodPriceTotal += this.foodAndPrice[foodPriceIndex]
            foodPriceIndex += 1
        }

        for (let foodListIndex = 0; foodListIndex < this.foodAndPrice.length; foodListIndex++) {
            
            foodList.push(this.foodAndPrice[foodListIndex])
            foodListIndex += 1
            
        }

        return [foodPriceTotal, foodList]

    }

}

const completedDrinks = coffeeShop.drinksOrdered()
const completedFood = coffeeShop.foodOrdered()
const orderTotal = completedFood[0] + completedDrinks[0]

//console.log(completedDrinks)

console.log(`Your food order is ${completedFood[1]} and your drinks order is ${completedDrinks[1]} totaling at ${orderTotal}`)






