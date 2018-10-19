const environment = process.env.NODE_ENV || 'development';
const config = require('./knexfile')[environment];
const connection = require('knex')(config);

module.exports = {
  getUser,
  getUsers,
  getFirstUser
};

function getUsers(testConn) {
  const conn = testConn || connection;
  return conn('users').select();
}

function getUser(id, testConn) {
  const conn = testConn || connection;
  return conn('users')
    .where('id', id)
    .first();
}

function getFirstUser(id, testConn) {
  const conn = testConn || connection;
  //your code goes here!! please try returning the FIRST user in the database. There's a clue above.
}
