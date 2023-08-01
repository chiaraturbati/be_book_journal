const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  publicationYear: { type: Number },
  rating: { type: Number, min: 1, max: 5 },
  quote: { type: String },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
