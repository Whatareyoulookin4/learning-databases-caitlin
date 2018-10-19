exports.seed = function(knex, Promise) {
  return knex('users')
    .del()
    .then(function() {
      return knex('users').insert([
        { id: 1, name: 'Caitlin', email: 'heyhey@gmail.com' },
        { id: 2, name: 'Leslie', email: 'rubiks@gmail.com' },
        { id: 3, name: 'Ross', email: 'rossboss@gmail.com' },
        { id: 4, name: 'Hayley', email: 'hayhay@gmail.com' },
        { id: 5, name: 'Nigel', email: 'bigpipes@gmail.com' }
      ]);
    });
};
