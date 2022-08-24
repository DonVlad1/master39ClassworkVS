require('./db/connnections');
const mongoose = require('mongoose')
const yargs = require('yargs')

const { createMovie, listMovies, deleteMovie, updateMovie, findActor, findTitle } = require('./movie/movieFunctions')
const { createTV, listTVs, deleteTV, updateTV, findTVActor, findTVTitle } = require('./tv/tvFunctions')

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
            console.log(await listMovies())
        }
        else if (yargsObject.delete)
        {
            await deleteMovie({ title: yargsObject.title, actor: yargsObject.actor })
            console.log(await listMovies())
        }
        else if (yargsObject.update)
        {
            await updateMovie({ title: yargsObject.title, actor: yargsObject.actor, titleR: yargsObject.titleR, actorR: yargsObject.actorR })
            console.log(await listMovies())
        }
        else if (yargsObject.findAllActors) 
        {
            await findActor({ actor: yargsObject.actor })
        }
        else if (yargsObject.findOneTitle)
        {
            await findTitle({ title: yargsObject.title })
        }




        if (yargsObject.addTV) 
        {
            //   
            await createTV({ title: yargsObject.title, actor: yargsObject.actor })
            console.log(await listTVs())
            console.log("Success!!")
        }
        else if (yargsObject.listTV)
        {
            console.log(await listTVs())
        }
        else if (yargsObject.deleteTV)
        {
            await deleteTV({ title: yargsObject.title, actor: yargsObject.actor })
            console.log(await listTVs())
        }
        else if (yargsObject.updateTV)
        {
            await updateTV({ title: yargsObject.title, actor: yargsObject.actor, titleR: yargsObject.titleR, actorR: yargsObject.actorR })
            console.log(await listTVs())
        }
        else if (yargsObject.findAllActorsTV) 
        {
            await findTVActor({ actor: yargsObject.actor })
        }
        else if (yargsObject.findOneTitleTV)
        {
            await findTVTitle({ title: yargsObject.title })
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