var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {


  ///track how many times user has visited the page

  let counter = req.signedCookies['counter'] ? parseInt(req.signedCookies['counter']) : 0;
  res.cookie('counter', counter + 1, { signed: true, secure: true });
  res.locals.counter = counter;

  //remember users name
  const cookiesName = req.signedCookies['names'] ? JSON.parse(req.signedCookies['names']) : {};
  const names = { name: req.query.username || cookiesName.name || 'Anonymous' };
  res.cookie('names', JSON.stringify(names), { httpOnly: true, signed: true, secure: true });
  res.locals.username = names.name;
  
  res.render('layout', { title: 'Index', partials: { content: 'index' } });

});




module.exports = router;
