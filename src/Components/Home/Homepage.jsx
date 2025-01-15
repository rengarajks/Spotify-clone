import React from 'react'
import { useNavigate } from 'react-router';

const foryou=[1];
const Homepage = () => {
  const navigate=useNavigate();
  const handleplaylistnav=()=>{
    navigate('/playlist/foryou/tamil');
  }
  return (
    <div>
      {/* FOR YOU */}
      <div>
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
    </div>
  )
}

export default Homepage