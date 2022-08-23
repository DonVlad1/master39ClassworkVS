const yargs = require("yargs")
const { client, connection } = require("./db/connections")
const Movie = require("./utils")


async function app(yargsObject) 
{
    const collection = await connection()

    try
    {
        if (yargsObject.create)
        {
            console.log("Inside if")
            const movie = new Movie(yargsObject.title, yargsObject.actor)
            await movie.add(collection)
            console.log(movie.list(collection))
        }
        else if (yargsObject.delete) 
        {
            await movie.delete(collection)
            console.log(movie.list(collection))
        }
        else
        {
            console.log("Incorrect command")
        }

    } catch (error)
    {

    }
}

app(yargs.argv)