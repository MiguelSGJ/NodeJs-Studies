import { MongoClient } from "mongodb";

const Mongo = {
  client: null,
  db: null,

  async connect({ mongoConnectionString, mongoDbName }) {
    if (this.db) {
      console.log("Already connected to database!");
      return this.db;
    }

    try {
      const client = new MongoClient(mongoConnectionString);

      await client.connect();
      const db = client.db(mongoDbName);

      this.client = client;
      this.db = db;

      console.log("Connected to mongo");
      return this.db;
    } catch (error) {
      console.error("Error connecting to mongo!", error);
      throw error;
    }
  },
};

export default Mongo;
