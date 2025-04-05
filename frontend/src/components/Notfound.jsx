import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Notfound() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Link onClick={() => navigate(-1)}>
        <i className="ri-close-large-fill absolute top-5 right-10 text-2xl hover:text-sky-600"></i>
      </Link>
      <img className="w-full md:h-full  " src="/404.gif" alt="" />
    </div>
  );
}

export default Notfound;
