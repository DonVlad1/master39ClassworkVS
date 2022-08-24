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

exports.deleteMovie = async function (movieObject)
{
    try
    {
        return await Movie.deleteOne(movieObject)

    } catch (error)
    {

    }
}

exports.updateMovie = async function (movieObject)
{
    try
    {
        return await Movie.updateOne({ title: movieObject.titleR, actor: movieObject.actorR })

    } catch (error)
    {

    }
}

exports.findActor = async function (movieObject)
{
    try
    {
        return console.log(await Movie.find(movieObject))
    }
    catch (error)
    {

    }
}

exports.findTitle = async function (movieObject)
{
    try
    {
        return console.log(await Movie.find(movieObject))
    }
    catch (error)
    {

    }
}

