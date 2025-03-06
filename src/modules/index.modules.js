import { AppError } from "../utils/app-error-class.utils.js";
import bookRouter from "./book/book.routes.js";

const bootstrap = (app) => {
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.use("/api/v1/books", bookRouter);

  // 404 Handler
  app.use("*", (req, res, next) => {
    next(
      new AppError(
        404,
        `This Route Not Found, ${req.method} ${req.originalUrl}`
      )
    );
  });

  app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json({
      message: err.message,
      error: {
        message: err.message,
        errors: err.errors,
        statusCode: err.statusCode,
        status: err.status,
        isOperational: err.isOperational,
        stack: process.env.NODE_ENV === "development" ? err.stack : undefined, // Show stack only in dev mode
      },
    });
  });
};

export { bootstrap };
