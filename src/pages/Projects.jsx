import React from 'react'
import { IoBriefcaseOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import HeadingText from '../Utils/HeadingText'


const Projects = () => {

const navigate = useNavigate()

  return (
    <div className='mt-40 w-[80%] mx-auto'>
        <HeadingText bgText={'FEATURED'} topText={'PROJECTS'}/>

<div className='grid lg:grid-cols-2 grid-cols-1 row-auto items-center gap-10 w-full my-20 font-poppins'>
<div onClick={()=>navigate('/project/1')} className="cursor-pointer opacity-100 transform-none">
  <article className="relative w-full min-h-full p-4 md:p-6 lg:p-8 flex flex-col ring-1 ring-stone-900 bg-gradient-to-tr from-stone-900 to-neutral-900 hover:-translate-y-0.5 rounded-xl transition group">
    <div>
    <span className="absolute inset-0 rounded-xl"></span>
      <span className="absolute top-0 right-0 text-xs font-semibold text-violet-400 py-2 px-4 bg-zinc-800 rounded-bl-xl rounded-tr-xl">Full Stack</span>
    </div>
    <img src="https://gist.githubusercontent.com/ShejanMahamud/55027157d9ed288e0c490b8f59878179/raw/b6f06773886c4314ccd39286a026afc0549f431e/bookify.svg" alt="" className='lg:w-16 w-14'/>
    <div>
      <h3 className="text-lg text-zinc-300 font-bold my-3">Bookify</h3>
      <p className="text-zinc-400 text-sm lg:text-base">Library Management Web App for Librarians</p>
      <p className="text-zinc-400 text-sm lg:text-base mt-3 font-mukti">Manage Library as Librarian & Borrowed, Return and Read Book as User</p>
    </div>
  </article>
</div>
<div onClick={()=>navigate('/project/2')} className="opacity-100 transform-none">
  <article className="relative w-full min-h-full p-4 md:p-6 lg:p-8 flex flex-col ring-1 ring-stone-900 bg-gradient-to-tr from-stone-900 to-neutral-900 hover:-translate-y-0.5 rounded-xl transition group">
    <div>
    <span className="absolute inset-0 rounded-xl"></span>
      <span className="absolute top-0 right-0 text-xs font-semibold text-violet-400 py-2 px-4 bg-zinc-800 rounded-bl-xl rounded-tr-xl">Full Stack</span>
    </div>
    <IoBriefcaseOutline className='text-6xl text-blue-500'/> 
    <div>
      <h3 className="text-lg text-zinc-300 font-bold my-3">Jobify</h3>
      <p className="text-zinc-400 text-sm lg:text-base">Job Portal Web App</p>
      <p className="text-zinc-400 text-sm lg:text-base mt-3">A job portal where companies can add jobs, candidates can apply and admin can control the app</p>
    </div>
  </article>
</div>

</div>

    </div>
  )
}

export default Projects
