const mongoose = require("mongoose");

const trackSchema = new mongoose.Schema({
  title: String,
  artist: {
    name: String,
  },
});

const playlistSchema = new mongoose.Schema({
  playlist_id: String,
  name: String,
  description: String,
  cover_url: String,
  tracks: [trackSchema],
});

module.exports = mongoose.model("Playlist", playlistSchema);
