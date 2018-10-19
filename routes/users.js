const express = require('express');

const db = require('../db');

const router = express.Router();

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.render('index', { users: users });
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message);
    });
});

router.get('/first', (req, res) => {
  db.getFirstUser()
    .then(users => {
      res.render('first', { users });
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message);
    });
});

router.get('/nigel', (req, res) => {
  let path = req.route.path;
  const findName = path.substr(1);
  db.findNigel(findName)
    .then(users => {
      users = users[0];
      res.render('nigel', { users });
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message);
    });
});

router.get('/user/:id', (req, res) => {
  console.log(req.params);

  db.getUser(req.params.id)
    .then(users => {
      res.render('user', { users });
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message);
    });
});

module.exports = router;
