const mongoose = require("mongoose");

const trackSchema = new mongoose.Schema({
  track_id: String,
  title: String,
  artist: {
    artist_id: String,
    name: String,
    popularity: Number,
    followers: Number,
    genres: [String],
    avatar_url: String,
  },
  album: {
    album_id: String,
    name: String,
    release_date: String,
    cover_url: String,
    total_tracks: Number,
  },
  duration_ms: Number,
  preview_url: String,
  popularity: Number,
  added_at: String,
  explicit: Boolean,
  likes: Number,
  play_count: Number,
});

const playlistSchema = new mongoose.Schema({
  playlist_id: String,
  name: String,
  description: String,
  cover_url: String,
  tracks: [trackSchema],
});

module.exports = mongoose.model("Playlist", playlistSchema);
