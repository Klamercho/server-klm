const { authCookieName } = require('../config');
const { verifyToken } = require('./jwt');
const { User } = require('../models');

module.exports = (req, res, next) => {
    const token = req.cookies[authCookieName] || '';

    if (!token){
        next();
        return;
    }

    verifyToken(token)
    .then(({_id}) => User.findOne({_id}))
    .then(({userName, _id}) => {
        req.user = {userName, _id};
        res.locals.isLoggedIn = Boolean(req.user); /// this is where we are logged in
        res.locals.userName = userName;
        next(); 
    })

}