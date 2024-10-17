import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'
const Sidebar = () => {
  const navigate=useNavigate();
  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
      <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
        
      <div onClick={()=>navigate('/')} className='flex items-center gap-3 pl-8 cursor-pointer'>
          <img className="w-6" src={assets.home_icon} alt=""/>
          <p className='font-bold'>Home</p>
        </div>
        <div className='flex items-center gap-3 pl-8 cursor-pointer'>
          <img className="w-6" src={assets.search_icon} alt=""/>
          <p className='font-bold'>Search</p>
        </div>
      </div>
      <div className='h-[85%] bg-[#121212] rounded'>
        <div className='p-4 flex items-center justify-between'>
            <div className='flex item-center gap-3'>
                <img className='w-8' src={assets.stack_icon} alt=''/>
                <p className='font-semibold'>Your Library</p>
            </div>
            <div className='flex items-center gap-3'>
                <img className='w-5' src={assets.arrow_icon} alt=''/>
                <img className='w-5' src={assets.plus_icon} alt=''/>
            </div>
        </div>
        <div className='p-4  bg-[#242424] rounded margin-2 flex flex-col justify-start pl-3 font-semibold items-start'>
           <h1>Create your playlist</h1>
           <p className='font-light'>It's easy we can help you</p>
           <button className='bg-white px-4 text-[15px] text-black py-1.5 rounded-full mt-4 '>Create playlist</button>
        </div>
        <div className='p-4  bg-[#242424] rounded margin-2 flex flex-col justify-start pl-3 font-semibold items-start mt-4'>
           <h1>Let's find some bodcost</h1>
           <p className='font-light'>we'll keep you updated</p>
           <button className='bg-white px-4 text-[15px] text-black py-1.5 rounded-full mt-4'>Browse podcost</button>
        </div>
        </div>
    </div>
  )
}

export default Sidebar
