const express = require('express');
const index = require('../controllers/codeDictionary/index');
const error404 = require('../controllers/codeDictionary/error404');

const codeDictionaryRouter = express.Router();

codeDictionaryRouter.get('/', index);
codeDictionaryRouter.use(error404);

module.exports = codeDictionaryRouter;
