import React from 'react'

function ImgBox({imgSrc, heading, text}) {
  return (
    <div className='w-xs overflow-hidden px-3 py-5 rounded-lg flex flex-col gap-2'>
      <img className='rounded-lg' src={imgSrc} alt="" />
      <h1 className='text-white font-semibold text-xl mt-4'>{heading}</h1>
      <p className='text-[var(--text-p)] text-sm'>{text}</p>
    </div>
  )
}

export default ImgBox
