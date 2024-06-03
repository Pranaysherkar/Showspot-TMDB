import React from "react";
import { Link } from "react-router-dom";

function Sidenavbar({shownav,setshownav}) {
  return (
    <div className={`${shownav ? `absolute bg-[#18181B] z-20` : `hidden`} md:relative md:block md:w-[20%] h-full border-r border-slate-200 p-5 md:p-10`}>
      <h1 className="md:text-2xl text-lg ">
        <i className="ri-movie-2-line md:mr-2 mr-1 text-sky-400 sm:text-3xl "></i>
        <span>ShowSpot <i className="ri-close-large-line md:hidden ml-5 text" onClick={() => setshownav((prev) => !prev)} ></i></span>
      </h1>
      <nav className="flex flex-col gap-1 md:gap-2 md:text-lg text-zinc-500 tracking-wide font-medium mb-10">
        <h1 className="text-xl font-semibold mt-12 mb-5 text-slate-200 ">
          New Feeds
        </h1>
        <Link to={"/trending"} className="hover:bg-sky-600 hover:text-white px-3 py-2 duration-300 rounded-lg">
          <i className="ri-fire-line mr-4"></i>Trending
        </Link>
        <Link to={"/popular"} className="hover:bg-sky-600 hover:text-white px-3 py-2 duration-300 rounded-lg">
          <i className="ri-sparkling-line mr-4"></i>Popular
        </Link>
        <Link to={"/movie"} className="hover:bg-sky-600 hover:text-white px-3 py-2 duration-300 rounded-lg">
          <i className="ri-movie-line mr-4"></i>Movies
        </Link>
        <Link to={"/tv"} className="hover:bg-sky-600 hover:text-white px-3 py-2 duration-300 rounded-lg">
          <i className="ri-tv-line mr-4"></i>Tv shows
        </Link>
        <Link to={"/person"} className="hover:bg-sky-600 hover:text-white px-3 py-2 duration-300 rounded-lg">
          <i className="ri-group-line mr-4"></i>People
        </Link>
      </nav>
      <hr className="border-none h-[1px] bg-zinc-400 " />

      <nav className="flex flex-col gap-2 text-lg text-zinc-500 tracking-wide font-medium">
        <h1 className="text-lg font-semibold mt-10 mb-4 text-slate-200 tracking-wider">
        Information
        </h1>
        <Link to={"/about"} className="hover:bg-zinc-600 hover:text-white px-3 py-2 duration-300 rounded-lg">
          <i className="ri-information-line mr-4"></i>About
        </Link>
        <Link target="_blank" to={"https://www.linkedin.com/in/pranay-sherkar-6a0975234/"} className="hover:bg-zinc-600 hover:text-sky-400 px-3 py-2 duration-300 rounded-lg">
          <i className="ri-linkedin-box-fill mr-4"></i>LinkedIn
        </Link>
      </nav>
    </div>
  );
}

export default Sidenavbar;
