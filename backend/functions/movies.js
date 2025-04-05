const axios = require("axios");

exports.handler = async () => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/week",
      {
        params: {
          api_key: process.env.TMDB_API_KEY,
        },
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.error("TMDB Fetch Error:", error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch data from TMDB" }),
    };
  }
};
