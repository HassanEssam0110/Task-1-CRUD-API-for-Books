import { Router } from "express";
import * as controller from "./book.controller.js";
import * as middleware from "../../middlewares/index.middlewares.js";
import * as schema from "./book.schema.js";

const bookRouter = Router();

bookRouter
  .route("/")
  .get(controller.getAllBooks)
  .post(middleware.validator(schema.createBookSchema), controller.createBook);

bookRouter
  .route("/:id")
  .get(middleware.validator(schema.getBookSchema), controller.getBook)
  .put(middleware.validator(schema.updateBookSchema), controller.updateBook)
  .delete(
    middleware.validator(schema.deleteBookSchema),
    controller.deleteeBook
  );

export default bookRouter;
