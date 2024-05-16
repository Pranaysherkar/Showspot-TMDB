import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjZiYmFhY2ZkOTJlMTlkNTMwZDUzN2M3MzVkYzgxMCIsInN1YiI6IjY2NDQ1MTZlY2Y3M2VmMDkxZjgyOWNjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FC2BAQ7MlZPXwFSstWKn9CojonjhSTqb2ndwcf0QYnE",
  },
});

export default instance;
