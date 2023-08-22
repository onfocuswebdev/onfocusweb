import React from 'react'

const Hero = () => {
  return (
    <div className='md:flex mx-auto m-0 block'>
        <div className='w-2/3 shrink'>
            <h1 className='font-raleway leading-[0.8] font-black text-5xl md:text-8xl'>DEDICATED TO THE ESSENCE OF YOUR ONLINE PRESENCE</h1>
        </div>
        <div className='md:w-1/3 w-3/4 mx-auto my-3 md:self-end'>
            <div className='md:w-2/3 w-full my-auto mx-auto place-content-around border-2 border-slate-400 text-center bg-yellow-300 text-black flex center'>
                <a className='mx-auto px-auto font-bold' href="#" target="_blank" rel="noopener noreferrer">Discover our successful cases</a>
            </div>
        </div>
    </div>
  )
}

export default Hero