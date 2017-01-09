DROP TABLE IF EXISTS "list";
CREATE TABLE "list" (
	id SERIAL PRIMARY KEY,
	description VARCHAR DEFAULT NULL
);

DROP TABLE IF EXISTS "todo_type";
CREATE TABLE "todo_type" (
	id SERIAL PRIMARY KEY,
	description VARCHAR
);

DROP TABLE IF EXISTS "todo";
CREATE TABLE "todo" (
	id SERIAL PRIMARY KEY,
	list_id INTEGER NOT NULL,
	type_id INTEGER NOT NULL,
	importance INTEGER,
	description VARCHAR,
	complete BOOLEAN DEFAULT false,
	due_date DATE,
	due_time TIME
);
ALTER TABLE todo ADD FOREIGN KEY (list_id) REFERENCES "list" ("id") ON DELETE CASCADE;

INSERT INTO todo_type (description) VALUES ('Bills'), ('Chores'), ('Shopping');

INSERT INTO list (description) VALUES ('stuff');

INSERT INTO todo (list_id, type_id, description) VALUES
(1, 1, 'do things');
INSERT INTO todo (list_id, type_id, description) VALUES
(1, 2, 'do things 2');
INSERT INTO todo (list_id, type_id, description) VALUES
(1, 3, 'do things 3');
INSERT INTO todo (list_id, type_id, description) VALUES
(1, 3, 'do things 4');

