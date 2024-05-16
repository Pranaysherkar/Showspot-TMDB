import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";
import noimage from "/no-image.svg"

function Navbar() {
  const [query, setquery] = useState("");
  const [search, setsearch] = useState([]);

  const getSearch = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      // console.log(data);
      setsearch(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    getSearch();
  }, [query]);

  return (
    <div className="w-full h-[7vh] flex items-center justify-center my-2 relative ">
      <div className="w-1/2 h-5/6 flex items-center border border-zinc-500 rounded-xl overflow-hidden">
        <div className="w-[90%] h-full flex items-center">
          <input
            className="w-[95%] h-full bg-transparent outline-none px-2 text-lg"
            type="text"
            onChange={(e) => setquery(e.target.value)}
            value={query}
            placeholder="Search Movies"
          />
          {query.length > 0 && (
            <i
              onClick={() => setquery("")}
              className="ri-close-fill text-2xl hover:text-zinc-400 cursor-pointer"
            ></i>
          )}
        </div>
        <i className="ri-search-line w-[10%] h-full bg-zinc-800 text-2xl flex items-center justify-center cursor-pointer hover:text-zinc-400"></i>
      </div>
      <div className=" absolute w-[50%] max-h-[50vh] bg-zinc-700  text-base top-[100%] rounded-lg overflow-auto">
        {search.map((elem, index) => (
          <Link
            key={index}
            className="w-full p-4 tracking-wider flex items-center border-b hover:bg-zinc-500 font-semibold duration-300"
          >
            <img
              className="w-16 h-14 object-cover mr-5"
              src={
                elem.backdrop_path || elem.poster_path || elem.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      elem.backdrop_path ||
                      elem.poster_path ||
                      elem.profile_path
                    }`
                  : noimage
              }
              alt="..."
            />
            <span>
              {elem.name ||
                elem.original_name ||
                elem.title ||
                elem.original_title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
