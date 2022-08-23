const { MongoClient } = require("mongodb");
require("dotenv").config()
// Create a new MongoClient
const client = new MongoClient(process.env.MONGO_URI);
async function connection()
{
    try
    {
        // Connect the client to the server (optional starting in v4.7)
        await client.connect();
        console.log("conected to mongo")
        // Establish and verify connection
        const db = client.db("Movies")
        return db.collection("Movie")
    }
    catch (error)
    {

    }
    finally
    {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

module.exports = { client, connection }
