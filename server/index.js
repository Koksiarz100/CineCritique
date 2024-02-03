const express = require('express');
const { setupMiddleware } = require('./middleware/middleware');
const { setupRoutes, carousel } = require('./routes/routes');

const app = express();
const port = 5000;

setupMiddleware(app);
setupRoutes(app);


const repl = require('node:repl');
const r = repl.start({ useGlobal: true })
r.context.someStuff = carousel // will be accessible as someStuff in REPL

app.listen(port, () => console.log(`App listening on port ${port}!`));