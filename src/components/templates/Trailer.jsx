import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Notfound from "../Notfound";

function Trailer() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const video = useSelector((state) => state[category].info.videos);
  const hasVideo =video && video.key;
  return (
    <div className="absolute z-10 w-10/12 rounded-md top-1 left-28 h-screen flex items-center justify-center bg-[#18181ba3] backdrop-blur-sm">
      { hasVideo && video.key ? (
        <>
          <Link onClick={() => navigate(-1)}>
            <i className="ri-close-large-fill absolute top-5 right-10 text-2xl hover:text-sky-600"></i>
          </Link>
          <ReactPlayer
            height={600}
            width={1200}
            url={`https://www.youtube.com/watch?v=${video.key}`}
          ></ReactPlayer>
        </>
      ) : (
        <Notfound />
      )}
    </div>
  );
}

export default Trailer;
