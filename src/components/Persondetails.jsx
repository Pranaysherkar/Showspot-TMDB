import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadperson,remove_personDetails,} from "../store/actions/personAction";
import { useNavigate,useParams, Link, useLocation,} from "react-router-dom";
import Loader from "./Loader";
import noimage from "/no-image.svg";
import Cards from "./templates/Cards";
function Persondetails() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { info } = useSelector((state) => state.person);
  const { id } = useParams();
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
<div className="w-screen p-10 bg-zinc-">
<div className="w-screen flex gap-10 ">
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
      <div className="personal info py-12 ">
        <h1 className="text-4xl font-semibold mb-5">{info.detail.name}</h1>
        <h1 className="text-2xl font-semibold mb-5">Personal Info </h1>
        <div className="flex gap-2">
          <h1 className="w-24 text-xl font-semibold">
            Know for{" "}
            <span className="text-sky-400">
              {info.detail.known_for_department}
            </span>{" "}
          </h1>
          <h1 className="w-24 text-xl font-semibold text-white">
            Gender{" "}
            <span className=" text-sky-400">
              {info.detail.gender === 2 ? `male` : `Female`}
            </span>
          </h1>
          <h1 className="w-28 text-xl font-semibold text-white">
            Birthday{" "}
            <span className="text-sky-400 ">{info.detail.birthday}</span>
          </h1>
          {info.detail.deathday && (
            <h1 className="w-28 text-xl font-semibold text-white">
              {" "}
              Deathday{" "}
              <span className="text-sky-400 ">{info.detail.deathday}</span>
            </h1>
          )}{" "}
          <h1 className="w-36 text-xl font-semibold text-white">
          Place of Birth{" "}
            <span className="text-sky-400 inline-block w-96">{info.detail.place_of_birth}</span>
          </h1>
          
        </div>
        <div className="my-5">
          <h1 className="text-2xl font-semibold text-white my-2">Biography</h1>
          <p className="text-zinc-400 w-11/12" >{info.detail.biography}</p>
        </div>
      </div>
    </div>
    <h1 className="text-2xl font-semibold text-sky-400">Casting</h1>
<Cards data={info.combinedCredits.cast}/>
</div>
  ) : (
    <Loader />
  );
}

export default Persondetails;
