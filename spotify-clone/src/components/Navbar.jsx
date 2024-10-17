import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <>
     <div className=' w-full items-center flex justify-between font-semibold'>
        <div className='items-center flex gap-3'>
            <img onClick={()=>navigate(-1)} className='w-8 p-2 bg-black rounded-2xl cursor-pointer' src={assets.arrow_left} alt="" />
            <img onClick={()=>navigate(1)}className='w-8 p-2 bg-black rounded-2xl cursor-pointer' src={assets.arrow_right} alt="" />        </div>
        
        <div className='flex items-center gap-3'>
            <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hiddeen md:block cursor-pointer'>Explore Premium</p>
            <p className='bg-black px-3 py-1 text-[15px] rounded-2xl cursor-pointer'>Install App</p>
            <p className='bg-purple-500 text-black w-7 h-7 rounded-full justify-center cursor-arrow items-center flex'>D</p>
         </div>
     </div>
     <div className='flex items-center gap-3 mt-2'>
      <p className='bg-white text-black px-3 py-1 rounded-2xl cursor-pointer'>All</p>
      <p className='bg-black px-3 py-1 rounded-2xl cursor-pointer'>Music</p>
      <p className='bg-black  px-3 py-1 rounded-2xl cursor-pointer'>Podcast</p>
     </div>
    </>
  )
}

export default Navbar
