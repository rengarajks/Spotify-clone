import { Avatar } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-4 px-4'>
      {/* <div><input className='rounded-full px-3 py-1 text-black outline-none' placeholder='Search songs'/></div> */}
      <div></div>
      <div className='text-sm font-medium flex items-center gap-1'><Avatar className='text-xs'/>User</div>
    </div>
  )
}

export default Navbar