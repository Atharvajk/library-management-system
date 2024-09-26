const { Library, Book } = require('../Model/bookModel');

describe('Additional Tests for Library Model', () => {
  let library;

  beforeEach(() => {
    library = new Library();
  });

  it('should handle an empty library when viewing available books', () => {
    const availableBooks = library.viewAvailableBooks();
    expect(availableBooks.length).toBe(0);
  });

  it('should handle adding multiple books', () => {
    const book1 = new Book('1234', 'Clean Code', 'Robert C. Martin', 2008);
    const book2 = new Book('5678', 'Refactoring', 'Martin Fowler', 1999);
    
    library.addBook(book1);
    library.addBook(book2);
    
    expect(library.books.length).toBe(2);
    expect(library.books[0].isbn).toBe('1234');
    expect(library.books[1].isbn).toBe('5678');
  });

  it('should ensure borrowing a non-existent book throws an error', () => {
    expect(() => library.borrowBook('9999')).toThrow('Book not available');
  });
});
