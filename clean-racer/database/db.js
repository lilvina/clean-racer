const pgPromise = require('pg-promise')
const pgp = pgPromise()
const db = pgp( `postgres://${process.env.USER}@localhost:5432/clean-racer` )


const insertTodo = 'INSERT INTO todos (list_id, description, completed, due_date, due_time ) VALUES ($1, $2, $3, $4, $5)'

const createList = 'INSERT INTO lists (title, todo_id, description) VALUES ($1, $2, $3)'

const deleteTodo = 'DELETE FROM todos WHERE id IN ($1:csv)'

const deleteList = 'DELETE FROM lists WHERE id IN ($1:csv)'

const updateTodo = 'UPDATE todos SET description WHERE id IN ($1:csv)'

const updateList = 'UPDATE lists SET description WHERE id IN ($1:csv)'



const addT = (list_id, description, completed, due_date, due_time) =>
	db.oneOrNone(insertTodo, [list_id, description, completed, due_date, due_time])

const createL = (title, todo_id, description) =>
	db.any(createList, [title, todo_id, description])

const updateT = (id) =>
	db.oneOrNone(updateTodo, [id])

const updateL = (id) =>
	db.oneOrMany(updateList, [id])

const deleteL = (id) =>
	db.oneOrMany(deleteList, [id])

const deleteT = (id) =>
	db.manyOrNone(deleteTodo, [id])
// const createList = (category, number) => {
// 	const insertList = `INSERT INTO ${category} (number) VALUES ($1)`
// 	return db.oneOrNone(insertList, [number])
// }

// const Todo = {
// 	createList: (category, number) => createList(category, number),
// 	insert: number => db.oneOrNone(insertList, [number])
// }

module.exports = {addT, createL, updateT, updateL, deleteL, deleteT}