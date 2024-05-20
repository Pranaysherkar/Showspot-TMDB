import React from "react";
import { Link } from "react-router-dom";

function About() {
  document.title = "Showspot | About";
  return (
    <div
      style={{
        background: "  url(/about.jpg)",
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
      className="bg-zinc-900 h-screen w-screen"
    >
      <div className="w-[100vw] h-[100vh] bg-gray-800/75 backdrop-blur text-white">
        <h1 className="text-center text-5xl font-bold py-5">About Us</h1>
        <h1 className="ml-24 text-5xl font-bold"><i className="ri-movie-2-line text-sky-400"></i>Showspot</h1>
        <div className="w-full px-20 my-10  text-xl font-medium flex gap-5 flex-col items-center justify-center">
          <p>
            Welcome to{" "}
            <span className="text-sky-400 font-bold italic">ShowSpot</span>,
            your ultimate destination for discovering trending movies, TV shows,
            and the talented individuals who bring them to life. At ShowSpot, we
            leverage the power of the TMDB API to access a vast repository of
            entertainment data, providing you with up-to-date information on
            your favorite content. Whether you're a cinephile seeking the latest
            blockbusters or a TV enthusiast in search of compelling series,
            ShowSpot has you covered.
          </p>
          <p>
            Our intuitive search bar enables seamless exploration, allowing you
            to delve into detailed information about movies <span></span>, TV shows, and
            actors with ease. Each detail page offers a comprehensive overview,
            including title, description, release date, and content type,
            whether it's a thrilling TV series or a captivating film. But that's
            not all ShowSpot goes beyond mere information provision. Utilizing
            advanced algorithms, we curate personalized recommendations based on
            your viewing history and preferences, ensuring that you never miss
            out on your next binge-worthy obsession.
          </p>
          <p className=" italic underline">"
            For safety reasons, please note that this project is designed solely
            for educational purposes, with no intention to harm or misuse any
            data or individuals. We maintain a commitment to ethical use of
            data, ensuring no harm is inflicted. Our aim is to foster knowledge
            and understanding without any intent for misuse."
          </p>
        </div>
       <div className="w-10/12 mx-20 rounded-md flex gap-14 px-20 text-xl italic capitalize text-slate-300 font-semibold bg-sky-900/100">
        <h1 className="hover:text-sky-400 cursor-pointer"><i className=" font-extralight ri-verified-badge-line text-sky-300"></i> Created by Pranay</h1>
        <Link target="_blank" to={"https://www.linkedin.com/in/pranay-sherkar-6a0975234/"} className="hover:text-sky-400 cursor-pointer" ><i className=" font-extralight ri-linkedin-box-fill text-sky-300"></i> Linkdin</Link>
        <Link target="_blank" to={"https://www.instagram.com/neonbytesage_2003/"} className="hover:text-sky-400 cursor-pointer" ><i className=" font-extralight ri-instagram-line text-sky-300"></i> instagram</Link>
        <Link target="_blank" to={"https://github.com/Pranaysherkar"} className="hover:text-sky-400 cursor-pointer" ><i className=" font-extralight ri-github-fill text-sky-300"></i> github</Link>
        <h1 className="hover:text-sky-400 cursor-pointer lowercase"><i className=" font-extralight ri-mail-line text-sky-300"></i> pranaysherkar19@gmail.com</h1>
       </div>
      </div>
    </div>
  );
}

export default About;
