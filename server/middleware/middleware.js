const cors = require('cors');
const bodyParser = require('body-parser');

exports.setupMiddleware = (app) => {
  app.use(cors());
  app.use(bodyParser.json());

  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
};