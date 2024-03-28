import React from 'react';
import { MdNightlightRound } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='w-full'>
<nav className='lg:w-[80%] w-[90%] mx-auto lg:my-6 my-3 flex items-center gap-10 justify-between backdrop-blur-lg border-2 border-violet-500 border-opacity-10 px-5 lg:py-1 rounded-full font-poppins shadow-2xl fixed right-0 left-0 top-0 z-50'>
        <div className='flex items-center gap-10 font-medium text-sm text-gray-400 w-full'>
            <img src="letter-s.png" alt="logo.png" className='w-12 shadow-2xl'/>
            {/* <span className='py-3 text-transparent bg-clip-text bg-gradient-to-r from-violet-700 to-pink-700 font-bold text-lg shadow-2xl'>{'< S/ >'}</span> */}
            <ul className='hidden lg:flex items-center gap-10 uppercase'>
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

    <div className='w-full fixed bottom-0 backdrop-blur-lg px-5 py-4 flex items-center gap-5 border-t border-t-gray-100 border-opacity-10 z-50 text-gray-400 justify-between'>
    
    <NavLink to={'/'}  className={({ isActive }) =>
                      isActive
                        && "text-[#A78BFA]"
                         
                    }>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path></svg>
                      
                      </NavLink>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path></svg>

                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"></path></svg>

                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"></path></svg>

                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"></path></svg>
        </div>
    </div>
  )
}

export default Navbar