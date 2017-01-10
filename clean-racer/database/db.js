const pgPromise = require('pg-promise')
const pgp = pgPromise()
const db = pgp( `postgres://${process.env.USER}@localhost:5432/clean-racer` )

const insertTodo = 'INSERT INTO todo (list_id, type_id, importance, complete, due_date ) VALUES ($1, $2, $3, $4, $5)'

const createList = (category, number) => {
	const insertList = `INSERT INTO ${category} (number) VALUES ($1)`
	return db.oneOrNone(insertList, [number])
}

const Todo = {
	createList: (category, number) => createList(category, number),
	insert: number => db.oneOrNone(insertList, [number])
}

module.exports = Todo