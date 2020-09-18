const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const albumSchema = new Schema({
  artwork: { type: String },
  title: { type: String },
  artist: { type: String },
  releaseYear: { type: Number },
  genre: { type: String },
});

const Album = mongoose.model("Album", albumSchema);

module.exports = Album;
