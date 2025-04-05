const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

const TMDB_API_KEY = process.env.TMDB_API_KEY;

// Example Route to fetch trending movies
app.get("/api/movies", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week`,
      {
        params: { api_key: TMDB_API_KEY },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error("TMDB Error:", error.message);
    res.status(500).json({ error: "Failed to fetch data from TMDB" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
