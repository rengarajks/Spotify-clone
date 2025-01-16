import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { IoPlay } from 'react-icons/io5'

const Myplaylist = ({data,index,setIndex,dam,setDam}) => {
 
  const filteredData = data
    .map((item, originalIndex) => ({ ...item, id: originalIndex })) // Attach original index as id
    .filter((item) => dam?.includes(item.id)); // Filter based on dam
  console.log('filtered=',filteredData)

  return (
    <div>
      <Navbar/>

      {/* HEADER... */}
      <div className='font-semibold px-2 text-xl'>
        My Playlist
      </div>  

      <div className='px-4 h-full'>
            {/* <p className='text-xs sm:pl-2 py-1 text-gray-400'>These are top hits from the year 2024</p> */}
          
            <div className='pt-4 flex items-center gap-2 cursor-pointer'>
                <IoPlay size='2.3rem' className='bg-[#1ED760] cursor-pointer hover:bg-[#23f86e] text-black rounded-full p-2'/>
                <p>Play all</p>
            </div>

            {/* TABLE */}
            <div className='py-4'>
                {/* HEADER */}
                <div className='hidden sm:block sm:visible'>
                <div className='grid grid-cols-12 border-b border-gray-500 text-xs opacity-70 py-1'>
                    <div className='col-span-1'>#</div>
                    <div className='col-span-4'>Name</div>
                    <div className='col-span-4'>Album</div>
                    <div className='col-span-2'>Year</div>
                    <div className='col-span-1'>Dur</div>
                </div>
                </div>
                
                {/* DATA */}
                {
                    filteredData?.map((data,ind)=>
                 <div>
                  <div onClick={()=>setIndex(data.id)} className={`grid grid-cols-12 text-sm py-2 cursor-pointer md:hover:bg-white/30 rounded-sm md:hover:backdrop-blur`}>
                    <div className='col-span-1 opacity-70 hidden sm:block sm:visible'>{ind+1}</div>
                    <div className='sm:col-span-4 col-span-12 flex items-center gap-1 '><img className='w-8 h-8 rounded-sm' src={data.image}/> <div><div className={`${data.id==index?'text-green-600 font-semibold':''}`}>{data.songName}</div><div className='text-xs text-gray-400'>{data.title}</div></div></div>
                    <div className='col-span-4 opacity-70 hidden sm:block sm:visible'>{data.title}</div>
                    <div className='col-span-2 opacity-70 hidden sm:block sm:visible'>2024</div>
                    <div className='col-span-1 opacity-70 hidden sm:block sm:visible'>3:22</div>
                  </div>
                 </div>
                )
                }
            </div>
        </div>
    </div>
  )
}

export default Myplaylist