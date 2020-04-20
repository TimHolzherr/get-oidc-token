const express = require("express");
const http = require("http");
const CWD = process.cwd();
const app = express();
const open = require("open");

function getToken(authority, clientId, scope, port) {
  app.set("view engine", "pug");
  app.get("/", function (req, res) {
    res.render("index", {
      authority: authority,
      clientId: clientId,
      scope: scope,
    });
  });
  app.use(express.static(CWD));
  app.use(express.json());
  app.post("/token", function (req, res) {
    console.log(req.body.token);
    res.send();
    setTimeout(() => {
      process.exit();
    }, 100);
  });
  const server = http.createServer(app);
  server.listen(port);
  setTimeout(() => {
    open(`http://localhost:${port}/`);
  });
}

module.exports = getToken;
