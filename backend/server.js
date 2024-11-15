const express = require("express");
const path = require('path');
const cors = require('cors');

const setupExpressServer = () => {
  const app = express();
  app.use(cors());

  app.use(express.static(path.join(__dirname, '../build')))

  app.use(express.json());

  const knex = require('./db/knex')

  // GET /teapot - modifying status:418
  app.get("/teapot", (req, res) => {
    //リクエストが来たときの処理
    res.status(418).end();
  });

  app.get('/api/books', async (req, res) => {
    try {
      const books = await knex('books').select('*')
      res.status(200).json(books)
    } catch (err) {
      res.status(500).json({ error: 'Failed to get books' })
    }
  })

  app.get('/api/:volume/comments', async (req, res) => {
    try {
      const volume = req.params.volume;
      const comments = await knex('comments').select('*').where(volume ? {volume}: {volume})
      res.status(200).json(comments)
    } catch (err) {
      res.status(500).json({ error: 'Failed to get comments' })
    }
  })

  app.post('/api/comments', async (req, res) => {
    try {
      await knex('comments').insert({volume: req.body.volume, username: req.body.username, text: req.body.text, good: "2" })

    } catch (err) {
      res.status(500).json({ error: 'Failed to post comments' })
    }
  })


  /* return configured express app */
  return app;
};

module.exports = { setupExpressServer };
