var express = require('express');
const { Book } = require('../bin/Database');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'express tharun' });
});

module.exports = router;
