const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// Route pour obtenir la liste des utilisateurs
app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', age: 28 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 24 },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', age: 32 },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', age: 29 }
  ];
  res.json(users);
});

// Mettre les routes ici
