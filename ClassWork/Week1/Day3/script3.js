// let musics = ["Eiffel 65 - Blue", "Linkin Park - Numb", "Beatles - Revolver"]

// musics.push(2)
// console.log(musics)

// // -ACTIVITY 1-
// let movies = ["Lord of the Rings","Joker","Batman"]
// movies.push("Frozen","Dune")
// console.log(movies)
// movies.pop()
// console.log(movies)


// // - ACTIVITY 2-
// const number = [4, 9, 16, 25]
// const newArr = number.map(Math.sqrt) // .map applies changes to all the entries within the array, in this case, it will square root all the values, it does not make modifications to the one it modifies
// console.log(newArr)

// const fruits = ["Bannana", "Orange", "Apple", "Mango"]
// fruits.shift() // removes the first value in the array
// console.log(fruits)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift("Lemon","Pineapple"); // unshift adds the values specified to the begining on the array in the order you put it here
// console.log(fruits)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi"); // adds the to values at position 2, removes no values because of the 0, if it was 2, it will remvoe two values after the ones I put in
// console.log(fruits)

// let drinks = ["Water","Fanta","Sprite","Cola"]

// for (let drinkArrayIndex = 0; drinkArrayIndex < drinks.length; drinkArrayIndex++) 
// {
//     console.log(drinks[drinkArrayIndex])
// }


// let multiplesTwo =[]

// for(let i = 0; i <= 20; i++)
// {
//     if (i % 2 == 0)
//     {
//         multiplesTwo.push(i)
//     }
// }
// console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}.`)


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