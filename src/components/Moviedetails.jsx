import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncloadMovie,
  remove_movieDetails,
} from "../store/actions/movieActions";
import { useNavigate, useParams, Link, useLocation } from "react-router-dom";
import Loader from "./Loader";
import noimage from "/no-image.svg";
import Cards from "./templates/Cards";

function Moviedetails() {
  const {pathname} =useLocation();
  const navigate = useNavigate();
  const { info } = useSelector((state) => state.movie);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadMovie(id));
    return () => {
      dispatch(remove_movieDetails());
    };
  }, [id]);
  return info ? (
    <div
      style={{
        background: ` linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 5)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-screen h-[150vh] px-24 py-5 text-white "
    >

      <nav className="w-[44vh] h-10 border-2 flex items-center justify-center rounded-lg gap-10 text-xl">
        <Link onClick={() => navigate(-1)}>
          <i className="ri-arrow-left-fill text-xl hover:text-sky-600"></i>
        </Link>
        <a target="_blank" href={info.detail.homepage}>
          <i className="ri-external-link-fill hover:text-sky-600"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="ri-information-line hover:text-sky-600"></i>
        </a>
        <a
        className="hover:text-sky-600"
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
        >
         IMDB
        </a>
      </nav>
      
      <div className="w-full">

        <div className="flex my-10">
          {" "}
          <img
            className="h-[56vh] w-[44vh] rounded-md  object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] "
            src={
              info.detail.backdrop_path || info.detail.poster_path
                ? `https://image.tmdb.org/t/p/original/${
                    info.detail.backdrop_path || info.detail.poster_path
                  }`
                : noimage
            }
            alt=""
          />

          <div className="Detail1 ml-20">

            <h1 className="text-5xl font-black">
              {info.detail.name ||
                info.detail.original_name ||
                info.detail.title ||
                info.detail.original_title}
              <span className=" text-2xl text-zinc-200">
                ({info.detail.release_date.split("-")[0]})
              </span>
            </h1>

            <div className="detail2 flex items-center gap-10 my-3">
              <h1 className="text-2xl font-semibold w-20 tracking-wide">User Socre</h1>
              {info.detail.vote_average && (
                <span className=" bg-sky-600 w-14 h-14 -ml-10 rounded-full text-lg font-semibold flex items-center justify-center">
                  {(info.detail.vote_average * 10).toFixed()} <sup>%</sup>
                </span>
              )}
              <h1 className="text-lg"><i className="ri-calendar-event-line"></i>{" "}{info.detail.release_date}</h1>
              <h1 className="text-lg"><i class="ri-play-circle-line"></i>{" "}{info.detail.genres.map((g)=>g.name).join(",")}</h1>
              <h1 className="text-lg"><i class="ri-timer-2-line"></i>{" "}{info.detail.runtime}min</h1>
            </div>

            <div className="tagline text-xl font-semibold italic opacity-70 tracking-wide">
              {info.detail.tagline}
            </div>
            <div className="overview">
              <h1 className="text-3xl font-medium mt-5 mb-2">Overview</h1>
              <p className="tracking-wide">{info.detail.overview}</p>
            </div>
            <div className="">
              <h1 className="text-3xl font-medium mt-5 mb-2">Movie Translated</h1>
              <p className="tracking-wide mb-5">{info.translations.join(", ")}</p>
            </div>
            <Link className="text-xl bg-sky-600 p-2 rounded-md" to={`${pathname}/trailer`}><i class="ri-play-fill"></i>Play Trailer</Link>
          </div>

        </div>
      
        <div className="Platforms gap-5 flex">
          {info.watchproviders && info.watchproviders.flatrate && (
            <div className="flex items-center gap-x-3">
              <h1 className="text-lg font-bold">Available on Platfroms</h1>
              {info.watchproviders.flatrate.map((w,i) => (
                <img
                key={i}
                  title={w.provider_name}
                  className="w-12 h-12 object-cover rounded-md"
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                />
              ))}
            </div>
          )}
          {info.watchproviders && info.watchproviders.rent && (
            <div className="flex items-center gap-x-3 ">
              <h1 className="text-lg font-bold">Available on Rent</h1>
              {info.watchproviders.rent.map((w,i) => (
                <img
                key={i}
                  title={w.provider_name}
                  className="w-12 h-12 object-cover rounded-md"
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                />
              ))}
            </div>
          )}
          {info.watchproviders && info.watchproviders.buy && (
            <div className="flex items-center gap-x-3 ">
              <h1 className="text-lg font-bold">Available to Buy</h1>
              {info.watchproviders.buy.map((w,i) => (
                <img
                key={i}
                  title={w.provider_name}
                  className="w-12 h-12 object-cover rounded-md"
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                />
              ))}
            </div>
          )}
        </div>
        <hr className="my-5"/>
        <h1 className="text-3xl font-semibold text-zinc-300">Recommendations</h1>
       <Cards data={info.recommendations ? info.recommendations : info.similar}/>
      </div>
    </div>
  ) : (
    <Loader />
  );
}

export default Moviedetails;
