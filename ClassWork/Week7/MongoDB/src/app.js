const yargs = require("yargs")
const { client, connection } = require("./db/connections")
const Movie = require("./utils")

const app = async (yargsObject) =>
{
    const collection = await connection()
    try
    {
        if (yargsObject.create)
        {
            const movie = new Movie(yargsObject.title, yargsObject.actor)
            await movie.add(collection)
            console.log(await movie.list(collection))
        }
        else if (yargsObject.read)
        {
            console.log("Readme")
            const movie = new Movie(yargsObject.title)
            await movie.list(collection)
            console.log(await movie.list(collection))
        }
        else if (yargsObject.delete) 
        {
            console.log("delete me")
            const movie = new Movie(yargsObject.title, yargsObject.actor)
            await movie.delete(collection)
            console.log(await movie.list(collection))
        }
        else 
        {
            console.log("Incorrect command");
        }
        await client.close();
    }

    catch (error)
    {
        console.log(error)
        await client.close()
    }
}


app(yargs.argv)