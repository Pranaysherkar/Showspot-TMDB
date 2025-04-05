const axios = require('axios');

// Get the API key from environment variables
const TMDB_API_KEY = process.env.TMDB_API_KEY;

// Create an axios instance with the base URL set to TMDB
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/', // Base URL for TMDB API
});

exports.handler = async (event, context) => {
  try {
    // Call the TMDB API for trending movies
    const response = await instance.get('trending/movie/week', {
      params: { api_key: TMDB_API_KEY }
    });

    // Return the response data
    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    };
  } catch (error) {
    console.error('Error fetching data from TMDB:', error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch data from TMDB' })
    };
  }
};
