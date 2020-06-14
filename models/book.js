const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  id: { type: String, unique: true, required: true },
  title: { type: String, required: true },
  subtitle: String,
  authors: { type: Array, required: true },
  description: String,
  thumbnail: String,
  link: String
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;