// Import required modules
const express = require('express');
const books = require('./books.json');

// Create an instance of the Express application
const app = express();

// Define a route to retrieve books by author
app.get('/books/:author', (req, res) => {
  const author = req.params.author;
  const authorBooks = books.filter(book => book.author === author);
  res.json(authorBooks);
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
