const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recordSchema = new Schema({
  title: { type: String },
  authors: { type: String },
  description: { type: String },
  image: { type: String },
  link: { type: String },
});

const Record = mongoose.model("Record", recordSchema);

module.exports = Record;
