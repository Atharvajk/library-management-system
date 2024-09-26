class Book {
    constructor(isbn, title, author, year) {
      this.isbn = isbn;
      this.title = title;
      this.author = author;
      this.year = year;
      this.isAvailable = true; // Indicates if the book is available for borrowing
    }
  }
  
  class Library {
    constructor() {
      this.books = []; // Array to hold all books in the library
    }
  
    // Adds a book to the library
    addBook(book) {
      this.books.push(book);
    }
  
    // Borrows a book if available
    borrowBook(isbn) {
      const book = this.books.find((b) => b.isbn === isbn && b.isAvailable);
      if (!book) {
        throw new Error('Book not available'); // Throws an error if the book is not available
      }
      book.isAvailable = false; // Mark the book as not available
    }
  
    // Returns a borrowed book
    returnBook(isbn) {
      const book = this.books.find((b) => b.isbn === isbn);
      if (!book) {
        throw new Error('Book not found'); // Throws an error if the book is not found in the library
      }
      book.isAvailable = true; // Mark the book as available
    }
  
    // Returns a list of available books
    viewAvailableBooks() {
      return this.books.filter((b) => b.isAvailable); // Returns only the books that are available
    }
  }
  
  module.exports = { Book, Library };
  