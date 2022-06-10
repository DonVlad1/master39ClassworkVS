
//What is an array?


//Why it's used?


//What can we do with them?



// For example:
// deskParts.splice (6, 0, "Headphones", "Speakers");
// The first number is a the position in the array you want to insert your new value
// The second number is how many values in the array is replaced 



// The slice method cuts out a piece of an array and returns as a new array.

// For example:
// let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// let citrus = fruits.slice(1, 3); The first to second number selects elements from the start argument up to (but not including) the end argument




//Examples

//Number Array

// let multiplesTwo = []

// for(let i = 0; i <= 20; i++)
// {
//     if (i % 2 == 0)
//     {
//         multiplesTwo.push(i) 
//     }
// }
// console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}.`)


 //String Array - Mohammed

let drinks = [
    "Coffee",
    "Tea",
    "Water",
    "Orange Juice",
    "Fanta",
    "Sparkling Water"
]

let i = 0
while (i < drinks.length)
{
    console.log(drinks[i])
    i++
}
