import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import noimage from "/no-image.svg";

function Navbar() {
  const [query, setquery] = useState("");
  const [search, setsearch] = useState([]);
  const navigate = useNavigate();

  const getSearch = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setsearch(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    if (query.length > 0) {
      getSearch();
    } else {
      setsearch([]);
    }
  }, [query]);

  const handleLinkClick = (path) => {
    navigate(path);
    setquery(""); // Clear the search query
    setsearch([]); // Clear the search results
  };

  return (
    <div className="w-full h-[8vh] flex items-center justify-center my-1 relative z-30">
      <div className="Search_Input w-1/2 h-5/6 flex items-center border border-zinc-500 rounded-xl overflow-hidden">
        <div className="w-[80vh] h-full flex items-center">
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

      {search.length > 0 && (
        <div className="Search_suggestion absolute w-[50%] max-h-[50vh] bg-black/40 backdrop-blur-md text-base top-[100%] rounded-lg overflow-auto">
          {search.map((elem, index) => (
            <div
              key={index}
              className="w-full p-4 tracking-wider flex items-center border-b hover:bg-zinc-500 font-semibold duration-300 cursor-pointer"
              onClick={() => handleLinkClick(`/${elem.media_type}/details/${elem.id}`)}
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;
