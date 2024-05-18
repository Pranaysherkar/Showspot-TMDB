import React from "react";
import { Link } from "react-router-dom";

function Sidenavbar() {

  return (
    <div className="w-[20%] h-full border-r border-slate-200 p-10">
      <h1 className="text-2xl">
        <i className="ri-movie-2-line mr-2 text-sky-400 text-3xl "></i>
        <span>ShowSpot</span>
      </h1>
      <nav className="flex flex-col gap-2 text-lg text-zinc-500 tracking-wide font-medium mb-10">
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
          ShowSpot Details
        </h1>
        <Link className="hover:bg-zinc-600 hover:text-white px-3 py-2 duration-300 rounded-lg">
          <i className="ri-information-line mr-4"></i>About
        </Link>
        <Link className="hover:bg-zinc-600 hover:text-white px-3 py-2 duration-300 rounded-lg">
          <i className="ri-phone-fill mr-4"></i>Contact us
        </Link>
      </nav>
    </div>
  );
}

export default Sidenavbar;
