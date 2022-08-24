const Movie = require('./movieModel')

exports.createMovie = async function (movieObject)
{
    try
    {
        await Movie.create(movieObject)
    }
    catch (error)
    {
        console.log(error)
    }
}

exports.listMovies = async function ()
{
    try
    {
        return await Movie.find({})

    } catch (error)
    {

    }
}