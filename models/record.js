const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recordSchema = new Schema({
  artwork: { type: String },
  title: { type: String },
  artist: { type: String },
  releaseYear: { type: Number },
  genre: { type: String },
});

const Record = mongoose.model("Record", recordSchema);

module.exports = Record;
