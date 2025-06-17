const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// Mettre les routes ici
app.post("/users", (req, res) => {
  const { name, email, age } = req.body;
  const newUser = { id: Date.now(), name, email, age };
  res.json(newUser);
});
