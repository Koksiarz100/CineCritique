const express = require('express');
const { setupMiddleware } = require('./middleware');
const { setupRoutes } = require('./routes/routes');

const app = express();
const port = 5000;

setupMiddleware(app);
setupRoutes(app);

app.listen(port, () => console.log(`App listening on port ${port}!`));