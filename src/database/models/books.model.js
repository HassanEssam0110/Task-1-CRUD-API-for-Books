import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const bookSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
    publishedDate: { type: Date, required: true, trim: true },
  },
  { timestamps: true }
);

export const Book = models.Book || model("Book", bookSchema);
