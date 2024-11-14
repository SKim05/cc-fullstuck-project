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

  // GET /hello - world
  app.get("/api/hello", (req, res) => {
    //リクエストが来たときの処理
    res.json({message: "Hello from the server!!"})
  });

  app.get('/api/books', async (req, res) => {
    try {
      const books = await knex('books').select('*')
      console.log(books)
      res.status(200).json(books)
    } catch (err) {
      console.log(err.stack)
      res.status(500).json({ error: 'Failed to get books' })
    }
  })
  
  /* return configured express app */
  return app;
};

module.exports = { setupExpressServer };
