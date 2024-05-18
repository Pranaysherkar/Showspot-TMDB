import React, { useEffect, useState } from "react";
import Sidenavbar from "./templates/Sidenavbar";
import Navbar from "./templates/Navbar";
import Header from "./templates/Header";
import axios from "../utils/axios";
import Cards from "./templates/Cards";
import Dropdown from "./templates/Dropdown";
import Loader from "./Loader";

function Home() {
  document.title = "ShowSpot | Homepage ";
  const [wallpaper, setwallpaper] = useState(null);
  const [trending, settrending] = useState(null);
  const [category, setcategory] = useState("all");

  const getWallpaper = async () => {
    try {
      const { data } = await axios.get(`trending/all/day`);
      const randomdata =
        data.results[(Math.random() * data.results.length).toFixed()];
      setwallpaper(randomdata);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const trendingWallpaper = async () => {
    try {
      const { data } = await axios.get(`trending/${category}/day`);
      settrending(data.results);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    !wallpaper && getWallpaper();
    trendingWallpaper();
  }, [category]);

  return (
    <>
      <Sidenavbar />
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
        <Navbar />
        {wallpaper && trending ? (
          <>
            <Header data={wallpaper} />

            <div className="m-5 flex gap-20">
              <h1 className="text-3xl font-bold ">Trending</h1>
              <Dropdown title="Category" options={["movie", "tv", "all"]} func={(e)=> setcategory(e.target.value)} />
            </div>

            <Cards data={trending} />
          </>
        ) : (
          <Loader/>
        )}
      </div>
    </>
  );
}

export default Home;
