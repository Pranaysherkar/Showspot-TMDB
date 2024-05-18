import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "./templates/Navbar";
import Dropdown from "./templates/Dropdown";
import axios from "../utils/axios";
import Loader from "./Loader";
import Verticalcards from "./templates/Verticalcards";
import InfiniteScroll from "react-infinite-scroll-component";

function People() {
    const navigate = useNavigate();
    const [category, setcategory] = useState("popular");
    const [person, setperson] = useState([]);
    const [page, setpage] = useState(1);
    const [hasmore, sethasmore] = useState(true);
    const getPerson = async () => {
      try {
        const { data } = await axios.get(`person/${category}?page=${page}`);
        if (data.results.length > 0) {
          setpage((prev) => prev + 1);
          setperson((prevState) => [...prevState, ...data.results]);
        } else {
          sethasmore(false);
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };
    const refreshHandler = () => {
      if (person.length === 0) {
        getPerson();
      } else {
        setpage(1);
        setperson([]);
        getPerson();
      }
    };
    useEffect(() => {
      refreshHandler();
    }, [category]);
    document.title = "ShowSpot | Person  " + category.toLowerCase();
    return person.length > 0 ? (
      <div className="w-screen h-screen">
        <div className="px-4 w-full h-[10vh] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link onClick={() => navigate(-1)}>
              <i className="ri-arrow-left-fill text-xl hover:text-sky-600"></i>
            </Link>
            <h1 className=" w-56 text-2xl font-semibold text-zinc-200">
              <span className="capitalize text-sky-400">{category}</span>{" "}Celebrity
            </h1>
          </div>
          <Navbar />
        </div>
  
        <InfiniteScroll
          dataLength={person.length}
          next={getPerson}
          // inverse={true} //
          hasMore={true}
          loader={<h4>Loading...</h4>}
          scrollableTarget="scrollableDiv"
        >
          <Verticalcards data={person} title="person" />
        </InfiniteScroll>
      </div>
    ) : (
      <Loader />
    );
}

export default People