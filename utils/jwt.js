const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config');

module.exports = {

    createToken(_id) {
        return jwt.sign({ _id}, jwtSecret, {expiresIn: '1h'})
    },

    verifyToken(token) {

        return new Promise((resolve, reject) => {
            jwt.verify(token, jwtSecret, (err, payload) => {
                if (err) {
                    reject(err);
                    return;
                };
                resolve(payload);
            })
        })
    }




}