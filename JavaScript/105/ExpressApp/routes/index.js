var express = require('express');
var router = express.Router();

let contacts = [
  {
    id: 1,
    first: 'John',
    last: 'Doe',
    email: '',
    phone: '2324646454564',
  }, {
    id: 2,
    first: 'Kamala',
    last: 'Harris',
    email: 'sfsdfdf',
    phone: '654545',
  }];

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
  res.header("Access-Control-Allow-Origin", "*");
  connection.query('SELECT * FROM contacts', function (error, results, fields) {
    if (error) throw error;

    // res.json({contacts:results });
    res.render('index', {
      title: 'Contacts',
      contacts: results
      
    });
  });
  });


  module.exports = router;
