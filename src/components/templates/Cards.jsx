import React from "react";
import noimage from "/no-image.svg";
import { Link } from "react-router-dom";

function Cards({ data }) {
  return (
      <div className="w-full h-[42vh] flex gap-5 overflow-y-hidden m-5">
        {data.length > 0 ? data.map((data, index) => (
          <Link to={`/${data.media_type}/details/${data.id}`}
            key={index}
            className="min-w-[18%] bg-slate-900 mb-5 overflow-hidden rounded-md hover:bg-slate-700"
          >
            <img
              className="w-full h-[55%] object-cover mr-5"
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
            <div className="Details p-2 h-[45%]">
              <h1 className="text-lg font-semibold mt-1">
                {data.name ||
                  data.original_name ||
                  data.title ||
                  data.original_title}
              </h1>
              <p className="Description mt-2 text-sm opacity-70">
                {data.overview.slice(0, 40)} 
                {data.overview && <Link className="text-zinc-400"> ...more</Link>}
              </p>
            </div>
          </Link>
        )) : <h1 className="text-2xl text-center font-semibold">No Data Found</h1>}
      </div>
  );
}

export default Cards;
