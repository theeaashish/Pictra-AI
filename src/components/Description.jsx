import React from 'react'
import Button from './Button'

function Description() {
  return (
    <div className='flex flex-col flex-wrap gap-3 px-10 items-center mt-20'>
      <h1 className="text-white mt-18 text-3xl font-semibold text-center">
      Create AI Images
        </h1>
        <p className="text-[var(--text-p)] text-xs text-center">
        Turn your imagination into visuals
        </p>

        <div className='flex mt-10  items-center flex-wrap justify-between sm:px-20'>
            <div className='sm:w-[50%] w-full flex'>
                <img className='sm:w-[80%] sm:min-h-70' src="img/bg-2.png" alt="" />
            </div>

            <div className='flex flex-col sm:w-[50%] gap-4 max-sm:mt-10'>
                <h2 className='text-white text-2xl/7 font-bold sm:text-3xl'>Introducing the AI-Powered Text to Image Generator</h2>
                <p className='text-[var(--text-p)] text-[12px] sm:text-base'>Easily bring your ideas to life with our free AI image generator. Whether you need stunning visuals or unique imagery, our tool transforms your text into eye-catching images with just a few clicks. Imagine it, describe it, and watch it come to life instantly.</p>
                <p className='text-[var(--text-p)] text-[12px] sm:text-base'>Simply type in a text prompt, and our cutting-edge AI will generate high-quality images in seconds. From product visuals to character designs and portraits, even concepts that don’t yet exist can be visualized effortlessly. Powered by advanced AI technology, the creative possibilities are limitless!</p>
            </div>
        </div>

        <div className='flex flex-col sm:gap-10 gap-5 items-center sm:mt-20 mb-20'>
        <h1 className='text-white mt-18 text-2xl sm:text-3xl font-semibold text-center'>See the magic. Try now</h1>

        <Button text="Generate Images" />
        </div>
    </div>
  )
}

export default Description
