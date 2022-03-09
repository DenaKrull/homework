const { application } = require('express');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  req.session.username = req.query.username || req.session.name || 'Anonymous';
  req.session.counter = req.session.counter || 0;
  req.session.counter++;
 

  

});

router.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true

}));

router.post('')

module.exports = router;
