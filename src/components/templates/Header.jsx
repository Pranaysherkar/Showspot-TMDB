import React from "react";
import { Link } from "react-router-dom";
//1.32
function Header({ data }) {
  console.log(data);
  return (
    <div
      style={{
        background: ` linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.4),rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.poster_path || data.profile_path
        })`,
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[60vh] flex flex-col justify-end p-14"
    >
      <h1 className="w-3/4 text-5xl font-black tracking-wider">
        {data.name || data.original_name || data.title || data.original_title}
      </h1>
      <p className="w-2/3 my-3 ">
        {data.overview.slice(0, 200)} ....
        <Link className="text-sky-400">more</Link>
      </p>
      <p className="flex w-auto gap-1 items-center">
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
    </div>
  );
}

export default Header;

//"tv"