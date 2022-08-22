// const Movie = require("./utils/index")

// console.log(process.argv)

// const app = (argsArr) =>
// {

//     try
//     {
//         switch (argsArr[2])
//         {
//             case 'adds':
//                 let movie = new Movie(argsArr[3], argsArr[4])
//                 console.log(movie)
//                 break;

//             case 'addm':
//                 let movie1 = new Movie(argsArr[3], argsArr[4])
//                 let movie2 = new Movie(argsArr[5], argsArr[6])
//                 movie1.add()
//                 movie2.add()
//                 console.log(movie1.list())
//                 break
//             default:
//                 console.log("incorrect command")
//                 break;
//         }

//     } catch (error)
//     {
//         console.log(error)
//     }
// }

// app(process.argv)

// const yargs = require('yargs')

// if (yargs.argv.add)
// {
//     console.log("its " + yargs.argv.titles)
// }
// else
// {
//     console.log("Not true")
// }
const yargs = require('yargs')
const Movie = require('./utils/index')


const app = (yargsObj) =>
{
    try
    {
        if (yargsObj.title != null)
        {
            let movie = new Movie(yargsObj.title, yargsObj.actor)
            console.log(movie)
        }
        else
        {

            console.log('Incorrect Command - Input something')
        }

    } catch (error)
    {
        console.log(error)
    }
}

app(yargs.argv)