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
  const [shownav, setshownav] = useState(false);

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
       <Sidenavbar shownav={shownav}setshownav={setshownav}/> 
      <div className="w-full md:w-[80%] h-full overflow-auto overflow-x-hidden">
        <div className="w-full flex flex-col sm:flex-row  sm:items-center mt-2 px-1 ">
          <h1 className="text-2xl md:hidden flex gap-8 sm:justify-start items-end">
            <button
              className="w-14 sm:w-8 z-10 cursor-pointer text-gray-300 border-t rounded-xl "
            onClick ={() => setshownav((prev) => !prev)}
            >
              {" "}
              <i className="ri-menu-fold-4-line text-xl cursor-pointer"></i>
            </button>
            <span className="flex">
              {" "}
              <i className="ri-movie-2-line  sm:m-0 text-sky-400 text-3xl "></i>{" "}
              ShowSpot
            </span>
          </h1>
          <Navbar />
        </div>

        {wallpaper && trending ? (
          <>
            <Header data={wallpaper} />

            <div className="sm:m-5 mx-5 my-2 flex items-center gap-20">
              <h1 className="text-xl sm:text-3xl font-bold ">Trending</h1>
              <Dropdown
                title="Category"
                options={["movie", "tv", "all"]}
                func={(e) => setcategory(e.target.value)}
              />
            </div>

            <Cards data={trending} />
          </>
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
}

export default Home;
