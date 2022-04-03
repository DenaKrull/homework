const express = require('express');
var router = express.Router();
const Mongo = require('mongodb');

const authenticatedOnly = require('../authenticatedOnly');
let limit = 5;

router.route('/')
  .get(async (req, res, next) => {
    const thePosts = await global.posts.find().skip(1).limit(limit).toArray();
    res.send(thePosts);
  })
  .post(authenticatedOnly, async (req, res, next) => {
    const newPost = {
      title: req.body.title,
      body: req.body.body,
      author: req.session.user,
      date: new Date()
    }
    await global.posts.insertOne(newPost);
    res.status(201)
      .send(newPost);
  })

router.post('/:id/comments', authenticatedOnly, async (req, res, next) => {
  const newComment = {
    body: req.body.body,
    author: req.session.user,
    date: new Date()
  };
  const result = await global.posts.updateOne({ _id: Mongo.ObjectId(req.params.id) }, { $push: { comments: newComment } });
  if (!result.modifiedCount) {
    return res.status(404).send('Post not found');
  }
  socketIo.emit('comment', { postId: req.params.id, comment: newComment });
  res.status(201).send(newComment);

})

module.exports = router;