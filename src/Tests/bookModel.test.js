const { Book, Library } = require('../model/bookModel');

describe('Book Model', () => {
  it('should create a new Book with correct properties', () => {
    const book = new Book('1234', 'Clean Code', 'Robert C. Martin', 2008);
    expect(book.isbn).toBe('1234');
    expect(book.title).toBe('Clean Code');
    expect(book.author).toBe('Robert C. Martin');
    expect(book.year).toBe(2008);
    expect(book.isAvailable).toBe(true);
  });
});

describe('Library Model', () => {
  let library;

  beforeEach(() => {
    library = new Library();
  });

  it('should add a book to the library', () => {
    const book = new Book('1234', 'Clean Code', 'Robert C. Martin', 2008);
    library.addBook(book);
    expect(library.books.length).toBe(1);
    expect(library.books[0].isbn).toBe('1234');
  });

  it('should allow borrowing an available book', () => {
    const book = new Book('1234', 'Clean Code', 'Robert C. Martin', 2008);
    library.addBook(book);
    library.borrowBook('1234');
    expect(library.books[0].isAvailable).toBe(false);
  });


  it('should return a borrowed book', () => {
    const book = new Book('1234', 'Clean Code', 'Robert C. Martin', 2008);
    library.addBook(book);
    library.borrowBook('1234');
    library.returnBook('1234');
    
    expect(library.books[0].isAvailable).toBe(true);
  });


  it('should view all available books', () => {
    const book1 = new Book('1234', 'Clean Code', 'Robert C. Martin', 2008);
    const book2 = new Book('5678', 'The Pragmatic Programmer', 'Andrew Hunt', 1999);
    
    library.addBook(book1);
    library.addBook(book2);
    
    library.borrowBook('1234');
    const availableBooks = library.viewAvailableBooks();
    
    expect(availableBooks.length).toBe(1);
    expect(availableBooks[0].isbn).toBe('5678');
  });
});
