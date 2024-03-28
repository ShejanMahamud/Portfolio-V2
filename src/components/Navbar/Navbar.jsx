import React from 'react';
import { MdNightlightRound } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='w-[80%] mx-auto my-6 flex items-center gap-10 justify-between backdrop-blur-lg border-2 border-violet-500 border-opacity-10 px-5 py-1 rounded-full font-poppins shadow-2xl fixed right-0 left-0 top-0 z-50'>
        <div className='flex items-center gap-10 font-medium text-sm text-gray-400'>
            <img src="logo.webp" alt="logo.png" className='w-12'/>
            <ul className='flex items-center gap-10 uppercase'>
                <NavLink to={'/'}  className={({ isActive }) =>
                      isActive
                        && "text-[#473D64]"
                         
                    }><li className='font-bold'>Home</li></NavLink>
                <li>About</li>
                <li>Projects</li>
                <li>Article</li>
                <li>Snippets</li>
            </ul>
        </div>
        <MdNightlightRound className='text-2xl text-gray-400'/>
        {/* <MdSunny /> */}
    </nav>
  )
}

export default Navbar