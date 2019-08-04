const mysql = require('mysql2');
const config = require('./dbConfig');

const pool = mysql.createPool(config).promise();

module.exports = pool;
