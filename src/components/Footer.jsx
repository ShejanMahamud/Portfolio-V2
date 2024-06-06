import React from 'react';

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (

 <div className='w-full border-t-2 border-violet-500 mt-28 py-2 flex items-center justify-center border-opacity-10'>
            <p className='text-[#767F8C] text-sm'>@ {currentYear} Shejan Mahamud - All rights Reserved</p>
    </div>
  );
}

export default Footer;
