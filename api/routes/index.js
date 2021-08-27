var express = require('express');
var router = express.Router();

const getConnection = require('../database/mysql')

router.post('/', function(req, res, next) {
  const { name, address, zip_code } = req.body

  getConnection(function(err, conn){
    conn.query(
      "INSERT INTO customer_addresses (name, address, zip_code) VALUES (?, ?, ?)", 
    [name, JSON.stringify(address), zip_code], 
    function(err, rows) {
      console.log(err)
      res.json(rows);
    })
  })
});

module.exports = router;
