import React from 'react'
import { BiHeart } from 'react-icons/bi';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { FaPlay } from 'react-icons/fa';
import { FaAngleLeft } from 'react-icons/fa6';
import { IoPlay } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router'

const Playlist = ({data,index,setIndex,dam,setDam}) => {
    const {main}=useParams();
    const {sub}=useParams();
    const nav=useNavigate();

    const saveToLocalStorage = (newDam) => {
      setDam(newDam);
      localStorage.setItem('dam', JSON.stringify(newDam)); // Convert array to string for saving
    };

    const handleSave=(ind)=>{
      const updatedDam = dam.includes(ind)
    ? dam.filter((item) => item !== ind) // Remove index
    : [...dam, ind]; // Add index
    saveToLocalStorage(updatedDam);
    }
  return (
    <div>
      <div className='bg-gradient-to-b rounded-md from-[#55946F] via-black h-[85vh] overflow-auto scrollbar-hidden'>
        {/* HEADER */}
        <FaAngleLeft className='cursor-pointer translate-y-8 translate-x-4' size='1.3rem' onClick={()=>nav('/')}/>
        
        <div className='flex gap-4 px-4 py-2'>
           
            <div className='hidden ml-8 sm:block sm:visible'>
            <div className='flex gap-4'>
                <img className='h-24 w-24 sm:h-44 sm:w-44 object-cover rounded-sm shadow-lg' src='https://assets-in.bmscdn.com/discovery-catalog/events/et00401439-mbglukxbja-landscape.jpg'/>
                <div className='flex items-center'>
                    <div className=''>
                    <h1 className='sm:text-5xl text-xl font-bold'>Tamil 2024 Hits</h1>
                    <p className='text-xs sm:pl-2 py-1 text-gray-400'>These are top hits from the year 2024</p>
                    </div>
                </div>
            </div>
            </div>
           
            <div className='block visible sm:hidden w-full'>
            <div className='flex justify-center w-full'>
                <div className=''>
                   <div className=''>
                      <img className='h-52 w-52 object-cover rounded-sm shadow-lg' src='https://assets-in.bmscdn.com/discovery-catalog/events/et00401439-mbglukxbja-landscape.jpg'/>
                      <h1 className='sm:text-5xl text-xl text-center font-bold'>Tamil 2024 Hits</h1>
                   </div>
                   
                </div>
            </div>
            </div>
        </div>

        <div className='px-4 h-full'>
            <p className='text-xs sm:pl-2 py-1 text-gray-400'>These are top hits from the year 2024</p>
          
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
                    <div className='col-span-1'></div>
                </div>
                </div>
                
                {/* DATA */}
                {
                    data?.map((data,ind)=>
                 <div>
                  <div onClick={()=>setIndex(ind)} className={`grid grid-cols-12 text-sm py-2 cursor-pointer md:hover:bg-white/30 rounded-sm md:hover:backdrop-blur`}>
                    <div className='col-span-1 opacity-70 hidden sm:block sm:visible'>{ind+1}</div>
                    <div className='sm:col-span-4 col-span-11 flex items-center gap-1 '><img className='w-8 h-8 rounded-sm' src={data.image}/> <div><div className={`${ind==index?'text-green-600 font-semibold':''}`}>{data.songName}</div><div className='text-xs text-gray-400'>{data.title}</div></div></div>
                    <div className='col-span-4 opacity-70 hidden sm:block sm:visible'>{data.title}</div>
                    <div className='col-span-2 opacity-70 hidden sm:block sm:visible'>2024</div>
                    <div onClick={()=>handleSave(ind)} className='col-span-1 opacity-70 '>
                      {
                        dam.includes(ind)?<BsHeartFill color='red'/>:<BsHeart className=""/>
                      }
                    </div>
                  </div>
                 </div>
                )
                }
            </div>
        </div>
      </div>
    </div>
  )
}

export default Playlist