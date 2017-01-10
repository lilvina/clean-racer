var express = require('express');
var router = express.Router();
var Todo = require('../database/db')

/* GET home page. */
router.get('/home', (req, res) => res.render('index.jade', {title: 'bills'}))

router.get('/insert_list/:category', function(req, res, next) {
  const { category } = req.params	

  Todo.createList(category, 1).then(list => res.json(list))		
});

module.exports = router;
