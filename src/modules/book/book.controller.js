import * as handler from "../handler-factory.modules.js";
import { Book } from "../../database/models/index.model.js";

// GET /books        Retrieve a list of all books.
const getAllBooks = handler.getAll(Book);
// GET /books/:id      Retrieve a specific book by ID.
const getBook = handler.getOne(Book);

// POST /books        Create a new book.
const createBook = handler.createOne(Book);

// PUT /books/:id      Update a specific book by ID.
const updateBook = handler.updateOne(Book);

// DELETE /books/:id    Delete a specific book by ID.
const deleteeBook = handler.deleteOne(Book);

export { getAllBooks, getBook, createBook, updateBook, deleteeBook };
