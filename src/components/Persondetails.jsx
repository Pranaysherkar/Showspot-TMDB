import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncloadperson,
  remove_personDetails,
} from "../store/actions/personAction";
import { useNavigate, useParams, Link, useLocation } from "react-router-dom";
import Loader from "./Loader";
import noimage from "/no-image.svg";
import Cards from "./templates/Cards";
import Dropdown from "./templates/Dropdown";

function Persondetails() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { info } = useSelector((state) => state.person);
  const { id } = useParams();
  const [category, setcategory] = useState("movie");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => {
      dispatch(remove_personDetails());
    };
  }, [id]);

  document.title = "Showspot | Persondetails";
  console.log(info);

  return info ? (
    <div className="w-screen min-h-[100vh] md:p-10 px-5">
      <div className="w-screen flex flex-col md:flex-row gap-10 ">
        <div className="w-[45vh] ">
          <nav className="w-20 h-8 border-2 flex items-center justify-center rounded-lg gap-10 text-xl mb-5 hover:bg-sky-600">
            <Link onClick={() => navigate(-1)}>
              <i className="ri-arrow-left-fill text-xl "></i>
            </Link>
          </nav>

          <div className="image">
            <img
              className="h-[56vh] w-full rounded-md  object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] "
              src={
                info.detail.backdrop_path ||
                info.detail.poster_path ||
                info.detail.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      info.detail.backdrop_path ||
                      info.detail.poster_path ||
                      info.detail.profile_path
                    }`
                  : noimage
              }
              alt=""
            />
            <hr className="my-5 w-[44vh]" />
          </div>

          <div className="Links text-3xl flex gap-x-5 justify-center">
            <a
              target="_blank"
              href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id} `}
            >
              {info.externalid.wikidata_id && (
                <i className="ri-information-line hover:text-sky-600"></i>
              )}{" "}
            </a>
            <a
              target="_blank"
              href={`https://www.facebook.com/${info.externalid.facebook_id} `}
            >
              {info.externalid.facebook_id && (
                <i className="ri-facebook-circle-line hover:text-sky-600"></i>
              )}{" "}
            </a>
            <a
              target="_blank"
              href={`https://www.instagram.com/${info.externalid.instagram_id} `}
            >
              {info.externalid.instagram_id && (
                <i className="ri-instagram-line hover:text-sky-600"></i>
              )}{" "}
            </a>
            <a
              target="_blank"
              href={`https://www.twitter.com/${info.externalid.twitter_id} `}
            >
              {info.externalid.twitter_id && (
                <i className="ri-twitter-x-fill hover:text-sky-600"></i>
              )}{" "}
            </a>
          </div>
        </div>
        <div className="personal info md:py-12 ">
          <h1 className="md:text-4xl text-3xl font-semibold mb-5">{info.detail.name}</h1>
          <h1 className="text-2xl font-semibold mb-5">Personal Info </h1>
          <div className="flex md:flex-row flex-col gap-2">
            <h1 className="md:w-24 md:text-xl font-semibold">
              Know for{" "}
              <span className="text-sky-400">
                {info.detail.known_for_department}
              </span>{" "}
            </h1>
            <h1 className="md:w-24 md:text-xl font-semibold text-white">
              Gender{" "}
              <span className=" text-sky-400">
                {info.detail.gender === 2 ? `male` : `Female`}
              </span>
            </h1>
            <h1 className="md:w-28 md:text-xl font-semibold text-white">
              Birthday{" "}
              <span className="text-sky-400 ">{info.detail.birthday}</span>
            </h1>
            {info.detail.deathday && (
              <h1 className="md:w-28 md:text-xl font-semibold text-white">
                {" "}
                Deathday{" "}
                <span className="text-sky-400 ">{info.detail.deathday}</span>
              </h1>
            )}{" "}
            <h1 className="md:w-36 md:text-xl font-semibold text-white">
              Place of Birth{" "}
              <span className="text-sky-400 inline-block w-96">
                {info.detail.place_of_birth}
              </span>
            </h1>
          </div>
          <div className="my-5">
            <h1 className="text-2xl font-semibold text-white my-2">
              Biography
            </h1>
            <p className="text-zinc-400 w-11/12 tracking-tighter md:text-base text-sm md:tracking-normal ">{info.detail.biography}</p>
          </div>
        </div>
      </div>
      <hr className="my-5" />
      <h1 className="text-2xl font-semibold text-sky-400">Some Casting</h1>
      <Cards data={info.combinedCredits.cast} />
      <hr className="my-5" />

      <div className="actingDet w-11/12 py-10 h-[50vh] flex md:flex-row flex-col items-start gap-10 justify-center">
        <div className="heading flex gap-10 w-auto ">
        <h1 className="text-3xl font-semibold text-sky-400">Acting</h1>
        <Dropdown
            title="category"
            options={["tv", "movie"]}
            func={(e) => setcategory(e.target.value)}
          />
        </div>

        <div className="acting rounded-lg flex flex-col w-auto h-full overflow-x-hidden overflow-y-auto shadow-xl shadow-[rgba(139,187,238,0.3)] border-2 border-sky-200">
          {info[category + "Credits"].cast.map((c, i) => (
            <li
              key={i}
              className="w-full hover:text-slate-400 hover:bg-black text-lg duration-200 cursor-pointer capitalize p-5"
            >
              {category === "movie" ?  "Movie name :" : "Tv show :" }
              <Link to={`/${category}/details/${c.id}`}>
                <span>
                  {" "}
                  {c.name || c.original_name || c.title || c.original_title}
                </span>
                <span className="block"><i className="ri-user-star-line mr-1"></i> Character Name : {c.character}</span>
              </Link>
            </li>
          ))}
        </div>
      
      </div>
    </div>
  ) : (
    <Loader />
  );
}

export default Persondetails;
