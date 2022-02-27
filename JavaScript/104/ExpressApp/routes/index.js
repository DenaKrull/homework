var express = require('express');
var router = express.Router();

const contacts = [
  { name: 'John', },
  { name: 'Jane', },
  { name: 'Jack', }
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'PCS HW' });
});

router.get('/contacts', (req, res) => {
  res.render('index', {
    title: 'Contacts',
    contacts: contacts
  });
});

router.get('/api/contacts', (req, res) => {
  res.json({ contacts: contacts });
});


module.exports = router;
