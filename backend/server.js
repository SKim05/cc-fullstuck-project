const express = require("express");
const path = require('path');
const cors = require('cors');

const setupExpressServer = () => {
  const app = express();
  app.use(cors());

  app.use(express.static(path.join(__dirname, '../build')))

  app.use(express.json());


  // GET /teapot - modifying status:418
  app.get("/teapot", (req, res) => {
    //リクエストが来たときの処理
    res.status(418).end();
  });

  // GET /hello - world
  app.get("/api/hello", (req, res) => {
    //リクエストが来たときの処理
    res.json({message: "Hello from the server!"})
  });

  app.get("/api/test", (req, res) => {
    res.send("TEST")
  })
  
  /* return configured express app */
  return app;
};

module.exports = { setupExpressServer };
