const mongo = require('./mongo')();
const bcrypt = require('bcrypt');


module.exports = async (req, res, next) => {
  const users = await mongo;
  const query = { username: req.body.username }
  const results = await users.findOne(query);
  if (!results) {
    return next(new Error('Invalid username or password'));
  }


  bcrypt.compare(req.body.password, results.password, (err, result) => {
    if (err) {
      return next(err);
    }
    if (!result) {
      return next(new Error('Incorrect password'));
    }
    req.session.username = req.body.username;
    return res.sendStatus(200);
  });
};
