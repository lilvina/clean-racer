drop table if exists todos;
create table todos (
  id serial primary key,
  description varchar,
  completed boolean default false,
  list_id integer not null,
  due_date date default null,
  due_time time
);

drop table if exists lists;
create table lists (
  id serial primary key,
  title varchar not null,
  todo_id integer not null,
  description varchar not null
);

insert into lists (title) values ('chores'), ('miscellaeous'), ('shopping'), ('bills'), ('exercise')


-- DROP TABLE IF EXISTS "list_todo";
-- CREATE TABLE "list_todo" (
-- 	todo_id INTEGER, 
-- 	list_id INTEGER
-- );

-- DROP TABLE IF EXISTS "todo";
-- CREATE TABLE "todo" (
-- 	id SERIAL PRIMARY KEY,
-- 	importance INTEGER,
-- 	complete BOOLEAN DEFAULT false,
-- 	due_date VARCHAR
-- );

-- DROP TABLE IF EXISTS "bills";
-- CREATE TABLE "bills" (
-- 	id SERIAL PRIMARY KEY,
-- 	description VARCHAR DEFAULT 'Need to Pay',
-- 	number INTEGER
-- );

-- DROP TABLE IF EXISTS "chores";
-- CREATE TABLE "chores" (
-- 	id SERIAL PRIMARY KEY,
-- 	description VARCHAR DEFAULT 'Need todo',
-- 	number INTEGER
-- );

-- DROP TABLE IF EXISTS "shopping";
-- CREATE TABLE "shopping" (
-- 	id SERIAL PRIMARY KEY,
-- 	description VARCHAR DEFAULT 'Need to buy',
-- 	number INTEGER
-- );

-- DROP TABLE IF EXISTS "exercise";
-- CREATE TABLE "exercise" (
-- 	id SERIAL PRIMARY KEY,
-- 	description VARCHAR DEFAULT 'Exercises',
-- 	number INTEGER
-- );

-- DROP TABLE IF EXISTS "errands";
-- CREATE TABLE "errands" (
-- 	id SERIAL PRIMARY KEY,
-- 	description VARCHAR DEFAULT NULL,
-- 	number INTEGER
-- );

-- DROP TABLE IF EXISTS "miscellaeous";
-- CREATE TABLE "miscellaeous" (
-- 	id SERIAL PRIMARY KEY,
-- 	description VARCHAR DEFAULT NULL,
-- 	number INTEGER
-- );