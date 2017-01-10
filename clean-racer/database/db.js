var pgp = require('pg-promise')()
var db = pgp(connection);

function getAllLists(req, res, next){
	return db.many('SELECT * FROM list')
}

// var createList = 'INSERT INTO list '
function createList(name){
	return db.many(
		`INSERT INTO list(id, description) 
		VALUES($1, $2)`
	)
}

function deleteList(){
	return db.many(
		`DELETE FROM
		list(id, description) 
		VALUES($1, $2)`
	)
}


// to create list name
INSERT INTO list(id,description)
VALUES(2,'Shopping')

// to delete whole list name
DELETE FROM list(id,description)
VALUES(2,'Shopping')
