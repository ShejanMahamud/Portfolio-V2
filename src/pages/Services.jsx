import React from 'react';
import { FaBug } from "react-icons/fa";
import { GoTerminal } from "react-icons/go";
import { LuFocus } from "react-icons/lu";
import HeadingText from '../Utils/HeadingText';
import WhatIDoCard from '../Utils/WhatIDoCard';

const Services = () => {
  return (
    <div className='w-[80%] mx-auto mt-40'>
        <HeadingText bgText={'SERVICES'} topText={'WHAT I DO'}/>

        <div className='w-full grid lg:grid-cols-3 grid-cols-1 row-auto items-center gap-10 mt-20'>
        <WhatIDoCard title={'Responsive Design'} description={'I make responsive and pixel-perfect UI'} icon={LuFocus}/>
        <WhatIDoCard title={'Web Development'} description={'I build web application with modern technologies'} icon={GoTerminal}/>
        <WhatIDoCard title={'Bug Fixing'} description={'I fix bugs and error & redesign UI'} icon={FaBug}/>
        </div>
    </div>
  )
}

export default Services