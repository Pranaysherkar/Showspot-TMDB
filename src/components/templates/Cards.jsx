import React from "react";
import noimage from "/no-image.svg";
import { Link } from "react-router-dom";

function Cards({ data }) {
  return (
      <div className="sm:w-full w-screen h-[40vh] sm:h-[42vh] flex gap-5 overflow-y-hidden my-5 mx-2">
        {data.length > 0 ? data.map((data, index) => (
          <Link to={`/${data.media_type}/details/${data.id}`}
            key={index}
            className="min-w-[50vw] sm:min-w-[30%] lg:min-w-[20%] bg-slate-900 mt-3 mb-4 sm:mb-5 overflow-hidden rounded-md hover:bg-slate-700"
          >
            <img
              className="w-full h-[65%] lg:h-[55%] object-cover"
              src={
                data.backdrop_path || data.poster_path || data.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      data.backdrop_path ||
                      data.poster_path ||
                      data.profile_path
                    }`
                  : noimage
              }
              alt="..."
            />
            <div className="Details p-2 sm:h-[30%] lg:h-[45%]">
              <h1 className="sm:text-lg text-base font-semibold mt-1">
                {data.name ||
                  data.original_name ||
                  data.title ||
                  data.original_title}
              </h1>
              <p className="Description lg:mt-2 mt-1 text-xs sm:text-sm opacity-70">
                {data.overview.slice(0, 40)} 
                {data.overview && <Link to={`${data.media_type}/details/${data.id}`} className="text-zinc-400 hover:text-sky-300"> ...more</Link>}
              </p>
            </div>
          </Link>
        )) : <h1 className="text-2xl text-center font-semibold">No Data Found</h1>}
      </div>
  );
}

export default Cards;
