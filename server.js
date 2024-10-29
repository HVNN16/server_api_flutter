require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Playlist = require("./model/PlaylistModel");

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Kết nối thành công tới MongoDB"))
  .catch((err) => console.error("Lỗi kết nối MongoDB:", err));

// Tạo API endpoint GET /api/data
app.get("/api/data", async (req, res) => {
  try {
    const playlists = await Playlist.find(); 
    res.status(200).json(playlists);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Khởi động server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server đang chạy trên cổng ${PORT}`));
