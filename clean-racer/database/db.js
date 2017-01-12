const pgPromise = require('pg-promise')
const pgp = pgPromise()
const db = pgp( `postgres://${process.env.USER}@localhost:5432/clean-racer` )



const insertTodo = 'INSERT INTO todos ( description, completed ) VALUES ($1, $2)'



const deleteTodo = 'DELETE FROM todos WHERE id IN ($1:csv)'



const updateTodo = 'UPDATE todos SET description WHERE id IN ($1:csv)'




const addT = ( description, completed ) =>
	db.oneOrNone(insertTodo, [ description, completed])


const updateT = (id) =>
	db.oneOrNone(updateTodo, [id])



const deleteT = (id) =>
	db.manyOrNone(deleteTodo, [id])

module.exports = {addT,updateT,deleteT}
