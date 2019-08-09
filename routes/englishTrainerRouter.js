const express = require('express');
const index = require('../controllers/englishTrainer/index');
const error404 = require('../controllers/englishTrainer/error404');

const englishTrainerRouter = express.Router();

englishTrainerRouter.get('/', index);
englishTrainerRouter.use(error404);

module.exports = englishTrainerRouter;
