import React from 'react';
import { FaDiscord, FaGithubAlt, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { MdRemoveRedEye } from "react-icons/md";
import { SlEnvolope } from "react-icons/sl";

const Header = () => {
  return (
    <header className='w-[80%] mx-auto my-52 grid grid-cols-2 row-auto items-center  justify-items-end'>
        <div className=''>
            <p className='font-space-mono text-[#D4D4D8] mb-2'>Hey folks 👋</p>
            <h1 className='font-poppins font-bold text-5xl text-[#D4D4D8] mb-4'>I'm <span className='font-space-mono text-5xl text-center text-transparent bg-clip-text bg-gradient-to-r from-violet-700 to-pink-700'>Shejan Mahamud</span></h1>
            <p className='font-poppins font-bold text-2xl text-[#D4D4D8] mb-6'>FRONT-END DEVELOPER</p>
            <p className='font-poppins text-gray-200 mb-8'>I'm a web designer who loves making cool stuff online. I create websites that look awesome and are easy to use. Let's bring your ideas to life on the web!</p>
            <div className='flex items-center text-[#A78BFA] font-medium uppercase text-base mb-6'>
                <div className='flex items-center border-l-2 border-t-2 border-b-2 border-opacity-10 px-6 py-3 border-gray-200 rounded-tl-full rounded-bl-full gap-2'>
                <FiDownload />
                <span>Resume</span>
                </div>
                <div className='flex items-center border-2 px-6 py-3 border-gray-200 border-opacity-10 rounded-tr-full rounded-br-full gap-2'>
                <MdRemoveRedEye />
                <span>Resume</span>
                </div>
            </div>
            <div className='flex items-center gap-5 text-2xl'>
            <FaGithubAlt className='text-gray-500 hover:text-[#A78BFA] hover:relative hover:-top-3'/>
            <FaLinkedinIn className='text-gray-500 hover:text-[#A78BFA] hover:relative hover:-top-3'/>
            <SlEnvolope className='text-gray-500 hover:text-[#A78BFA] hover:relative hover:-top-3'/>
            <FaDiscord className='text-gray-500 hover:text-[#A78BFA] hover:relative hover:-top-3'/>
            <FaInstagram className='text-gray-500 hover:text-[#A78BFA] hover:relative hover:-top-3'/>
            </div>
        </div>
        <div className=' rounded-2xl flex items-center justify-center rotate-3'>
            <div className='rounded-2xl h-[350px] w-[350px] items-center justify-center flex border-r border-b py-5 px-5 border-[#473D64] relative top-5'>
            <img src="hero.jpg" alt="" className='rounded-2xl w-[350px] h-[350px] object-cover grayscale relative -top-5'/>
            </div>
        </div>
    </header>
  )
}

export default Header