import React from 'react'
import HeadingText from '../Utils/HeadingText'

const ProjectSection = () => {
  return (
    <div className='my-28 w-[80%] mx-auto'>
        <HeadingText bgText={'FEATURED'} topText={'PROJECTS'}/>

<div className='grid lg:grid-cols-2 grid-cols-1 row-auto items-center gap-10 w-full my-20 font-poppins'>
<div class="opacity-100 transform-none">
  <article class="relative w-full min-h-full p-4 md:p-6 lg:p-8 flex flex-col ring-1 ring-stone-100 dark:ring-stone-900 bg-gradient-to-tr from-white to-zinc-50 dark:bg-gradient-to-tr dark:from-stone-900 dark:to-neutral-900 hover:-translate-y-0.5 rounded-xl transition group">
    <a href="/projects/eat-cake">
      <span class="absolute inset-0 rounded-xl"></span>
      <span class="absolute top-0 right-0 text-xs font-semibold text-violet-500 dark:text-violet-400 py-2 px-4 bg-zinc-100 dark:bg-zinc-800 rounded-bl-xl rounded-tr-xl">Single Page</span>
    </a>
    <img src="quran.png" alt="" className='lg:w-16 w-14'/>
    <div>
      <h3 class="text-lg text-zinc-700 dark:text-zinc-300 font-bold my-3">Al-Quran Bangla</h3>
      <p class="text-zinc-600 dark:text-zinc-400 text-sm lg:text-base">Read, Listen & Share Al Quran in Bangla, English & Arabic</p>
      <p class="text-zinc-600 dark:text-zinc-400 text-sm lg:text-base mt-3 font-mukti">আল-কুরআন পড়ুন, শুনুন এবং তাফসির দেখুন বাংলায় এবং শেয়ার করুন । তোমাদের মধ্যে সর্বশ্রেষ্ঠ ব্যক্তি সেই; যে নিজে কুরআন শেখে ও অপরকে শিক্ষা দেয়</p>
    </div>
  </article>
</div>
<div class="opacity-100 transform-none">
  <article class="relative w-full min-h-full p-4 md:p-6 lg:p-8 flex flex-col ring-1 ring-stone-100 dark:ring-stone-900 bg-gradient-to-tr from-white to-zinc-50 dark:bg-gradient-to-tr dark:from-stone-900 dark:to-neutral-900 hover:-translate-y-0.5 rounded-xl transition group">
    <a href="/projects/eat-cake">
      <span class="absolute inset-0 rounded-xl"></span>
      <span class="absolute top-0 right-0 text-xs font-semibold text-violet-500 dark:text-violet-400 py-2 px-4 bg-zinc-100 dark:bg-zinc-800 rounded-bl-xl rounded-tr-xl">Full Stack</span>
    </a>
    <img src="logo.webp" alt="" className='w-20'/>
    <div>
      <h3 class="text-lg text-zinc-700 dark:text-zinc-300 font-bold my-3">Eat Cake</h3>
      <p class="text-zinc-600 dark:text-zinc-400">Different categories handmade cake is available for sale</p>
      <p class="text-zinc-600 dark:text-zinc-400">Registered users will get dashboard access where manage their orders and give review</p>
    </div>
  </article>
</div>
</div>

    </div>
  )
}

export default ProjectSection