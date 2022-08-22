// console.log("Hello World")
// console.log(process.argv)

// if (process.argv[2]) 
// {
//     console.log("It's Alex")
// }
// else
// {
//     console.log("Not Alex")
// }


// function app(argv)
// {
//     if (process.argv[2] == "Alex") 
//     {
//         console.log("It's Alex")
//     }
//     else
//     {
//         console.log("Not Alex")
//     }
// }

// app(process.argv)

function app(names)
{
    switch (names[2])
    {
        case 'Alex':
            console.log("It's Alex")
            const name = names[2]
            console.log(name + ' is stored in a const')
            break;

        case 'Steve':
            const steve = names[2]
            console.log(steve + ' is stored in a const')
            break

        default:
            console.log("Not a Name")
            break;
    }
}

app(process.argv)