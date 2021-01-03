const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const getUserModel = require('./User');
const getCareersModel = require('./Careers');
const getClientsModel = require('./Clients');
const getNewsModel = require('./News');

module.exports = {
    User: getUserModel(mongoose, bcrypt),
    Careers: getCareersModel(mongoose),
    Clients: getClientsModel(mongoose),
    News: getNewsModel(mongoose)
};