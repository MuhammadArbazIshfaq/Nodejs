const express = require('express');
const app = express();

// Define a route for getting the list of books
app.get('/books', (req, res) => {
  // Replace this with code to fetch the book list from the shop's database or API
  const bookList = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: '1984', author: 'George Orwell' }
  ];

  // Send the book list as a JSON response
  res.json(bookList);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
