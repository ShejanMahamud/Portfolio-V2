import React from "react";
import { BsMedium } from "react-icons/bs";
import {
  FaDiscord,
  FaGithubAlt,
  FaLinkedinIn
} from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { MdRemoveRedEye } from "react-icons/md";
import { SlEnvolope } from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <header className="w-[80%] mx-auto lg:mt-52 mt-32 grid lg:grid-cols-2 grid-cols-1 row-auto items-center gap-16 lg:gap-0 lg:justify-items-end justify-items-center">
      <div className="order-last lg:order-first">
        <p className="font-space-mono text-[#D4D4D8] mb-2">Hey folks 👋</p>
        <h1 className="font-poppins font-bold text-5xl text-[#D4D4D8] mb-4">
          I'm{" "}
          <span className="font-space-mono text-5xl text-center text-transparent bg-clip-text bg-gradient-to-r from-violet-700 to-pink-700 ">
            Shejan Mahamud
          </span>
        </h1>
        <p
          data-text="FRONT-END DEVELOPER"
          className="glitch font-poppins font-bold lg:text-2xl text-xl text-[#D4D4D8] mb-6"
        >
          FRONT-END DEVELOPER
        </p>
        <p className="font-poppins text-gray-200 mb-4 lg:text-base text-sm">
          I'm a web designer who loves making cool stuff online. I create
          websites that look awesome and are easy to use. Let's bring your ideas
          to life on the web!
        </p>
        <p className="font-poppins text-gray-200 mb-4 lg:text-base text-sm">
  Currently studying in <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-violet-700 to-pink-700">BBA in Management at Rajshahi College, Rajshahi</span>
</p>
        <div className="flex items-center text-[#A78BFA] font-medium uppercase text-base mb-6">
          <div className="flex items-center border-l-2 border-t-2 border-b-2 border-opacity-10 px-6 py-3 border-gray-200 rounded-tl-full rounded-bl-full gap-2">
            <FiDownload />
            <a href='https://drive.usercontent.google.com/u/0/uc?id=1r3I8ZLAY_yXSe93rU0RrHe4TyvDdpEuL&export=download' download='filename'>Resume</a>
          </div>
          <a href='https://www.linkedin.com/in/md-shejanmahamud/' className="flex items-center border-2 px-6 py-3 border-gray-200 border-opacity-10 rounded-tr-full rounded-br-full gap-2">
            <MdRemoveRedEye />
            <span>Linkedin</span>
          </a>
        </div>
        <div className="flex items-center gap-5 text-2xl">
          <Link to={"https://github.com/ShejanMahamud"}>
            <FaGithubAlt className="text-gray-500 hover:text-[#A78BFA] hover:-mt-5 transition-all duration-500" />
          </Link>
          <Link to={"https://www.linkedin.com/in/md-shejanmahamud/"}>
            <FaLinkedinIn className="text-gray-500 hover:text-[#A78BFA] hover:-mt-5 transition-all duration-500" />
          </Link>
          <Link to={"mailto:dev.shejanmahamud@gmail.com"}>
            <SlEnvolope className="text-gray-500 hover:text-[#A78BFA] hover:-mt-5 transition-all duration-500" />
          </Link>
          <Link to={"https://discord.com/users/1247194880384569529"}>
            <FaDiscord className="text-gray-500 hover:text-[#A78BFA] hover:-mt-5 transition-all duration-500" />
          </Link>
          <Link to={"https://shejanmahamud.medium.com/"}>
            <BsMedium className="text-gray-500 hover:text-[#A78BFA] hover:-mt-5 transition-all duration-500" />
          </Link>
        </div>
      </div>
      <div className="rounded-2xl flex items-center justify-center rotate-3 order-first lg:order-last">
        <div className="rounded-2xl lg:w-[350px] w-[250px] lg:h-[350px] h-[250px] items-center justify-center flex border-r border-b lg:py-5 py-2 lg:px-5 px-2 border-[#473D64] relative top-5">
          <img
            src="https://i.ibb.co/QMRGHLw/linkedin-profile.jpg"
            alt=""
            className="rounded-2xl lg:w-[350px] w-[250px] lg:h-[350px] h-[250px] object-cover grayscale relative lg:-top-5 -top-3"
          />
        </div>
      </div>
    </header>
  );
};

export default Home;
