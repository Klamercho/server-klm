const { userController } = require('../controllers');

module.exports = (router) => {
    router.get('/login', userController.get.login);
    router.get('/register', userController.get.register);
    router.get('/logout', userController.get.logout);

    router.post('/login', userController.post.login);
    router.post('/register', userController.post.register);
    router.post('/addcareer', userController.post.addCareer);
    router.post('/checkcareer', userController.post.checkCareer);

    router.post('/api/receive', (req, res) => {
        console.log(req.body);
    })
    return router
}