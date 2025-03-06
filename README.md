# REST API for CRUD Operations on a Book

## Objective

Create a REST API that allows users to perform CRUD (Create, Read, Update, Delete) operations on a book.

## Technologies Used

- **Node.js** (Runtime environment)
- **Express.js** (Web framework)
- **MongoDB** (Database)
- **Mongoose** (ODM for MongoDB)
- **Joi** (Validation library)

## Installation & Setup

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Steps

1. Clone this repository:
   ```bash
   git clone https://github.com/HassanEssam0110/Task-1-CRUD-API-for-Books
   cd your-repo
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and set up your MongoDB connection string:
   ```
  PORT=5000
  NODE_ENV="development"
  CONNECTION_DB_URI=mongodb://localhost:27017/booksdb
  
   ```
4. Start the server:
   ```bash
   npm start:dev
   ```

## API Endpoints

### 1. Create a new book

**POST api/v1/books**

#### Request Body:

```json
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "publishedDate": "1925-04-10"
}
```

#### Response:

```json
{
  "message": "Book created successfully",
  "book": {
    "_id": "64a123456789",
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "publishedDate": "1925-04-10"
  }
}
```

### 2. Retrieve all books

**GET api/v1/books**

#### Response:

```json
[
  {
    "_id": "64a123456789",
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "publishedDate": "1925-04-10"
  }
]
```

### 3. Retrieve a specific book by ID

**GET api/v1/books/:id**

#### Response:

```json
{
  "_id": "64a123456789",
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "publishedDate": "1925-04-10"
}
```

### 4. Update a specific book by ID

**PUT api/v1/books/:id**

#### Request Body:

```json
{
  "title": "The Great Gatsby (Updated)",
  "author": "F. Scott Fitzgerald",
  "publishedDate": "1925-04-10"
}
```

#### Response:

```json
{
  "message": "Book updated successfully",
  "book": {
    "_id": "64a123456789",
    "title": "The Great Gatsby (Updated)",
    "author": "F. Scott Fitzgerald",
    "publishedDate": "1925-04-10"
  }
}
```

### 5. Delete a specific book by ID

**DELETE api/v1/books/:id**

#### Response:

```json
{
  "message": "Book deleted successfully"
}
```

## Error Handling

- **400 Bad Request**: If the request data is invalid.
- **404 Not Found**: If the book is not found.
- **500 Internal Server Error**: For unexpected server errors.


