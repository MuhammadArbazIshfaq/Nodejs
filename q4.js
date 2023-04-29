const express = require('express');
const app = express();

// import the book model and initialize the database connection

const Book = require('./models/book'); // assuming the book model is defined in a separate file
const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost/myapp', { useNewUrlParser: true, useUnifiedTopology: true });

// define a route to get all books based on title
app.get('/books/:title', async (req, res) => {
  const title = req.params.title;
  const books = await Book.find({ title: title });
  res.json(books);
});

// start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
