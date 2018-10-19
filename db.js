const environment = process.env.NODE_ENV || 'development';
const config = require('./knexfile')[environment];
const connection = require('knex')(config);

module.exports = {
  getUser,
  getUsers,
  getFirstUser,
  findNigel
};

function toUpperCase(string) {
  return string[0].toUpperCase() + string.slice(1);
}

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

// THE FUNCTIONS BELOW ARE FOR THE EXERCISES.

function getFirstUser(id, testConn) {
  const conn = testConn || connection;
  //your code goes here!! please try returning the FIRST user in the database. There's a clue above.
}

function findNigel(name, testConn) {
  const conn = testConn || connection;
  name = toUpperCase(name);
  // your code goes here!! please refer to the functions above for clues. We need to find Nigel!
}
