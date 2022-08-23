class Movie
{
    constructor(title, actor = "Not specified")
    {
        this.title = title
        this.actor = actor
    }
    async add(collection)
    {
        await collection.insertOne(this)
    }
    async list(collection)
    {
        return await collection.find().toArray();
    }
    async delete(collection)
    {
        return await collection.deleteOne(this)
    }
    async update(collection)
    {
        return await collection.updateOne(this)
    }
}

module.exports = Movie