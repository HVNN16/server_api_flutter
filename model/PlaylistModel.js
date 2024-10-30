const mongoose = require("mongoose");

const trackSchema = new mongoose.Schema({
  title: { type: String, required: true, default: "Unknown Title" }, // Đặt giá trị mặc định nếu không có
  artist: {
    name: { type: String, required: true, default: "Unknown Artist" }, // Đặt giá trị mặc định cho artist
  },
});

const playlistSchema = new mongoose.Schema({
  playlist_id: { type: String, required: true },
  name: { type: String, required: true, default: "Unknown Playlist" }, // Đặt giá trị mặc định cho tên playlist
  description: { type: String, default: "" }, // Mô tả có thể để trống
  cover_url: { type: String, default: "" }, // URL có thể để trống nếu không có ảnh
  tracks: { type: [trackSchema], default: [] }, // Đặt mảng mặc định rỗng nếu không có track nào
});

module.exports = mongoose.model("Playlist", playlistSchema);
