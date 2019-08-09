const express = require('express');
const index = require('../controllers/codeDictionary/index');

const codeDictionaryRouter = express.Router();

codeDictionaryRouter.get('/', index);

module.exports = codeDictionaryRouter;
