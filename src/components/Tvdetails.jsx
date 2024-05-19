import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadtv, remove_tvDetails } from "../store/actions/tvActions";
import {
  useNavigate,
  useParams,
  Link,
  useLocation,
  Outlet,
} from "react-router-dom";
import Loader from "./Loader";
import noimage from "/no-image.svg";
import Cards from "./templates/Cards";
function Tvdetails() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { info } = useSelector((state) => state.tv);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadtv(id));
    return () => {
      dispatch(remove_tvDetails());
    };
  }, [id]);

  document.title = "Showspot | Tvdetails";

  return info ? (
    <div
      style={{
        background: ` linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 5)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="relative w-screen h-[200vh] px-20 py-2 text-white "
    >
      <nav className="w-[44vh] h-10 border-2 flex items-center justify-center rounded-lg gap-10 text-xl">
        <Link onClick={() => navigate(-1)}>
          <i className="ri-arrow-left-fill text-xl hover:text-sky-600"></i>
        </Link>
        <a target="_blank" href={info.detail.homepage}>
          {info.detail.homepage && (
            <i className="ri-external-link-fill hover:text-sky-600"></i>
          )}
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id} `}
        >
          {info.externalid.wikidata_id && (
            <i className="ri-information-line hover:text-sky-600"></i>
          )}{" "}
        </a>
        <a
          className="hover:text-sky-600"
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
        >
          {info.externalid.imdb_id && ` IMDB`}
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
          <div className="Detail-1 ml-20">
            <h1 className="text-5xl font-black">
              {info.detail.name ||
                info.detail.original_name ||
                info.detail.title ||
                info.detail.original_title}
              {info.detail.first_air_date && (
                <span className=" text-2xl text-zinc-200">
                  ({info.detail.first_air_date.split("-")[0]})
                </span>
              )}
            </h1>

            <div className="detail2 flex items-center gap-10 my-3">
              {info.detail.vote_average > 0 && (
                <>
                  <h1 className="text-2xl font-semibold w-20 tracking-wide">
                    User Socre
                  </h1>

                  <span className=" bg-sky-600 w-14 h-14 -ml-10 rounded-full text-lg font-semibold flex items-center justify-center">
                    {(info.detail.vote_average * 10).toFixed()} <sup>%</sup>
                  </span>
                </>
              )}
              {info.detail.first_air_date && (
                <h1 className="text-lg">
                  <i className="ri-calendar-event-line"></i>{" "}
                  {info.detail.first_air_date}
                </h1>
              )}
              {info.detail.genres && (
                <h1 className="text-lg">
                  <i className="ri-play-circle-line"></i>{" "}
                  {info.detail.genres.map((g) => g.name).join(", ")}
                </h1>
              )}
              {info.detail.runtime && (
                <h1 className="text-lg">
                  <i className="ri-timer-2-line"></i> {info.detail.runtime}min
                </h1>
              )}
            </div>

            <div className="tagline text-xl font-semibold italic opacity-70 tracking-wide">
              {info.detail.tagline}
            </div>
            {info.detail.overview && (
              <div className="overview">
                <h1 className="text-3xl font-medium mt-5 mb-2">Overview</h1>
                <p className="tracking-wide">{info.detail.overview}</p>
              </div>
            )}
            {info.translations && (
              <div className="">
                <h1 className="text-3xl font-medium mt-5 mb-2">
                  Tv Show Translated
                </h1>
                <p className="tracking-wide mb-5">
                  {info.translations.join(", ")}
                </p>
              </div>
            )}

            <Link
              className="text-xl bg-sky-600 p-2 rounded-md"
              to={`${pathname}/trailer`}
            >
              <i className="ri-play-fill"></i>Play Trailer
            </Link>
          </div>
        </div>

        <div className="Platforms gap-5 flex">
          {info.watchproviders && info.watchproviders.flatrate && (
            <div className="flex items-center gap-x-3">
              <h1 className="text-lg font-bold">Available on Platfroms</h1>
              {info.watchproviders.flatrate.map((w, i) => (
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
              {info.watchproviders.rent.map((w, i) => (
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
              {info.watchproviders.buy.map((w, i) => (
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
        <hr className="my-5" />
          {info.detail.seasons && (<h1 className="text-3xl font-semibold text-zinc-300">Seasons</h1>)}
        <div className="w-full flex overflow-y-hidden gap-2 my-2">
          {info.detail.seasons ? (info.detail.seasons.map((s, i) => (
            <div key={i} className="w-1/2 h-[35vh] rounded-md overflow-hidden">
              <img
                className="w-full h-[85%] object-cover mr-5"
                src={
                  s.backdrop_path || s.poster_path || s.profile_path
                    ? `https://image.tmdb.org/t/p/original/${
                        s.backdrop_path || s.poster_path || s.profile_path
                      }`
                    : noimage
                }
                alt="..."
              />
               <h1 className="text-lg font-semibold mt-1 text-center">
                {s.name}
              </h1>
            </div>
          ))):""}
        </div>

        <hr className="my-5" />
        <h1 className="text-3xl font-semibold text-zinc-300">
          Recommendations
        </h1>
        <Cards
          data={info.recommendations ? info.recommendations : info.similar}
        />
      </div>
      <Outlet />
    </div>
  ) : (
    <Loader />
  );
}

export default Tvdetails;
