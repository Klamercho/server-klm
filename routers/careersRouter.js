const { careersController } = require('../controllers');

module.exports = (router) => {

    router.get('/all', careersController.get.all);
    router.get('/edit/:courseId', careersController.get.edit);
    router.get('/delete/:courseId', careersController.get.delete);
    router.get('/find/:careerId', careersController.get.find);
    router.get('/initiatingData', careersController.get.initiatingData);

    router.post('/create', careersController.post.create);
    router.post('/all', careersController.post.all);
    router.post('/find/:careerId', careersController.post.find);
    router.post('/filter', careersController.post.filter);

    return router;
};