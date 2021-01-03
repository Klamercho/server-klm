
const cookieParser = require('cookie-parser');
const { auth } = require('../utils');
const cors = require('cors');

module.exports = (express, app) => {
    app.use(express.static('public')); /// STATIC FILES
    app.use(express.json());
    app.use(express.urlencoded({ extended: false})); /// BODY PARSER
    app.use(cors());

    app.use(cookieParser());
    // this is where Authur should be 
    app.use(auth);
};