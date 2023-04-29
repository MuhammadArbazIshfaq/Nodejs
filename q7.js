const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// User database
let users = [
  {
    id: 1,
    username: 'john',
    password: 'password123',
  },
  {
    id: 2,
    username: 'jane',
    password: 'password456',
  },
];

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Find user by username
  const user = users.find((user) => user.username === username);

  // Check if user exists and password is correct
  if (user && user.password === password) {
    // Return a success message
    return res.status(200).json({ message: 'Login successful' });
  } else {
    // Return an error message
    return res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
