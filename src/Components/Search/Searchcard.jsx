import React from 'react'

const Searchcard = ({data}) => {
  return (
    <div className='flex items-center gap-2 px-8 py-2 group hover:py-4 hover:bg-slate-700 hover:backdrop-blur transition-all duration-300 ease-in-out transform hover:scale-100 cursor-pointer'>
        <img className='w-12 h-12 rounded-[0.2rem]' src={data.image}/>
        <div className='text-sm'>
        <h1 className='text-xs font-medium group-hover:text-green-600'>{data.songName}</h1>
        <p className='text-[0.65rem] text-gray-300'>{data.title}</p>
        </div>
    </div>
  )
}

export default Searchcard