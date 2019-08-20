var express = require('express');
var router = express.Router();
var db = require('../db');

router.get('/all', function(req, res, next) {
  db.query("select * from logs", (error, result, fields) => {
    if (error) {
      res.status(500).send(error);
    }
    res.send(result);
  });
});

router.post('/log', function(req,res,next){
  var query = "INSERT INTO logs (user, password, confirm) "
    +"VALUES ( ?, ?, ?, ?);"
  var queryParams = [
    req.body.user,
    req.body.password,
    req.body.confirm

  ];

  db.query(query, queryParams, (error, result, fields) => {
    if (error){
      res.status(500).send(error);
    }
    res.status(201).send('RECORD INSERTED......');
  });
});



module.exports = router;
