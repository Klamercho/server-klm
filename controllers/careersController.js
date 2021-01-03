const { Careers } = require('../models');
const careers = require('../models/Careers');
const config = require('../config')

module.exports = {
    get: {
        all(req, res, next) {
            console.log(req.body);
            Careers
                .find({})
                .lean()
                .then((careers) => {
                    res.send(careers);
                })
                .catch((e) => console.log(e));
        },
        create(req, res, next) {
        },

        edit(req, res, next) {

        },
        find(req, res, next) {
            console.log(req.params);
            Careers
                .findOne({ _id: req.params.careerId })
                .then((career) => {
                    res.send(career);
                });
        },
        initiatingData(req, res, next) {
            Careers
                .insertMany([
                    {
                        jobName: "Business Analyst",
                        roleRequirements: [
                            'Research contact details mainly for schools, universities, and companies to confirm educational and work history.',
                            'Communicate with all parties involved in obtaining verification information.',
                            'Ensure all verifications are followed up in a timely manner.',
                            'Follow guidelines and policies, so the final review is sent to the client properly.',
                            'Execute an organized, efficient, and structured working process.'
                        ],
                        requiredSkills: [
                            'Fluent in Spanish. Good knowledge of English.',
                            'Excellent computer literacy and proficient with MS Office applications.',
                            'Accuracy, attention to detail, and excellent research skills.',
                            'Previous experience in a back office, verifications, or customer support role will be considered an advantage.'
                        ],
                        location: 'Plovdiv'
                    },
                    {
                        jobName: "Business Researcher",
                        roleRequirements: [
                            'Research contact details mainly for schools, universities, and companies to confirm educational and work history.',
                            'Communicate with all parties involved in obtaining verification information.',
                            'Ensure all verifications are followed up in a timely manner.',
                            'Follow guidelines and policies, so the final review is sent to the client properly.',
                            'Execute an organized, efficient, and structured working process.'
                        ],
                        requiredSkills: [
                            'Fluent in Spanish. Good knowledge of English.',
                            'Excellent computer literacy and proficient with MS Office applications.',
                            'Accuracy, attention to detail, and excellent research skills.',
                            'Previous experience in a back office, verifications, or customer support role will be considered an advantage.'
                        ],
                        location: 'Varna'
                    },
                    {
                        jobName: "Business Consultant",
                        roleRequirements: [
                            'Research contact details mainly for schools, universities, and companies to confirm educational and work history.',
                            'Communicate with all parties involved in obtaining verification information.',
                            'Ensure all verifications are followed up in a timely manner.',
                            'Follow guidelines and policies, so the final review is sent to the client properly.',
                            'Execute an organized, efficient, and structured working process.'
                        ],
                        requiredSkills: [
                            'Fluent in Spanish. Good knowledge of English.',
                            'Excellent computer literacy and proficient with MS Office applications.',
                            'Accuracy, attention to detail, and excellent research skills.',
                            'Previous experience in a back office, verifications, or customer support role will be considered an advantage.'
                        ],
                        location: 'Sofia'
                    }
                ]).then(() => {
                    console.log("Initializing successfull");
                    res.send("All records imported!")
                })

        },
        delete(req, res, next) {
        }

    },

    post: {

        all(req, res, next) {
            if (req.body.accessPassword === config.accessPassword) {
                Careers
                    .find({})
                    .lean()
                    .then((careers) => {
                        res.send(careers);
                    })
            } else {
                res.send('Wrong Password')
            }
        },
        create(req, res, next) {
            console.log(req.body);
            Careers
                .create({ ...req.body })
                .then((createdcareers) => {
                    console.log(createdcareers);
                });
        },

        find(req, res, next) {
            console.log(req.params);
        },

        filter(req, res, next) {
            const { keyword, location } = req.body;
            if ((keyword === "") && (location !== "")) {
                Careers
                    .find({ location: location })
                    .then((createdcareers) => {
                        console.log(createdcareers);
                        res.send(createdcareers);
                    })
            } else if ((location === "") && (keyword !== "")){
                Careers
                    .find({ jobName: keyword })
                    .then((createdcareers) => {
                        console.log(createdcareers);
                        res.send(createdcareers);
                    })
            } else if ((keyword === "") && (location === "")) {
                Careers
                    .find({})
                    .then((createdcareers) => {
                        console.log(createdcareers);
                        res.send(createdcareers);
                    })
            } else {
                Careers
                    .find({ keyword: keyword, location: location })
                    .then((createdcareers) => {
                        console.log(createdcareers);
                        res.send(createdcareers);
                    })
            }
        }
    }
}