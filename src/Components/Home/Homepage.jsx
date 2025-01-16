import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import Navbar from '../Navbar/Navbar';
import { BiSearch } from 'react-icons/bi'
import Searchcard from '../Search/Searchcard';

const foryou=[1];

const Homepage = ({data,index,setIndex}) => {
  const navigate=useNavigate();
  const handleplaylistnav=()=>{
    navigate('/playlist/foryou/tamil');
  }
  const[search,setSearch]=useState(false);
  const [filtered,setFiltered]=useState([]);

  const handleSearch=(e)=>{
    if(e.target.value.length==0){
      setSearch(false);
      setFiltered([]);
    }else{
      setSearch(true);
      const filteredData = data.filter(
        (item) =>
          item.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.songName.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFiltered(filteredData);
    }

  }


  return (
    <div>
      <Navbar/>

      {/* SEARCH...  */}
      <div className='flex justify-center sm:justify-start'>
        <div className='px-4'>
          <input onChange={(e)=>handleSearch(e)} className='rounded-md px-9 py-3 sm:py-2 w-[40vh] font-medium text-sm  text-black outline-none' placeholder='Search songs'/>
          <BiSearch color='black' size='1.3rem' className='translate-x-4 sm:translate-x-3 sm:-translate-y-7 -translate-y-8'/>
        </div>
      </div>
     
      {/* FOR YOU */}
      
      {
        !search?
        <div className='px-4'>
        <h1 className='font-semibold text-lg'>For You</h1>
        <div className='grid md:grid-cols-7 grid-cols-2 overflow-y-hidden'>
        
        {
          foryou.map((data)=>
            <div className='flex col-span-1'> 
            <div onClick={handleplaylistnav} className='cursor-pointer hover:bg-gray-800 px-2 rounded-md pt-3 pb-6'>
               <img className='w-36 h-36 object-cover rounded-md shadow' src='https://i.ytimg.com/vi/molA7xjD_nQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDb17ZqO5E731WPHKO3RyfqYzXwQw'/>
               <p className='px-1 py-2 font-medium text-lg'>Tamil 2024 hits</p>
          </div>
        </div>
        )
        }
      
        </div>
        </div>
        :
        <div className='max-h-[70vh] py-2 space-y-2 overflow-auto rounded-sm scrollbar-hidden bg-neutral-900'>
          {
            filtered.map((data)=><Searchcard data={data}/>)}
        </div>
      }

      

    </div>
  )
}

export default Homepage