import React from 'react'
import Button from './Button'

function Header() {
  return (
    <div className='flex flex-col items-center justify-center w-full pb-4 relative'>

        {/* <img className='absolute w-[60%]' src="./public/img/bg.svg" alt="" /> */}
      <div className='flex items-center justify-center gap-1.5 mt-18 border border-[var(--border)] px-8 py-2 rounded-lg'>
        <p className='text-white text-[8px] sm:text-sm'>Best text to image generator</p>
        <img className='w-3 h-3' src="./public/img/star_gif.gif" alt="Star Gif" />
      </div>

      <div className='sm:w-[60%] mt-5 sm:mt-10 flex flex-col items-center gap-4 sm:gap-8'>
        <h1 className='text-white text-[30px]/9 sm:text-7xl max-sm:font-bold text-center'>Transform your words <br />into stunning <span className='sm:font-bold font-extrabold text-[#7017B7]'> images </span></h1>
        <p className='text-[var(--text-p)] text-[8px] sm:text-base text-center sm:w-[65%]'>Unleash your creativity with AI. Turn your imagination into visual art in <br /> seconds – just type, and watch the magic happen.</p>
        <Button text="Generate Images" />
      </div>
    </div>
  )
}

export default Header