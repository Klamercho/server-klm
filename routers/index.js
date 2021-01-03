const routers = [
    {userRouter: require('./userRouter')},
    {careersRouter: require('./careersRouter')},
    {clientsRouter: require('./clientsRouter')},
    {newsRouter: require('./newsRouter')}

]

module.exports = (router) => {
    return routers.reduce((acc, curr) => {
        const key = Object.keys(curr)[0];
        return Object.assign(acc, { [key]: curr[key](router) });
    }, {});
};