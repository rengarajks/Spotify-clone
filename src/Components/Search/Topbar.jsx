import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { FaAngleLeft } from 'react-icons/fa'
import { Link } from 'react-router'

const Topbar = () => {
  const[isModalVisible,setIsModalVisible]=useState(false);
  return (
    <div className='flex items-center justify-between py-4 px-4'>
      <div className='flex items-center'>
        <Link to='/'>
           <FaAngleLeft  size='2.5rem' className='cursor-pointer hover:bg-gray-500/80 p-2 rounded-full '/>
        </Link>
        <BiSearch color='black' size='1.3rem' className='translate-x-8'/>
        <input onChange={()=>setIsModalVisible(true)} className='rounded-full px-9 py-2 font-medium text-sm  text-black outline-none w-[50vh]' placeholder='Search songs'/>
      </div>
      <div className='text-sm font-medium flex items-center gap-1'><Avatar className='text-xs'/>User</div>


      {/* MODAL */}
      {
        isModalVisible&&
        <div className='absolute w-[80%] top-16 bg-white'>
          sam
        </div>
      }
    </div>
  )
}

export default Topbar