const { User, Careers } = require('../models');
const { jwt } = require('../utils');
const { authCookieName } = require('../config')


module.exports = {
    get: {
        login(req, res, next) {
            res.render('./userPages/login');
        },
        register(req, res, next) {
            res.render('./userPages/register');
        },
        logout(req, res, next) {
            res.clearCookie(authCookieName)
                .redirect('/home/');
        }
    },
    post: {
        login(req, res, next) {
            console.log(req.body)
            const { email, password } = req.body;
            User.findOne({ email })
                .then((user) => {
                    if (user === null) {
                        return Promise.all([
                            null,
                            null
                        ])
                    } else {
                        return Promise.all([
                            user.comparePasswords(password),
                            user,
                        ])
                    }
                })
                .then(([arePasswordsMatched, user]) => {
                    if (user === null) {
                        res.status(500).send('User not found!')
                        throw new Error('User not found!');

                    }
                    if (!arePasswordsMatched) {
                        res.status(500).send('Passwords do not match!')
                        throw new Error('Passwords do not match!');
                    }

                    const token = jwt.createToken(user._id);  /// creating the JsonWebToken
                    res.status(200).json({
                        idToken: token,
                        expiresIn: 60
                    });

                }).catch((e) => {
                    console.log(e);
                })
        },

        register(req, res, next) {
            const { userName, password, rePassword, name, email } = { ...req.body };

            if (password !== rePassword) {
                res.status(500).send('The given passwords do not match!')
                throw new Error('The given passwords do not match!')
            };

            User.findOne({ email })
                .then((user) => {
                    if (user) {
                        res.status(500).send('The given username is already in use')
                        throw new Error('The given username is already in use');
                    }
                    return User.create({ userName, password, name, email })
                })
                .then((createdUser) => {

                    // const token = jwt.createToken(createdUser._id);  /// creating the JsonWebToken

                    res.status(200).json({ message: 'User Created!' })

                })
                .catch((e) => {
                    console.log(e);
                })
        },

        addCareer(req, res, next) {
            const { careerId, token } = { ...req.body };
            jwt.verifyToken(token).then((payload) => {
                const userId = payload._id;
                User.findById(userId)
                    .then((user) => {
                        Careers.findById(careerId).then((career) => {
                            user.addCareer(career);
                            res.status(200).send({message:'Successful!'});
                        })

                    })
            })

        },
        checkCareer(req, res, next) {
            const { careerId, token } = { ...req.body };
            jwt.verifyToken(token).then((payload) => {
                const userId = payload._id;
                User.findById(userId)
                    .then((user) => {
                        Careers.findById(careerId).then((career) => {
                            const hasCareer = user.checkCareer(career);
                            res.status(200).send({ hasCareer: hasCareer })
                        })
                    })
            })
        }
    }
};