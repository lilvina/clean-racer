const pgPromise = require('pg-promise')
const pgp = pgPromise()
const db = pgp(`postgres://${process.env.USER}@localhost:5432/clean-racer`)

// User creates a todo
function createTodo(request, response, next) {
  var title = request.body.title
  var description = request.body.description
  var createTodo = 'INSERT INTO todos(title, description, completed) VALUES($1, $2, false)'

  db.none(createTodo, [title, description])
    .then(function() { response.redirect('/todos') })
    .catch(function(error) { next(error); });
}

//Get all todos from database
function getAllTodos(request, response, next) {
  var selectAllTodos = 'SELECT * FROM todos'

  db.any(selectAllTodos)
    .then(function(todos) {
      response.render('index', { todos });
    })
    .catch(function(err) { next(err); });
}

//Get single todo form database
function getSingleTodo(req, res, next) {
    var todosID = parseInt(req.params.id);
    db.one('select * from todos where id = $1', todosID)
        .then(function(data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ONE todo'
                });
        })
        .catch(function(err) {
            return next(err);
        });
}

// Remove single todo

function removeTodo(request, response, next) {
  var todoId = parseInt(request.params.id);
  var deleteTodoById =  'DELETE FROM todos WHERE id = $1'

  db.none(deleteTodoById, [todoId]).then(function() {
    response.redirect('/todos')
  })
  .catch(function(err) { return next(err); });
}

module.exports = {
  getAllTodos,
  getSingleTodo,
  createTodo,
  removeTodo
}
