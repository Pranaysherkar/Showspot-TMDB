import React from "react";
import { Link } from "react-router-dom";
import noimage from "/no-image.svg";

function Verticalcards({ data, title }) {
  return (
    <div className="w-screen p-5 bg-zinc-900 flex flex-wrap item-center justify-center gap-12">
      {data.map((data, index) => (
        <Link className="relative w-[35vh]" key={index}>
          <img
            className="h-[40vh] rounded-md  object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] "
            src={
              data.backdrop_path || data.poster_path || data.profile_path
                ? `https://image.tmdb.org/t/p/original/${
                    data.backdrop_path || data.poster_path || data.profile_path
                  }`
                : noimage
            }
            alt=""
          />
          <h1 className="text-xl font-medium text-zinc-300">
            {data.name ||
              data.original_name ||
              data.title ||
              data.original_title}
          </h1>
        {  data.vote_average && (
          <div className="absolute -right-7 bottom-24 bg-orange-400 w-14 h-14 rounded-full text-lg font-semibold flex items-center justify-center">
            {(data.vote_average * 10).toFixed()} <sup>%</sup>
          </div>
          )}
        </Link>
      ))}
    </div>
  );
}

export default Verticalcards;
