const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const {
    addBook,
    borrowBook,
    returnBook,
    viewAvailableBooks
  } = require('./src/Controller/LibraryController');
  
app.use(bodyParser.json());
app.post('/books', addBook);
app.put('/books/borrow/:isbn', borrowBook);
app.put('/books/return/:isbn', returnBook);
app.get('/books', viewAvailableBooks);

// Server setup
if (process.env.NODE_ENV !== 'test') {
    app.listen(3001, () => {
      console.log("Server is Running");
    });
  }
module.exports = app;
