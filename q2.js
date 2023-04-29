const express = require('express');
const app = express();

// example array of books
const books = [
  { isbn: '1234567890', title: 'Book 1', author: 'Author 1' },
  { isbn: '0987654321', title: 'Book 2', author: 'Author 2' },
  { isbn: '5432109876', title: 'Book 3', author: 'Author 3' }
];

// route to get a book by ISBN
app.get('/books/:isbn', (req, res) => {
  const book = books.find((book) => book.isbn === req.params.isbn);
  if (!book) {
    return res.status(404).send('Book not found');
  }
  res.send(book);
});

// start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
