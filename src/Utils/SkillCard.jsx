const SkillCard = ({ title, description, level, icon }) => {
  return (
    <div className='flex items-center justify-start h-20 rounded-xl text-zinc-300 bg-gradient-to-l from-stone-900 to-neutral-900 ring-1 ring-stone-800 select-none group'>
      <div className='-mt-20 ml-6 bg-neutral-900 ring-1 ring-stone-800 rounded-xl rotate-45 duration-200 p-3 text-2xl backdrop-blur-lg flex items-center justify-center'>
        <div className="group-hover:scale-125 group-hover:duration-300 -rotate-45">
          {icon}
        </div>
      </div>
      <div className="p-4 w-full">
        <h3 className="text-md font-semibold text-zinc-300">{title}</h3>
        <div className="grid grid-cols-5 gap-2 items-center">
          <div className="col-span-3">
            <p className="text-zinc-400 truncate text-xs" title={description}>{description}</p>
          </div>
          <div className="col-span-2">
            <div className="flex space-x-0.5" title={level}>
              {[...Array(level).keys()].map((index) => (
                <div key={index} className="h-1.5 w-4 bg-violet-400"></div>
              ))}
              {[...Array(5 - level).keys()].map((index) => (
                <div key={index} className="h-1.5 w-4 bg-stone-700"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
