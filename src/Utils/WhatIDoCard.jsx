import React from 'react';

const WhatIDoCard = ({title, description, icon}) => {

const IconCompo = icon;

  return (
    <div class="p-6 min-h-[200px] md:min-h-[180px] lg:min-h-[200px] xl:min-h-[190px] flex items-center justify-end bg-gradient-to-tl from-white to-zinc-50 dark:bg-gradient-to-tl dark:from-stone-900 dark:to-neutral-900 ring-1 ring-stone-200 dark:ring-stone-800 rounded-lg overflow-hidden relative duration-200 group"><div class="-top-3 left-2 flex items-center justify-center -rotate-45 absolute"><div><IconCompo className='text-[80px] p-2 group-hover:p-1.5 mt-6 text-zinc-200 dark:text-neutral-800 duration-200'/></div></div><div class="ml-12 text-right space-y-2"><h3 class="text-2xl text-zinc-600 dark:text-zinc-400 font-semibold">{title}</h3><p class="text-sm text-zinc-600 dark:text-zinc-400">{description}</p></div></div>
  )
}

export default WhatIDoCard