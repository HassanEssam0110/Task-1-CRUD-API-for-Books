import { AppError } from "../utils/index.utils.js";

const reqKeys = ["body", "params", "query", "headers", "file"];

export const validator = (schema) => {
  return (req, res, next) => {
    let errors = [];

    for (const key of reqKeys) {
      if (schema[key]) {
        const { error } = schema[key].validate(req[key], { abortEarly: false });

        if (error) {
          errors.push(
            ...error.details.map((err) => ({
              key: err.context.key,
              message: err.message,
            }))
          );
        }
      }
    }

    // If there are any validation errors, format and pass them to the next middleware as an AppError
    if (errors.length) {
      return next(new AppError(422, "Validation failed", errors));
    }

    next();
  };
};
