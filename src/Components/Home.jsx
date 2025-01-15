import React, { useState } from 'react'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'
import Homepage from './Home/Homepage'
import Player from './Player/Player'
import { Route, Routes } from 'react-router'
import Playlist from './Playlist/Playlist'
import Search from './Search/Search'

const tamilSongs=[
  {
    image:'https://akm-img-a-in.tosshub.com/indiatoday/images/story/media_bank/202310/thalapathy-vijay--leo-trailer--leo-055254961-3x4.jpg?VersionId=KyHENRVeoTxwDpgTUBKD.bskddYXVn0I',
    title:'Leo',
    songName:'Badass',
    song:'https://masstamilan.dev/downloader/I8IBzpioYCHTv4Yj1YuFnQ/1736930574/d128_cdn/24859/NDIuMTA2LjE4NC42OA=='
  },
  {
    image:'https://akm-img-a-in.tosshub.com/indiatoday/images/story/media_bank/202310/thalapathy-vijay--leo-trailer--leo-055254961-3x4.jpg?VersionId=KyHENRVeoTxwDpgTUBKD.bskddYXVn0I',
    title:'Leo',
    songName:'Anbenum ayudham',
    song:'https://masstamilan.dev/downloader/I8IBzpioYCHTv4Yj1YuFnQ/1736930574/d128_cdn/24858/NDIuMTA2LjE4NC42OA=='
  },
  {
    image:'https://a10.gaanacdn.com/gn_img/albums/g4w3vwrWjJ/w3v5AEBrKj/size_m_1687451320.webp',
    title:'Leo',
    songName:'Naa Ready',
    song:'https://masstamilan.dev/downloader/I8IBzpioYCHTv4Yj1YuFnQ/1736930574/d128_cdn/24856/NDIuMTA2LjE4NC42OA=='
  }
  // ,
  // {
  //   image:'',
  //   title:'Leo',
  //   songName:'',
  //   song:''
  // },
]

const Home = () => {
  const [index,setIndex]=useState(0);
  return (
    <div className='h-[100vh] text-white'>
        
        <div className='grid grid-cols-12'>
            <div className='col-span-2 bg-black hidden sm:block sm:visible'>
               <Sidebar/>
            </div>
            <div className='col-span-12 sm:col-span-10 bg-black/95 h-[100vh]'>
               {/* <Navbar/> */}
               <div className='px-4'>
                 <Routes>
                  <Route path='/' element={<Homepage/>} />
                  <Route path='/search' element={<Search/>} />
                  <Route path='/playlist/:main/:sub' element={<Playlist data={tamilSongs} index={index} setIndex={setIndex}/>} />
                 </Routes>
               </div>
            </div>
        </div>

        <Player data={tamilSongs} index={index} setIndex={setIndex}/>

    </div>
  )
}

export default Home