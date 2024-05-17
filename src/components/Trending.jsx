import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./templates/Navbar";
import Dropdown from "./templates/Dropdown";
import axios from "../utils/axios";
import Loader from "./Loader";
import Verticalcards from "./templates/Verticalcards";
import InfiniteScroll from "react-infinite-scroll-component";

function Trending() {
  const navigate = useNavigate();
  const [category, setcategory] = useState("all");
  const [duration, setduration] = useState("day");
  const [trending, settrending] = useState([]);
  const [page, setpage] = useState(1);
  const [hasmore, sethasmore] = useState(true)

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`trending/${category}/${duration}?page=${page}`);
      console.log(data);
      // settrending(data.results);
      if (data.results.length > 0) {
        setpage((prev) => prev + 1);
        settrending((prevState) => [...prevState, ...data.results]);
      }else{
        sethasmore(false)
      }
      console.log(data.results);
    } catch (error) {
      console.log("Error:", error);
    }
  };
  const refreshHandler = () => {
    if (trending.length === 0) {
      getTrending();
    } else {
      setpage(1);
      settrending([]);
      getTrending()
    }
  };
  useEffect(() => {
    refreshHandler()
  }, [category, duration]);

  return trending.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="px-4 w-full h-[10vh] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link onClick={() => navigate(-1)}>
            <i className="ri-arrow-left-fill text-xl"></i>
          </Link>
          <h1 className="text-2xl font-semibold text-zinc-400">Trending</h1>
        </div>
        <Navbar />
        <div className="flex gap-2">
          <Dropdown
            title="Category"
            options={["movie", "tv", "all"]}
            func={(e) => setcategory(e.target.value)}
          />
          <Dropdown
            title="Duration"
            options={["week", "day"]}
            func={(e) => setduration(e.target.value)}
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={trending.length}
        next={getTrending}
        // inverse={true} //
        hasMore={true}
        loader={<h4>Loading...</h4>}
        scrollableTarget="scrollableDiv"
      >
        <Verticalcards data={trending} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
}

export default Trending;
