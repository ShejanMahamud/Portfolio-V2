import React from "react";
import { BsMedium } from "react-icons/bs";
import { GoProjectRoadmap } from "react-icons/go";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoCodeWorking, IoDocumentTextOutline } from "react-icons/io5";
import { RiHomeLine } from "react-icons/ri";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { SlEnvolope } from "react-icons/sl";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const routes = ["/", "/skills", "/projects", "/resume"];

  const currentIndex = routes.indexOf(location.pathname);

  const handleBackClick = () => {
    if (currentIndex > 0) {
      navigate(routes[currentIndex - 1]);
    }
  };

  const handleForwardClick = () => {
    if (currentIndex < routes.length - 1) {
      navigate(routes[currentIndex + 1]);
    }
  };

  return (
    <div className="w-full relative z-50">
      <nav className="lg:w-[80%] w-[90%] mx-auto lg:my-6 my-3 flex items-center gap-10 justify-between border-2 border-violet-500 border-opacity-10 px-5 lg:py-2 rounded-full font-poppins shadow-2xl fixed right-0 left-0 top-0 z-50 backdrop-filter backdrop-blur-md bg-opacity-50 dark:backdrop-filter dark:backdrop-blur-md dark:bg-opacity-50 bg-neutral-900">
        <div
          onClick={() => navigate("/")}
          className="cursor-pointer flex items-center gap-10 font-medium text-sm  w-full"
        >
          <img
            src="https://i.ibb.co/0YXnVg0/letter-s.png"
            alt="logo.png"
            className="w-12 shadow-2xl"
          />
          {/* <span className='py-3 text-transparent bg-clip-text bg-gradient-to-r from-violet-700 to-pink-700 font-bold text-lg shadow-2xl'>{'< S/ >'}</span> */}
        </div>
        <div className="flex items-center gap-3 text-white lg:hidden md:hidden *:border-2 *:border-violet-500 *:border-opacity-10 *:p-1 *:rounded-full">
          <button onClick={handleBackClick}><IoIosArrowBack /></button>
          <button onClick={handleForwardClick}><IoIosArrowForward/></button>
        </div>
        <ul className="hidden lg:flex md:flex items-center gap-10 uppercase text-sm px-5">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "text-violet-500 font-semibold"
                : "text-gray-400 font-medium"
            }
          >
            Home
          </NavLink>

          <NavLink
            to={"/skills"}
            className={({ isActive }) =>
              isActive
                ? "text-violet-500 font-semibold"
                : "text-gray-400 font-medium"
            }
          >
            Skills
          </NavLink>
          <NavLink
            to={"/projects"}
            className={({ isActive }) =>
              isActive
                ? "text-violet-500 font-semibold"
                : "text-gray-400 font-medium"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to={"/resume"}
            className={({ isActive }) =>
              isActive
                ? "text-violet-500 font-semibold"
                : "text-gray-400 font-medium"
            }
          >
            Resume
          </NavLink>
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              isActive
                ? "text-violet-500 font-semibold"
                : "text-gray-400 font-medium"
            }
          >
            Contact
          </NavLink>
          <NavLink
            to={"https://shejanmahamud.medium.com/"}
            className={({ isActive }) =>
              isActive
                ? "text-violet-500 font-semibold"
                : "text-gray-400 font-medium"
            }
          >
            Articles
          </NavLink>
        </ul>
      </nav>

      <div className="w-full fixed bottom-0 backdrop-blur-lg px-5 py-4 flex items-center gap-5 border-t border-t-gray-100 border-opacity-10 z-50 text-gray-400 justify-between lg:hidden md:hidden">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "text-violet-500 font-semibold"
              : "text-gray-400 font-medium"
          }
        >
          <div className='flex flex-col items-center gap-1'>
                      <RiHomeLine className='text-2xl'/>
                      <span className='text-xs font-normal'>Home</span>
                      </div>
        </NavLink>
        <NavLink
          to={"/skills"}
          className={({ isActive }) =>
            isActive
              ? "text-violet-500 font-semibold"
              : "text-gray-400 font-medium"
          }
        >
          <div className='flex flex-col items-center gap-1'>
                      <IoCodeWorking className='text-2xl'/>
                      <span className='text-xs font-normal'>Skills</span>
                      </div>
        </NavLink>
        <NavLink
          to={"/projects"}
          className={({ isActive }) =>
            isActive
              ? "text-violet-500 font-semibold"
              : "text-gray-400 font-medium"
          }
        >
          <div className='flex flex-col items-center gap-1'>
                      <GoProjectRoadmap className='text-2xl'/>
                      <span className='text-xs font-normal'>Projects</span>
                      </div>
        </NavLink>
        <NavLink
          to={"/resume"}
          className={({ isActive }) =>
            isActive
              ? "text-violet-500 font-semibold"
              : "text-gray-400 font-medium"
          }
        >
          <div className="flex flex-col items-center gap-1">
            <IoDocumentTextOutline className="text-2xl" />
            <span className="text-xs font-normal">Resume</span>
          </div>
        </NavLink>
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            isActive
              ? "text-violet-500 font-semibold"
              : "text-gray-400 font-medium"
          }
        >
          <div className="flex flex-col items-center gap-1">
            <SlEnvolope className="text-2xl" />
            <span className="text-xs font-normal">Contact</span>
          </div>
        </NavLink>
        <NavLink
          to={"https://shejanmahamud.medium.com/"}
          className={({ isActive }) =>
            isActive
              ? "text-violet-500 font-semibold"
              : "text-gray-400 font-medium"
          }
        >
          <div className="flex flex-col items-center gap-1">
            <BsMedium className="text-2xl" />
            <span className="text-xs font-normal">Articles</span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
