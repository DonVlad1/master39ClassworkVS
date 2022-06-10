// let number = 6
// let number2 = 10
// let result = 0

// result = number % number2
// console.log(result)

//  let favDrink="cola"
//  let firstName="leon"
// // console.log("my facourite drink is", favDrink)
// // console.log("its just great is", favDrink)
// // console.log(favDrink, " is refreshing")
// // console.log("I want a", favDrink, "now")

// console.log(`My facourite drink is ${favDrink}`)
// console.log(`my name is ${firstName}, I want a ${favDrink}`)

// let firstName = "Vlad"
// let age = "26"
// let favColour = "Green"

// console.log("My name is " + firstName, `I am ${age} years old and I like the colour ${favColour}.`)

// let breakfast = "Cereals"
// let lunch = "Mashed Potatoes"
// let dinner = "Crumpets"

// console.log(`For breakfast, I will have ${breakfast}, then I will have ${lunch} for lunch, finally I will eat ${dinner} for dinner`)

// breakfast = "Toast"
// lunch = "Soup"
// dinner = "Pancakes"

// console.log(`For breakfast, I will have ${breakfast}, then I will have ${lunch} for lunch, finally I will eat ${dinner} for dinner`)

// const currentDate = new Date()
// //console.log(currentDate)
// const birthDay = new Date("2022-12-11")
// //console.log(birthDay)
// const firstBirthDay = new Date("1995-12-11")

// let daysUntilBirthday = Math.round((birthDay - currentDate) / (1000 * 60 * 60 * 24))
// let daysSinceBirthday = Math.round((currentDate - firstBirthDay) / (1000 * 60 * 60 * 24))
// console.log(`There are ${daysUntilBirthday} days left until your next birthday, good luck`)
// console.log(`There has been ${daysSinceBirthday} days since you have been born, keep at it`)

// let weather = ("foggy" == "not foggy") ? "Is foggy":"Not Foggy"
// console.log(weather)

// if (weather == "sunny")
// {
//     console.log("I refuse to believe it, the UK can't be sunny")
// }
// else if (weather == "foggy")
// {
//     console.log("It's foggy, better turn your fog lights on")
// }
// else
// {
//     console.log("As usual, the sun does not exist in the UK")
// }
// let num = 11

// if (num <= 10)
// {
//     console.log("Less than 10")
// }
// else
// {
//     console.log("Not less than 11")
// }

// let num = 9

// if(num % 2 === 0)
// {
//     console.log("even")
// }
// else
// {
//     console.log("odd")
// }

// let bestGame = "Ymir"
// let secondBestGame = "Starcraft"
// let worstGame = "COD"

// let gameToPlay = "Ymir"
// console.log(`Today we are playing ${gameToPlay}`)

// if (gameToPlay == bestGame || gameToPlay == secondBestGame)
// {
//     console.log(":)")
// }
// else
// {
//     console.log(":(")
// }

// let mainFood = "Potates"
// let secondaryFood = "Chicken"

// let todayMainfood= "Potates"
// let toodaySecondaryFood = "NotChicken"

// if (mainFood == todayMainfood && secondaryFood == toodaySecondaryFood)
// {
//     console.log("This is some good food")
// }
// else
// {
//     console.log("We aren't eating today son")
// }

let game = "Age Of Empires";

switch (game) {
	case "Ymir": {
		console.log("Time to sell some axes");
		break;
	}

	case "Starcraft": {
		console.log("Need more supply depots");
		break;
	}

	case "Age Of Empires": {
		console.log("Castle Rush, less gooo");
		break;
	}

	case "Fifa": {
		console.log("Boring");
		break;
	}

	default:
		break;
}
