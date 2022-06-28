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
//     work() 
//     {
//         console.log(`I am going to build a house, because I am a ${this.job}`);
//     }
// }
//    //create a new instance of the class
// const dave = new Person('Dave', 41,'Builder');
// dave.talks();


class Person
{
    constructor(name, age, job)
    {
        this.name = name,
        this.age = age,
        this.job = job
    }

    talks()
    {
        console.log(`My name is ${this.name}, I am ${this.age} years old and I am an ${this.job}`)
    }
}

let leon = new Person("Leon", "31", "Instructor")
let christian = new Person("Christian", "25", "Instructor")
leon.talks()
console.log(leon)
console.log(christian)
