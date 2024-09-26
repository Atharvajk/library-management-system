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


  it('should borrow a book from the library', async () => {
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

});
