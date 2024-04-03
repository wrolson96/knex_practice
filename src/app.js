const express = require("express");
const app = express();
const port = 8081;
const knex = require("knex")(require("../knexfile.js")["development"]);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("application up and running");
});

app.listen(port, () => {
  console.log("app is up and running");
});

app.get("/pets", (req, res) => {
  knex("pet")
    .select("*")
    .then((data) => res.status(200).json(data))
    .catch((err) =>
      res.status(404).json({
        message:
          "The data you are looking for could not be found. Please try again",
      })
    );
});
