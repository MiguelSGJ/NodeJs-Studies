const { MongoClient } = require('mongodb')

const Mongo = {
    client: null,
    db: null,

    async connect({mongoConnectionString, mongoDbName}) {
        try{
            const client = new MongoClient(mongoConnectionString);
    
            await client.connect()
            const db = client.db(mongoDbName)

            this.client = client
            this.db = db

            console.log("Conected to mongo");
            return db;
        }catch (error) {
            console.error("Error connecting to mongo!", error);
            throw error;
        }
    }
}

module.exports = Mongo