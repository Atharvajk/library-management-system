const { Book, Library } = require('../Model/bookModel');

const library = new Library();

const addBook = (req, res) => {
  const { isbn, title, author, year } = req.body;
  // Validate required fields
  if (!isbn || !title || !author || !year) {
    return res.status(400).send({ error: 'Missing required book data' });
  }
  const book = new Book(isbn, title, author, year);
  library.addBook(book);
  res.status(201).send({ message: 'Book added successfully' });
};

const borrowBook = (req, res) => {
  const { isbn } = req.params;
  try {
    library.borrowBook(isbn);
    res.send({ message: 'Book borrowed successfully' });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const returnBook = (req, res) => {
  const { isbn } = req.params;
  try {
    library.returnBook(isbn);
    res.send({ message: 'Book returned successfully' });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const viewAvailableBooks = (req, res) => {
  const availableBooks = library.viewAvailableBooks();
  res.send(availableBooks);
};

module.exports = { addBook, borrowBook, returnBook, viewAvailableBooks };
