// class Person { constructor(name, age, job) 
// {
//     //properties here
//     this.name = name;
//     this.age = age;
//     this.job = job;
//     }
//     //methods here
//     talks() 
//     {
//         console.log(`Hi, my name is ${this.name}, I am ${this.age} and I work as a ${this.job}`,);
//     }
// //     work() 
// //     {
// //         console.log(`I am going to build a house, because I am a ${this.job}`);
// //     }
// // }
// //    //create a new instance of the class
// // const dave = new Person('Dave', 41,'Builder');
// // dave.talks();





// class Person
// {
//     constructor(name, age, job)
//     {
//         this.name = name,
//         this.age = age,
//         this.job = job
//     }

//     talks()
//     {
//         console.log(`My name is ${this.name}, I am ${this.age} years old and I am an ${this.job}`)
//         return this
//     }
//     walks()
//     {
//         console.log(`${this.name} is walking`)
//         return this
//     }
// }

// let leon = new Person("Leon", "31", "Instructor")
// let christian = new Person("Christian", "25", "Instructor")

// leon.talks().walks()


// class Animal 
// {
//     constructor(name)
//     {
//         this.name = name;
//         this.health = 100;
//         this.hunger = 100;
//     }
//     drinks()
//     {
//         this.health +=5;
//         return this;
//     }

//     eats()
//     {
//         this.health +=5;
//         this.hunger +=10;
//         console.log(`${this.name}'s health is ${this.health}`);
//         return this;
//     }
//     stats()
//     {
//         return console.table({
//             name: this.name,
//             health: this.health
//         });
//     }
// }

// class Hamster extends Animal
// {
//     constructor(name, speed)
//     {
//         super(name, speed);
//         this.speed = speed
//     }
//     playRace()
//     {
//         this.health += 5;
//         this.hunger -= 5;
//         console.log(`${this.name} is 2Fast4U`);
//         return this;
//     }
//     barrelRoll()
//     {
//         console.log(`${this.name} do a barrel roll, you are such fast at ${this.speed} speed`);
//         this.health += 15;
//         return this;
//     }
    
// }

// let Billy2Paws = new Hamster("Billy2Paws", 20)
// Billy2Paws.playRace().barrelRoll()
// console.log(Billy2Paws)


// class Person
// {
//     constructor(firstName, lastName)
//     {
//         this.firstName = firstName
//         this.lastName = lastName
//     }
//     get fullName()
//     {
//         return `${this.firstName} ${this.lastName}`
//     }

//     set fullName(value)
//     {
//         const names = value.split(' ')
//         this.firstName = names[0]
//         this.lastName = names[1]
//     }
// }
// let person = new Person('Dave', 'Jones')
// // person.fullName = 'Will Smith'

// console.log(person)


// class Car
// {
//     constructor(carRegistration, parkingRate, stayTime)
//     {
//         this.carRegistration = carRegistration
//         this.parkingRate = parkingRate
//         this.stayTime = stayTime
//     }

//     calculatePrice()
//     {
//         const totalCost = this.stayTime * this.parkingRate
//         return totalCost
//     }
// }


// class Staff extends Car
// {
//     constructor(staffNumber, creditsDue)
//     {
//     super(staffNumber, creditsDue)
//     this.staffNumber = staffNumber
//     this.creditsDue = creditsDue
//     }

//     caculateCreditLeft()
//     {

//     }
// }


// let car = new Car("SL52VX", 1.50, 5)
// let staff = new Staff("Bill", 30, 100, )


// // console.log(`Parking for ${car.carRegistration} for a total of ${car.stayTime} hours will cost you £${car.calculatePrice()}`)
// console.log(car)
// console.log(staff)


class drinkDetails
{   constructor(drinkName, drinkPrice)
    {
        this.drinkName = drinkName
        this.drinkPrice = drinkPrice
    }
}


class customerDetails
{
    constructor(customerName, budgetTotal)
    {
        this.customerName = customerName
        this.budgetTotal = budgetTotal
    }
}


const drinkFanta = new drinkDetails("Fanta", 3.50)
const drinkPepsi = new drinkDetails("Pepsi", 7.00)
const drinkSprite = new drinkDetails("Sprite", 4.25)

let drinksTotal = 0
const drinkPriceRange = [drinkFanta.drinkPrice, drinkPepsi.drinkPrice, drinkSprite.drinkPrice]



const customerBilly = new customerDetails("Billy", 5)
const customerJohn = new customerDetails("John", 23)
const customerJane = new customerDetails("Jane", 80)


for (let index = 0; index < drinkPriceRange.length; index++) {
    drinksTotal += drinkPriceRange[index]
}


console.log(`Your order is ${drinkFanta.drinkName}, ${drinkPepsi.drinkName}, ${drinkSprite.drinkName}, which totals at £${drinksTotal}`)

if (drinksTotal > customerBilly.budgetTotal) {
    console.log(`Billy can't afford ${drinksTotal}`)
}
else
{
    console.log(`Billt can afford ${drinksTotal}`)
}




