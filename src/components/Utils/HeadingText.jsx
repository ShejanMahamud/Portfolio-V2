import React from 'react'

const HeadingText = ({bgText,topText}) => {
  return (
    <div className='relative flex items-center justify-center'>
            <h1 className='lg:text-9xl text-5xl font-bold text-[#262626]'>{bgText}</h1>
            <span className='absolute text-3xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-700 to-pink-700'>{topText}</span>
        </div>
  )
}

export default HeadingText