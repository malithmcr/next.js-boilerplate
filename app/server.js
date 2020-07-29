const express = require("express");
const next = require("next");
const dotenv = require("dotenv");

/**
* Server side rendering setup
*/

dotenv.config();
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express(); //Start the server

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log("> Forum header service is ready on http://localhost:3000");
    });
  })
  .catch((error) => {
    console.error(error.stack);
    process.exit(1);
  });
