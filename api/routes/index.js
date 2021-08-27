var express = require('express');
const { body, validationResult } = require('express-validator');

var router = express.Router();

const getConnection = require('../database/mysql')

router.post(
  '/', 
  body('name').isString().isLength({max: 191}), // DB Field only has 191 chars
  body('address').exists(),
  body('address.address_line_1').exists().isString(),
  body('address.address_line_2').exists().isString(),
  body('address.address_line_3').exists().isString(),
  body('zip_code').isString().isLength({min: 6, max: 8}), // UK ZIP-Code
  function(req, res, next) {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

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
  }
);

module.exports = router;
