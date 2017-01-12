var express = require('express');
var router = express.Router();
var db = require('../queries.js');

// Get all todos
router.get('/todos', db.getAllTodos);
// Get single todo
router.get('/todos/:id', db.getSingleTodo);
// Create a todo
router.post('/todos', db.createTodo);
// Delete todo
router.get('/delete/todos/:id', db.removeTodo);

module.exports = router;
