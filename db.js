var db = require('mysql');
var dbcon = require('./dbcon.json');
var connection = db.createConnection(dbcon);


module.exports = connection;
