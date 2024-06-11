const getRandomUsers = require('./utils/getRandomUsers');
const users = getRandomUsers();

const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'test',
});
connection.query('drop table if exists users;', function (err, result) {
  if (err) {
    console.log('drop table err is:', err);
  } else {
    console.log('table users droped');
  }
});

connection.query(
  `
  create table users(
    id int auto_increment primary key,
    username varchar(50) not null,
    email varchar(100) not null,
    birthdate date,
    is_active boolean default true
  );
`,
  function (err, result) {
    console.log(err);
    console.log(result);
    if (err) {
      console.log('create table err', err.toString());
    } else {
      for (let user of users) {
        connection.query(`insert into users set ?`, user, function (err) {
          if (err) {
            console.log('err is', err.toString());
          }
        });
      }
    }
  },
);
