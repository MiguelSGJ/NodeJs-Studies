const express = require('express')
const cors = require('cors')
const mongo = require('./src/database/mongo')

const app = express();

app.use(cors());
app.use(express.json());

const index = require('./src/routes/index')
app.use('/api/v1', index);

(async () => {
    await mongo.connect({
        mongoConnectionString: process.env.MONGO_CS,
        mongoDbName: process.env.MONGO_DB_NAME
    });
})();

module.exports = app;