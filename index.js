const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const chefrecipes = require("./data/chef-recipes.json");

app.get("/", (req, res) => {
  res.send("Cusine Craft Server is running");
});

app.get("/v1/chefrecipes", (req, res) => res.send(chefrecipes));

app.get("/v1/chefdetails/:id", (req, res) => {
  const id = req.params.id;
  const query = chefrecipes.find((e) => e.id === id);
  res.send(query);
});

app.listen(port, () => console.log("Server is running port: ", port));
