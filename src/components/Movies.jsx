import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "./templates/Navbar";
import Dropdown from "./templates/Dropdown";
import axios from "../utils/axios";
import Loader from "./Loader";
import Verticalcards from "./templates/Verticalcards";
import InfiniteScroll from "react-infinite-scroll-component";

function Movies() {
  const navigate = useNavigate();
  const [category, setcategory] = useState("now_playing");
  const [movie, setmovie] = useState([]);
  const [page, setpage] = useState(1);
  const [hasmore, sethasmore] = useState(true);
  const getMovie = async () => {
    try {
      const { data } = await axios.get(`movie/${category}?page=${page}`);
      if (data.results.length > 0) {
        setpage((prev) => prev + 1);
        setmovie((prevState) => [...prevState, ...data.results]);
      } else {
        sethasmore(false);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };
  const refreshHandler = () => {
    if (movie.length === 0) {
      getMovie();
    } else {
      setpage(1);
      setmovie([]);
      getMovie();
    }
  };
  useEffect(() => {
    refreshHandler();
  }, [category]);
  document.title = "ShowSpot | Movies " + category.toLowerCase();
  return movie.length > 0 ? (
    <div className="w-screen h-screen bg-zinc-900">
      <div className="px-4 md:w-full md:h-[10vh] flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <Link onClick={() => navigate(-1)}>
            <i className="ri-arrow-left-fill text-xl hover:text-sky-600"></i>
          </Link>
          <h1 className="md:w-60 md:text-2xl text-3xl my-1 font-semibold text-zinc-200"><span className="capitalize text-sky-400" >{category}</span>{" "}Movies</h1>
        </div>
        <Navbar />
        <div className="flex gap-2">
          <Dropdown
            title="Category"
            options={["popular","top_rated","upcoming","now_playing"]}
            func={(e) => setcategory(e.target.value)}
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={movie.length}
        next={getMovie}
        // inverse={true} //
        hasMore={true}
        loader={<h4>Loading...</h4>}
        scrollableTarget="scrollableDiv"
      >
        <Verticalcards data={movie} title="movie" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
}

export default Movies;
