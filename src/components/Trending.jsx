import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./templates/Navbar";
import Dropdown from "./templates/Dropdown";
import axios from "../utils/axios";
import Loader from "./Loader";
import Verticalcards from "./templates/Verticalcards";

function Trending() {
  const navigate = useNavigate();
  const [category, setcategory] = useState("all");
  const [duration, setduration] = useState("day");
  const [trending, settrending] = useState(null);

  const getTrending= async () => {
    try {
      const { data } = await axios.get(`trending/${category}/${duration}`);
      console.log(data);
      settrending(data.results);
    } catch (error) {
      console.log("Error:", error);
    }
  };
  useEffect(() => {
    getTrending();
  }, [category,duration])
  
  return trending ? (
    <div className="px-5 py-2 w-screen h-screen">
      <div className="w-full h-[10vh] flex items-center justify-between">
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
            func={(e)=>setcategory(e.target.value)} 
                     />
          <Dropdown title="Duration" options={["Week", "day"]}  func={(e)=>setduration(e.target.value)}   />
        </div>
      </div>
      <Verticalcards data={trending} title={category}/>
    </div>
  ) : (
    <Loader/>
  )
}

export default Trending;
