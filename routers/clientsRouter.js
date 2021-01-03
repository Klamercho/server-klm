const { clientsController } = require('../controllers');

module.exports = (router) => {

    router.get('/allclients', clientsController.get.all);
    router.get('/initial', clientsController.get.initial);

    router.post('/all', clientsController.post.all);

    return router;
};