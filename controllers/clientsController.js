const { Clients } = require('../models');
const config = require('../config')

module.exports = {
    get: {
        all(req, res, next) {
            console.log(req.body);
            Clients
                .find({})
                .lean()
                .then((clients) => {
                    res.send(clients);
                })
                .catch((e) => console.log(e));
        },
        initial(req,res,next) {
            Clients.insertMany([
                { 
                    name: 'HP Inc',
                    pictureURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1000logos.net%2Fwp-content%2Fuploads%2F2017%2F02%2FHP-Logo.png&f=1&nofb=1",
                    testimony: "Sample Testimony!",
                    author: "Jhon Jhonson",
                    authorPosition: "CEO"
                },
                { 
                    name: 'HP Inc',
                    pictureURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1000logos.net%2Fwp-content%2Fuploads%2F2017%2F02%2FHP-Logo.png&f=1&nofb=1",
                    testimony: "Sample Testimony!",
                    author: "Jhon Jhonson",
                    authorPosition: "CEO"
                },
                { 
                    name: 'HP Inc',
                    pictureURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1000logos.net%2Fwp-content%2Fuploads%2F2017%2F02%2FHP-Logo.png&f=1&nofb=1",
                    testimony: "Sample Testimony!",
                    author: "Jhon Jhonson",
                    authorPosition: "CEO"
                },
                { 
                    name: 'HP Inc',
                    pictureURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1000logos.net%2Fwp-content%2Fuploads%2F2017%2F02%2FHP-Logo.png&f=1&nofb=1",
                    testimony: "Sample Testimony!",
                    author: "Jhon Jhonson",
                    authorPosition: "CEO"
                },
                { 
                    name: 'HP Inc',
                    pictureURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1000logos.net%2Fwp-content%2Fuploads%2F2017%2F02%2FHP-Logo.png&f=1&nofb=1",
                    testimony: "Sample Testimony!",
                    author: "Jhon Jhonson",
                    authorPosition: "CEO"
                },
                { 
                    name: 'HP Inc',
                    pictureURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1000logos.net%2Fwp-content%2Fuploads%2F2017%2F02%2FHP-Logo.png&f=1&nofb=1",
                    testimony: "Sample Testimony!",
                    author: "Jhon Jhonson",
                    authorPosition: "CEO"
                },
                
            ]).then(() => {
                console.log("initial log successful!");
            })
        }
    },

    post: {

        all(req,res,next) {
            if(req.body.accessPassword === config.accessPassword){
            Clients
            .find({})
            .lean()
            .then((clients) => {
            res.send(clients);
            })
        } else {
            res.send('Wrong Password')
        }
        },

        filter(req, res, next) {
            const {keyword, location} = req.body; 
            const jobName = keyword;
            const description = 'ala bala protocala'
            Careers
            .create({jobName, description, location})
            .then((createdcareers)=> {
                console.log(createdcareers);
                res.send(createdcareers);
            })

            console.log(req.body);

        }
    }
}