# Kata Library Management System

This project is a simple **Library Management System** built using **Node.js** and **Express.js** as an solution to problem statement provided by Incubyte.
It allows users to perform basic operations such as adding books, borrowing books, returning books, and viewing available books.

## Features

- **Add Books**: Add new books with details like ISBN, title, author, and publication year.
- **Borrow Books**: Borrow a book from the library if it's available.
- **Return Books**: Return a borrowed book to the library.
- **View Available Books**: View all books that are currently available in the library.

## Technologies Used

- Node.js
- Express.js
- Jest (for testing)
- Supertest (for API testing)

---

## Prerequisites

- **Node.js** (v14 or higher) and **npm** installed on your machine.
- **Git** to clone the repository.

---

## Setup Instructions

1. **Clone the repository**:
   
   ```bash
   git clone https://github.com/Atharvajk/library-management-system.git
   ```

2. **Navigate to the project directory and run:

```bash
npm install
```

## Start the development server:

```bash
npm start
```
The server should now be running on http://localhost:3001.

## Make API requests:

- Add a new book (POST /books): Send a request with book details.
- Borrow a book (PUT /books/borrow/:isbn): Borrow a book using its ISBN.
- Return a book (PUT /books/return/:isbn): Return a book by ISBN.
- View available books (GET /books/available): List all available books.

## Testing the Project
The project uses Jest and Supertest for testing. You can run the tests by following these steps:

1. Run all tests:

```bash

npm run test
```
2. Generate a test coverage report:

```bash

npm run test -- --coverage
```
## Viewing the Test Report
After running the command above, Jest will generate a detailed test report inside the coverage/ folder.

- To view the report:
- Open the coverage/ folder.
- Inside the folder, open the index.html file in your browser to view a detailed HTML report.
- The report will provide insights into test coverage, including which lines of code are covered by tests.

## API Endpoints
- POST /books: Add a new book to the library.

- PUT /books/borrow/:isbn: Borrow a book by its ISBN.

- PUT /books/return/:isbn: Return a book by its ISBN.

- GET /books/available: Get a list of available books in the library.
