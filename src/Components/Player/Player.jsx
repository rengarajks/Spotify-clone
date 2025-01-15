import React from 'react'
import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { BsThreeDots, BsThreeDotsVertical } from 'react-icons/bs';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import './CustomStyles.css';

const sample=[
  'https://masstamilan.dev/downloader/xa_05k_4O7lIeJK68vzKCg/1736924703/d128_cdn/24859/MjQwOTo0MDhkOjFlMDI6ZTQyYTplMWRiOjUwMDU6OGUxZjplYTIw',
  'https://masstamilan.dev/downloader/F3Ok3Fr1WZsEdGWpiL8S6Q/1736923558/d128_cdn/24858/MjQwOTo0MDQyOjZlYjE6YTM4ODo6ODE4YjozYjA3'
]

const Player = ({data,index,setIndex}) => {
  
  

  const currentTrack = data[index] || {};
  const handleNext = () => {
    console.log('NEXT TRIGGERED FROM -', index);
    setIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrevious = () => {
    console.log('PREV TRIGGERED FROM -', index);
    setIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  const[isHidden,setIsHidden]=useState(false);
  const handleHide=()=>{
    setIsHidden((prev)=>!prev)
  }

  console.log('CURRENT=',currentTrack)
  return (
    <div className={`absolute w-full ${isHidden?'h-full':''} bottom-0 grid grid-cols-12 items-center bg-slate-950 px-2`}>
    
      <div className={`${isHidden?'col-span-12':'col-span-5 sm:col-span-2 flex items-center'}  px-4 gap-1`}>
        
        <div className={`flex justify-between items-center py-4 px-2 hidden${isHidden?'block visible':''}`}>
          <div className='text-[1.4rem] rounded-full hover:bg-gray-700 hover:text-[#1ED760] cursor-pointer' onClick={handleHide}><FaAngleDown/></div>
          <div>Playing <span className='font-medium'>{currentTrack?.songName}</span></div>
          <div ><BsThreeDotsVertical className='text-[1.2]' /></div>
        </div>
        
        <div className={` ${isHidden?'hidden':'sm:hidden block visible'}`}>
           <FaAngleUp className='text-[2.5rem] rounded-md hover:bg-gray-700 px-2 py-2 hover:text-[#1ED760] cursor-pointer' onClick={handleHide}/>
        </div>

        <div className={`${isHidden?'h-[68vh] ':'h-12 w-12'} overflow-hidden rounded-md`}>
          <img className='w-full h-full object-contain rounded-md' src={currentTrack?.image}/>
        </div>

        

        <div className={`${isHidden?'flex justify-center':''} px-1`}>
          <div>
            <span className='font-medium'>{currentTrack?.title}</span>
            <h1 className='text-xs text-gray-400'>{currentTrack?.songName}</h1>
          </div>
        </div>

      </div>

      <div className={`${isHidden?'col-span-12':'col-span-7 sm:col-span-8'}`}>
        <AudioPlayer
        showFilledProgress
        showSkipControls={true} // Keep next and previous buttons if needed
        showJumpControls={false} // This removes the default skip buttons
          autoPlay
          src={currentTrack?.song || 'default-audio-url'} 
          onPlay={e => console.log("onPlay")}
          onClickNext={handleNext}
          onClickPrevious={handlePrevious}
          style={{
            backgroundColor: 'transparent',
            width: '100%',
          }}
        />
      </div>

      <div className={`col-span-2 ${isHidden?'hidden':'hidden sm:block sm:visible'}`}>
        <div className='px-4'>
          <div className=' flex justify-center'>
            <FaAngleUp className='text-[2.5rem] rounded-full hover:bg-gray-700 px-2 py-2 hover:text-[#1ED760] cursor-pointer' onClick={handleHide}/>
          </div>
        </div>
      </div>
  </div>
  )
}

export default Player
