import React, { useEffect, useState } from "react";
import Sidenavbar from "./templates/Sidenavbar";
import Navbar from "./templates/Navbar";
import Header from "./templates/Header";
import axios from "../utils/axios";

function Home() {
  document.title = "ShowSpot | Homepage ";
  const [wallpaper, setwallpaper] = useState(null);

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

  useEffect(() => {
    !wallpaper && getWallpaper();
  }, []);
  return (
    <>
      <Sidenavbar />
      <div className="w-[80%] h-full">
        <Navbar />
       {wallpaper ? (<Header data={wallpaper}/>): <h1  className="text-5xl " >Loading...</h1> }
      </div>
    </>
  );
}

export default Home;
