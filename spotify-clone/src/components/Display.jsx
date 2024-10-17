import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Displayhome from './Displayhome'
import Displayalbum from './Displayalbum'
import { albumsData } from '../assets/assets'
const Display = () => {
  const displayref=useRef();
  const location=useLocation();
  const isalbum=location.pathname.includes("album");
  
  const albumid=isalbum ? location.pathname.slice(-1): "";
  const bgColor= albumsData[Number(albumid)].bgColor
  console.log(bgColor);
  useEffect(()=>{
    if(isalbum){
      displayref.current.style.background=`linear-gradient(${bgColor},#121212)`
    }
    else{
       displayref.current.style.background=`#121212`
    }
  })
  return (
    <div ref={displayref} className='w-[100%] px-6 pt-4 m-2 bg-[#121212] text-white lg:ml-0 overflow-auto lg:w-[70%]'>
        <Routes>
            <Route path='/' element={<Displayhome/>}/>
            <Route path='/album/:id' element={<Displayalbum/>}/>
        </Routes>
      
    </div>
  )
}

export default Display
