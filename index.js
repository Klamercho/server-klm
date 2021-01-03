const express = require('express');
const { port } = process.env.PORT || require('./config');

const app = express();

const appString = `Server operational! listening on port ${port}...`;

require('./config/database')().then(() => {
    require('./config/express')(express, app);
    require('./config/routes')(express, app);

    app.listen(port, console.log(appString));
}).catch((e) => console.log(e));