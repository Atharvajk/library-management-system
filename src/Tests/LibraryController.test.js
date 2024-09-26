const request = require('supertest');
const app = require('../../app');

describe('Library Management System API Tests', () => {

  // Reset the state of the library before each test
  beforeEach(() => {
    // Reset the library by restarting the app or mocking the library instance
    jest.resetModules();  // Reset the module registry
  });

  it('should add a new book to the library', async () => {
    const response = await request(app)
      .post('/books')
      .send({ 
        isbn: '1111', 
        title: 'The Pragmatic Programmer', 
        author: 'Andrew Hunt', 
        year: 1999 
      });
    
    expect(response.statusCode).toBe(201);
    expect(response.body.message).toBe('Book added successfully');
  });

  it('should return an error if required book data is missing', async () => {
    const response = await request(app)
      .post('/books')
      .send({ title: 'Incomplete Data' });
    
    expect(response.statusCode).toBe(400);  // Assuming validation is added
  });

  it('should borrow a book from the library', async () => {
    // await request(app)
    //   .post('/books')
    //   .send({ isbn: '1111', title: 'The Pragmatic Programmer', author: 'Andrew Hunt', year: 1999 });
    
    const response = await request(app)
      .put('/books/borrow/1111');
    
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Book borrowed successfully');
  });

  it('should return a borrowed book to the library', async () => {
    const response = await request(app)
      .put('/books/return/1111');
    
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Book returned successfully');
  });

  it('should view all available books', async () => {
    const response = await request(app)
      .get('/books');
    
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBe(1); // After returning, book should be available
  });

  it('should throw an error when trying to borrow an unavailable book', async () => {
    await request(app).put('/books/borrow/999'); // Borrow the book again
    const response = await request(app).put('/books/borrow/999'); // Try borrowing it again
    
    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe('Book not available');
  });

  it('should throw an error when returning a non-existent book', async () => {
    const response = await request(app)
      .put('/books/return/9999');
    
    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe('Book not found');
  });
});
