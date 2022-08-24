require('./db/connnections');
const mongoose = require('mongoose')
const yargs = require('yargs')


async function App()
{
    try
    {
        if (yargsObject.add) 
        {
            //    
        }
        else if (yargsObject.list)
        {
            //
        }
        else
        {
            console.log("incorrect command")
        }
    }
    catch (error)
    {
        console.log(error)
        await mongoose.disconnect()
    }
}