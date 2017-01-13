DROP TABLE IF EXISTS todos;
CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  description VARCHAR ,
  completed BOOLEAN default false,
  title VARCHAR
);
