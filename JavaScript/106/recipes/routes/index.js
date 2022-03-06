var express = require('express');
var router = express.Router();
const pool = require('../pool');

router.route('/')
  .get((req, res) => {
    pool.query('SELECT * FROM recipes', (err, results) => {
      if (err) {
        res.status(500).send(err);
      }
      res.send(results);
    });
  })
  .post((req, res) => {
    pool.query('INSERT INTO recipes (name, ingredients, instructions) VALUES (?, ?, ?)', [req.body.name, req.body.ingredients, req.body.instructions], (err, results) => {
      if (err) {
        res.status(500).send(err);
      }
      req.body.id = results.insertId;
      res.status(201)
        .location(`${req.baseUrl}/${req.body.id}`)
        .send(`Recipes for ${req.body.name} created`);

    });
  })



router.route('/:id')
  .get((req, res) => {
    pool.query('SELECT * FROM recipes WHERE id = ?', [req.params.id], (err, results) => {
      if (err) {
        res.status(500).send(err);
      }
      res.send(results);
    });
  })
  .delete((req, res) => {
    pool.query('DELETE FROM recipes WHERE id = ?', [req.params.id], (err, results) => {
      if (err) {
        res.status(500).send(err);
      }
      res.send(`${results.affectedRows} recipes deleted`);
    });
  })

module.exports = router;
