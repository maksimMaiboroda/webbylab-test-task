const { Schema, model } = require("mongoose");

const FilmSchema = new Schema({
  title: { type: String, required: true },
  releaseYear: { type: Number, required: true },
  format: { type: String, required: true },
  stars: { type: String, required: true },
});

module.exports = model("Film", FilmSchema);
