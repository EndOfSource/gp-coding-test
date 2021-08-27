var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {

  const { name, address, zip_code } = req.body

  console.log(name, address, zip_code)
  res.send(req.body)
});

module.exports = router;
