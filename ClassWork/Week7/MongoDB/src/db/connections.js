const { MongoClient } = require("mongodb");

// Create a new MongoClient
const client = new MongoClient("mongodb+srv://Vlad:<Put password here>@m40vlad.xupmudr.mongodb.net/?retryWrites=true&w=majority");
async function run()
{
    try
    {
        // Connect the client to the server (optional starting in v4.7)
        await client.connect();
        // Establish and verify connection
        await client.db("admin").command({ ping: 1 });
        console.log("Connected successfully to server");
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
run().catch(console.dir);