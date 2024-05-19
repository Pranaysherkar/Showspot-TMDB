import React from "react";
import { Link } from "react-router-dom";

function Header({ data }) {
  // console.log(data);
  return (
    <div
      style={{
        background: ` linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.4),rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.poster_path || data.profile_path
        })`,
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
      className="Poster w-full h-[50vh] flex flex-col justify-end items-start px-14 py-8"
    >
      <h1 className="Heading w-2/3 text-5xl font-black tracking-wider">
        {data.name || data.original_name || data.title || data.original_title}
      </h1>

      <p className="Description w-2/4 my-3">
        {data.overview.slice(0, 200)} 
        {data.overview && <Link to={`${data.media_type}/details/${data.id}`} className="text-sky-400 hover:text-sky-200">....more</Link>}
      </p>

      <p className="Information flex w-auto gap-1 items-center">
        {data.release_date && (
          <>
            <i className="ri-megaphone-fill  text-cyan-400 text-lg"></i>
           <span className="mr-5"> {data.release_date}</span>
          </>
        )}
        {data.media_type==="tv" ? ((
          <>
            <i className="ri-tv-line text-amber-200 text-lg"></i>
           <span className="uppercase tracking-wider"> {data.media_type}</span>
          </>
        )) :(
          <>
            <i className="ri-movie-line text-amber-200 text-lg"></i>
           <span className="uppercase tracking-wider"> {data.media_type}</span>
          </>
        )}
      </p>
      <Link to={`${data.media_type}/details/${data.id}/trailer`} className="bg-sky-600 hover:bg-sky-700 font-medium p-2 mt-4 rounded-md">Watch Trailer </Link>
    </div>
  );
}

export default Header;
