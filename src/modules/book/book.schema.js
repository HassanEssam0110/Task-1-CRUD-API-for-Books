import Joi from "joi";
import { Types } from "mongoose";

const objectIdRule = (value, helpers) => {
  const isValid = Types.ObjectId.isValid(value);
  return isValid ? value : helpers.message("Invalid Object Id");
};

const getBookSchema = {
  params: Joi.object({
    id: Joi.string().custom(objectIdRule).required(),
  }),
};

const createBookSchema = {
  body: Joi.object({
    title: Joi.string().min(3).max(200).required().messages({
      "string.base": "Title must be a text.",
      "string.empty": "Title is required.",
      "string.min": "Title must be at least {#limit} characters long.",
      "string.max": "Title cannot exceed {#limit} characters.",
      "any.required": "Title is required.",
    }),

    author: Joi.string().min(3).max(200).required().messages({
      "string.base": "Author must be a text.",
      "string.empty": "Author is required.",
      "string.min": "Author must be at least {#limit} characters long.",
      "string.max": "Author cannot exceed {#limit} characters.",
      "any.required": "Author is required.",
    }),

    publishedDate: Joi.date().iso().required().messages({
      "date.base": "Published date must be a valid date.",
      "date.format": "Published date must be in ISO format (YYYY-MM-DD).",
      "any.required": "Published date is required.",
    }),
  }),
};

const updateBookSchema = {
  params: Joi.object({
    id: Joi.string().custom(objectIdRule).required(),
  }),
  body: Joi.object({
    title: Joi.string().min(3).max(200).optional().messages({
      "string.base": "Title must be a text.",
      "string.empty": "Title is required.",
      "string.min": "Title must be at least {#limit} characters long.",
      "string.max": "Title cannot exceed {#limit} characters.",
      "any.required": "Title is required.",
    }),

    author: Joi.string().min(3).max(200).optional().messages({
      "string.base": "Author must be a text.",
      "string.empty": "Author is required.",
      "string.min": "Author must be at least {#limit} characters long.",
      "string.max": "Author cannot exceed {#limit} characters.",
      "any.required": "Author is required.",
    }),

    publishedDate: Joi.date().iso().optional().messages({
      "date.base": "Published date must be a valid date.",
      "date.format": "Published date must be in ISO format (YYYY-MM-DD).",
      "any.required": "Published date is required.",
    }),
  }),
};

const deleteBookSchema = {
  params: Joi.object({
    id: Joi.string().custom(objectIdRule).required(),
  }),
};

export { getBookSchema, createBookSchema, updateBookSchema, deleteBookSchema };
