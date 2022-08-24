require('./db/connnections');
const mongoose = require('mongoose')
const yargs = require('yargs')

const { createMovie, listMovies } = require('./movie/movieFunctions')

async function App(yargsObject)
{
    try
    {
        if (yargsObject.add) 
        {
            //   
            await createMovie({ title: yargsObject.title, actor: yargsObject.actor })
            console.log(await listMovies())
            console.log("Success!!")
        }
        else if (yargsObject.list)
        {
            //
            console.log(await listMovies())
        }
        else
        {
            console.log("incorrect command")
        }

        await mongoose.disconnect()
    }
    catch (error)
    {
        console.log(error)
        await mongoose.disconnect()
    }
}

App(yargs.argv)