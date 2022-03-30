const express = require('express');
const app = express();
const session = require('express-session');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const Mongo = require('mongodb');
const MongoClient = Mongo.MongoClient;
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);


let posts;

app.use(async (req, res, next) => {
  await client.connect();
  const database = client.db('blogs');
  posts = database.collection('posts');
  next();
});

app.use(session({
  secret:'secret',
  resave:false,
  saveUninitialized:false
}));
app.use((req, res, next) => {
  res.locals.username = req.session?.username;
  next();
})

app.use(require('cors')({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.post('/register', require('./register'));
app.post('/login', require('./login'));
app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});
function sessionOnlyMiddleware(req, res, next) {
  if (req.session.username) {
    next();
  } else {
    res.redirect('/');
  }
}

app.route('/posts', sessionOnlyMiddleware)
  .get(async (req, res, next) => {
    const thePosts = await posts.find().toArray();
    res.send(thePosts);
  })
  .post(async (req, res, next) => {
    const newPost = {
      title: req.body.title,
      body: req.body.body,
      author: req.session.username,
      date: new Date()
    }
    await posts.insertOne(newPost);
    res.status(201)
      .send(newPost);
  })

app.post('/posts/:id/comments',sessionOnlyMiddleware, async (req, res, next) => {
  const newComment = {
    body: req.body.body,
    author: req.session.username,
    date: new Date()
  };
  const result = await posts.updateOne({ _id: Mongo.ObjectId(req.params.id)}, { $push: { comments: newComment } });
  if (!result.modifiedCount) {
    return res.status(404).send('Post not found');
  }
  res.status(201).send(newComment);

})
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const e = new Error('Not Found');
  e.status = 404;
  next(e);
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
});

app.listen(80);
