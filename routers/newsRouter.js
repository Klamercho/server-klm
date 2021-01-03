const { newsController } = require('../controllers');

module.exports = (router) => {

    router.get('/allnews', newsController.get.all);
    router.get('/initiate', newsController.get.initiate);

    return router;
};