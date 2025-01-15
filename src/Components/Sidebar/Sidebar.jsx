import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { CiHome } from 'react-icons/ci'
import { FaMusic } from 'react-icons/fa'
import { GoHomeFill } from 'react-icons/go'
import { HiMiniHome } from 'react-icons/hi2'
import { LuLibrary } from 'react-icons/lu'
import { useNavigate } from 'react-router'

const Sidebar = () => {
  const nav=useNavigate();
  const[search,setSearch]=useState(false);
  return (
    <div className='py-4 px-2'>
      {/* LOGO */}
      <div className='flex items-center font-semibold gap-1 text-lg px-2 py-2'>
        <img src='spotify.svg' className='h-8 w-8'/>
        Spotify
      </div>

      <div className='py-6'>
      <div className='hover:bg-gray-700 cursor-pointer rounded-md px-2 py-2'>
        <span className='flex items-center gap-1' onClick={()=>nav('/')}>
          <GoHomeFill size='1.3rem'/>
          <p>Home</p>
        </span>
      </div>
      <div className='hover:bg-gray-700 cursor-pointer rounded-md px-2 py-2'>
        <span className='flex items-center gap-1'>
          <BiSearch size='1.3rem' className='font-medium'/>
          <p><input placeholder='Seach' className='bg-transparent placeholder:text-white w-[90%] px-1 border-none outline-none'/></p>
        </span>
      </div>
      <div className='hover:bg-gray-700 cursor-pointer rounded-md px-2 py-2'>
        <span className='flex items-center gap-1'>
          <LuLibrary size='1.3rem'/>
          <p>Your library</p>
        </span>
      </div>

      </div>


      <div className='bg-white/5'>
        <div>
          
        </div>
      </div>

    </div>
  )
}

export default Sidebar