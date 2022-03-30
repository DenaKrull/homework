const bcrypt = require('bcrypt');
const mongo = require('./mongo')();

module.exports = async (req, res, next) => {
  const users = await mongo;
  const userExists = await users.findOne({ username: req.body.username });

  if (!req.body.username || !req.body.password) {
    return next(new Error('Username and password are required'));
  }
  if (userExists) {
    return next(new Error('Username already exists'));
  }
  bcrypt.hash(req.body.password, 10, async (err, hash) => {
    if (err) {
      return next(err);
    }
    try {
      const user = {
        username: req.body.username,
        password:hash
      };
      await users.insertOne(user);
      res.send('User created').status(201);
    } catch (err) {
      console.log('heres your error')
      // next(err);
    }
  });


};





