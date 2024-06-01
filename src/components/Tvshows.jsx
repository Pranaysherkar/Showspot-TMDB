import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "./templates/Navbar";
import Dropdown from "./templates/Dropdown";
import axios from "../utils/axios";
import Loader from "./Loader";
import Verticalcards from "./templates/Verticalcards";
import InfiniteScroll from "react-infinite-scroll-component";

function Tvshows() {
  const navigate = useNavigate();
  const [category, setcategory] = useState("airing_today");
  const [Tv, setTv] = useState([]);
  const [page, setpage] = useState(1);
  const [hasmore, sethasmore] = useState(true);
  const getTv = async () => {
    try {
      const { data } = await axios.get(`tv/${category}?page=${page}`);
      if (data.results.length > 0) {
        setpage((prev) => prev + 1);
        setTv((prevState) => [...prevState, ...data.results]);
      } else {
        sethasmore(false);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };
  const refreshHandler = () => {
    if (Tv.length === 0) {
      getTv();
    } else {
      setpage(1);
      setTv([]);
      getTv();
    }
  };
  useEffect(() => {
    refreshHandler();
  }, [category]);
  document.title = "ShowSpot | Tv Shows " + category.toLowerCase();
  return Tv.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="px-4 md:w-full md:h-[10vh] flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <Link onClick={() => navigate(-1)}>
            <i className="ri-arrow-left-fill text-xl hover:text-sky-600"></i>
          </Link>
          <h1 className="md:w-56 md:text-2xl text-3xl my-1 font-semibold text-zinc-200">
            Tv{" "}<span className="capitalize text-sky-400">{category}</span>
          </h1>
        </div>
        <Navbar />
        <div className="flex gap-2">
          <Dropdown
            title="Category"
            options={["popular", "top_rated", "on_the_air", "airing_today"]}
            func={(e) => setcategory(e.target.value)}
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={Tv.length}
        next={getTv}
        // inverse={true} //
        hasMore={true}
        loader={<h4>Loading...</h4>}
        scrollableTarget="scrollableDiv"
      >
        <Verticalcards data={Tv} title="tv" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
}

export default Tvshows;
