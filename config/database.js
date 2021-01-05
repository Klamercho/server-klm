const mongoose = require('mongoose');
const config = require('./index');
require('dotenv').config()

module.exports = () => {
    return mongoose.connect(process.env.MONGODB_URI || config.dbConnectionString, {
        useNewUrlParser: true, 
        useCreateIndex: true,
        useUnifiedTopology: true
    }).then((data) => {
        console.log("Connected to database!");
        return data;
    } );
}