
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
