//--- ACTITIVTY 1 ---

// let age = "18";
// let country = "UK";

// if ((age > 17) && country == "UK")
// {
//     console.log("Yes, I can serve you")
// }
// else
// {
//     console.log("You aren't old enough")
// }


// //--- ACTIVITY 2 ---

// let pizzaTopping = ""

// switch (pizzaTopping) {

//     case cheese:
//         console.log("These are important ingredients for my pizza.")
//         break;

//     case tomato:
//         console.log("These are important ingredients for my pizza.")
//         break;  

//     case peperoni:
//         console.log(`I don't mind having ${pizzaTopping} on my pizza`)
//         break;

//     case bbqSauce:
//         console.log(`${pizzaTopping}should not be on a pizza`)
//         break;  
        
//     default:
//         break;
// }\

// ///----ACITIVITY 3 ----

// let password = "password"

// if (password.length < 8) 
// {
//     console.log("Password Too short, it needs to be at least 8 characters long, please input again")    
// }
// else
// {
//     console.log(password)
// }

// ///---- ACTIVITY 4 ----

// let num = "2"

// if (num % 3 == 0 || num % 5 == 0) 
// {
//     console.log("This number is divisible by 3 or 5")
// }
// else
// {
//     console.log("This number is not divisible by 3 or 5")
// }

///---- Activity 5 ----

// let num = "6"

// if (num % 3 == 0 && num % 5 == 0) 
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



// // ///---- Activity 6 ----

// let num = "1001"

// if ((num.charAt(0) == num.charAt(3)) && (num.charAt(1) == num.charAt(2))) 
// {
// console.log("This number is a palindrome")    
// }
// else
// {
//     console.log("This number is not a palindrome")
// }


/// ---- Acitvity 7 ----

// let time = "8"
// let placeOfWork = "ShoeShop"
// let townOfHome = "Telford"

// if (time == 7) 
// {
//     console.log(`I am in ${townOfHome}`)    
// }
// else if (time == 8)
// {
//     console.log("I'm commuting")
// }
// else if (time == 9)
// {
//     console.log(`I'm at ${placeOfWork}`)
// }
// else
// {
//     console.log("I am unemployed")
// }

///---Activity 8---

let text ="jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
let textLenght = text.length
let lastVowelIndex = 0
console.log(textLenght)

for (let letterIndex = 0; letterIndex < textLenght; letterIndex++) {
    if (text.charAt(letterIndex) ==+ "a" || text.charAt(letterIndex) == "e" || text.charAt(letterIndex) == "i" || text.charAt(letterIndex) == "o" || text.charAt(letterIndex) == "u" )
    {
        lastVowelIndex = letterIndex
    }
}


console.log(`Last vowel index in the string is ${lastVowelIndex}`)


