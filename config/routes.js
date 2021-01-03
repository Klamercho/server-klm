module.exports = (express, app) => {

  const routers = require('../routers')(express.Router());

  app.use('/user', routers.userRouter);
  app.use('/careers', routers.careersRouter);
  app.use('/clients', routers.clientsRouter);
  app.use('/news', routers.newsRouter)
 
};