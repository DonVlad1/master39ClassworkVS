// //---- Activity 5 ----


// let num = "6" 

// if (num % 3 == 0 && num % 5 == 0) // AND comparison, needs to meet both conditions
// {
//     console.log("Fizz Buzz")
// }
// else if (num % 3 == 0)
// {
//     console.log("Fizz")
// }
// else if (num % 5 == 0)
// {
//     console.log("Buzz")
// }



// // --- ACTIVITY 5 ---


// const maxLoops = 6;

// for (let index = 0; index < maxLoops; index++) {

//     let number = 0
//     number = Math.ceil(Math.random() * 30) // Will randomise a number between 0 and 1, round it up with .ceil as we want a number between 1 and 30 not 0 and 30
    
//     if (number % 7 == 0) // Modulus used to calculate remainder, if remainder is 0, it will be divisible
//     {
//         console.log(`${number} is divisible by 7`)
//     }
// }



// // --- ACTIVITY 2 ---


// const maxLoops = 6;

// for (let index = 0; index < maxLoops; index++) {

//     let number = 0
//     number = Math.ceil(Math.random() * 50)
//     console.log(`Number ${number}`)
// }


// --- ACTIVITY 3 ---

// const countDownLimit = 0

// for (let index = 9; index >= countDownLimit; index--) { //index-- will decrement the variable at -1 each time it runs through a loop
//     console.log(`${index} loops remaining`)
// }


// // --- ACITVITY 2 ---

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

// pet.eat(); // calls the eat function within the pet object
// pet.drink(); // calls the drink function within the pet object


// --- ACTIVITY 3 ---

// let password = "passwo"

// if (password.length < 8) 
// {
//     console.log("Password Too short, it needs to be at least 8 characters long, please input again")    
// }
// else
// {
//     console.log(password)
// }



//---- ACTIVITY 4 ----

// let num = "5"

// if (num % 3 == 0 || num % 5 == 0) 
// {
//     console.log("This number is divisible by 3 or 5")
// }
// else
// {
//     console.log("This number is not divisible by 3 or 5")
// }