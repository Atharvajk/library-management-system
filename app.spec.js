// Importing all the test files to run them centrally
require('./src/Tests/LibraryController.test');
require('./src/Tests/bookModel.test');
require('./src/Tests/libraryModel.test');

// You can also group the tests with `describe` if needed
describe('Library Management System Test Suite', () => {
  // Importing tests for the Book model
  describe('Book Model Tests', () => {
    require('./src/Tests/bookModel.test');
});

  // Importing tests for the Library model
  describe('Library Model Tests', () => {
    require('./src/Tests/libraryModel.test');
});

  // Importing tests for the API (Controller)
  describe('Book Controller API Tests', () => {
    require('./src/Tests/LibraryController.test');
});
});
