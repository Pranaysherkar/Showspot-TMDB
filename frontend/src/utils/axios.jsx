import axios from "axios";

// Replace with your actual deployed Netlify URL
const instance = axios.create({
  baseURL: "https://show-spot.netlify.app/.netlify/functions/movies", // New URL for serverless function
  headers: {
    accept: "application/json",
  },
});

export default instance;
