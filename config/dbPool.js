const mysql = require('mysql2');
const config = require('./dbConfig');

module.exports.codeDictionary = mysql
  .createPool(config.codeDictionary)
  .promise();
module.exports.englishTrainer = mysql
  .createPool(config.englishTrainer)
  .promise();
