const TvShow = require('./tvModel')

exports.createTV = async function (tvObject)
{
    try
    {
        await TvShow.create(tvObject)
    }
    catch (error)
    {
        console.log(error)
    }
}

exports.listTVs = async function ()
{
    try
    {
        return await TvShow.find({})

    } catch (error)
    {

    }
}

exports.deleteTV = async function (tvObject)
{
    try
    {
        return await TvShow.deleteOne(tvObject)

    } catch (error)
    {

    }
}

exports.updateTV = async function (tvObject)
{
    try
    {
        return await TvShow.updateOne({ title: tvObject.titleR, actor: tvObject.actorR })

    } catch (error)
    {

    }
}

exports.findTVActor = async function (tvObject)
{
    try
    {
        return console.log(await TvShow.find(tvObject))
    }
    catch (error)
    {

    }
}

exports.findTVTitle = async function (tvObject)
{
    try
    {
        return console.log(await TvShow.find(tvObject))
    }
    catch (error)
    {

    }
}

