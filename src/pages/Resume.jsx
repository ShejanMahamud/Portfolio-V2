import React from 'react'
import HeadingText from '../Utils/HeadingText'
import PDFViewer from '../Utils/PDFViewer'

const Resume = () => {
  return (
    <div className='w-[90%] mx-auto relative lg:px-20 px-5 mt-40'>
<HeadingText bgText={"EXPERIENCE"} topText={"RESUME"}></HeadingText>
<p className='text-center text-zinc-300 my-5 lg:text-base md:text-sm text-sm tracking-wider'>
Reach out to me via <a className='cursor-pointer hover:bg-gradient-to-r from-violet-700 to-pink-700  px-2 py-1 text-base rounded-sm duration-700' href="mailto:dev.shejanamahamud@gmail.com">mail</a> or <a className='cursor-pointer hover:bg-gradient-to-r from-violet-700 to-pink-700  px-2 py-1 text-base rounded-sm duration-700' href="https://drive.usercontent.google.com/u/0/uc?id=1r3I8ZLAY_yXSe93rU0RrHe4TyvDdpEuL&export=download"  download="filename">download</a> the resume.</p>
        <div className=' text-white'>
        
<PDFViewer className={'mt-10'} url={'https://drive.google.com/file/d/1r3I8ZLAY_yXSe93rU0RrHe4TyvDdpEuL/view?usp=drive_link'}/>
        </div>
    </div>
  )
}

export default Resume