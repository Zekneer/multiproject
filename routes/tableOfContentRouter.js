const express = require('express');
const index = require('../controllers/tableOfContent/index');
const error404 = require('../controllers/tableOfContent/error404');

const tableOfContentRouter = express.Router();

tableOfContentRouter.get('/', index);
tableOfContentRouter.use(error404);

module.exports = tableOfContentRouter;
