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
        
}