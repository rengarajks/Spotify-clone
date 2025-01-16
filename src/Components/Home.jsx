import React, { useEffect, useState } from 'react'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'
import Homepage from './Home/Homepage'
import Player from './Player/Player'
import { Route, Routes, useNavigate } from 'react-router'
import Playlist from './Playlist/Playlist'
import Myplaylist from './Wishlist/Myplaylist'
import { GoHomeFill } from 'react-icons/go'
import { LuLibrary } from 'react-icons/lu'

const tamilSongs=[
  {
    image:'https://akm-img-a-in.tosshub.com/indiatoday/images/story/media_bank/202310/thalapathy-vijay--leo-trailer--leo-055254961-3x4.jpg?VersionId=KyHENRVeoTxwDpgTUBKD.bskddYXVn0I',
    title:'Leo',
    songName:'Badass',
    song:'tamil/Badass-MassTamilan.dev.mp3'
  },
  {
    image:'https://akm-img-a-in.tosshub.com/indiatoday/images/story/media_bank/202310/thalapathy-vijay--leo-trailer--leo-055254961-3x4.jpg?VersionId=KyHENRVeoTxwDpgTUBKD.bskddYXVn0I',
    title:'Leo',
    songName:'Anbenum ayudham',
    song:'tamil/Anbenum-MassTamilan.dev.mp3'
  },
  {
    image:'https://assets.timelinedaily.com/w/1203x902/2024/09/goat-thumb-1114x900.jpg.webp',
    title:'GOAT',
    songName:'Whistle podu',
    song:'tamil/Whistle Podu.mp3'
  }
  ,
  {
    image:'https://i.ytimg.com/vi/hylIXfZeB4c/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBsdMk5ReREq6-tMaG2xCZJ5dYBmA',
    title:'Amaran',
    songName:'Hey minnaley',
    song:'tamil/Hey Minnale.mp3'
  }
  ,
  {
    image:'https://upload.wikimedia.org/wikipedia/en/7/7e/Naa_Ready_song_cover.jpg',
    title:'Leo',
    songName:'Naa Ready',
    song:'Naa-Ready-MassTamilan.dev.mp3'
  },
    // ,
  // {
  //   image:'',
  //   title:'Leo',
  //   songName:'',
  //   song:''
  // },
]

const Home = () => {
  const nav=useNavigate();
  const [index,setIndex]=useState(0);
  const[dam,setDam]=useState([]);
  useEffect(() => {
    // Retrieve and parse the saved dam data from localStorage
    const savedDam = localStorage.getItem('dam');
    if (savedDam) {
      setDam(JSON.parse(savedDam)); // Convert string back to an array
    }
  }, []);
  return (
    <div className='h-[100vh] text-white'>
        
        <div className='grid grid-cols-12'>
            <div className='col-span-2 bg-black hidden sm:block sm:visible'>
               <Sidebar/>
            </div>
            <div className='col-span-12 sm:col-span-10 bg-black/95 h-[100vh]'>
               {/* <Navbar/> */}
               <div className=''>
                 <Routes>
                  <Route path='/' element={<Homepage data={tamilSongs}/>} index={index} setIndex={setIndex}/>
                  <Route path='/playlist/:main/:sub' element={<Playlist dam={dam} setDam={setDam} data={tamilSongs} index={index} setIndex={setIndex}/>} />
                  <Route path='/myplaylist' element={<Myplaylist dam={dam} setDam={setDam} data={tamilSongs} index={index} setIndex={setIndex}/>} />
                 </Routes>
               </div>
            </div>
        </div>

        <div className='absolute bottom-0 bg-neutral-900 w-full'>
          
          <Player data={tamilSongs} index={index} setIndex={setIndex}/>
          
          <div className='sm:hidden block visible text-xs'>
            <div className='grid grid-cols-2 pt-2 pb-4'>
              <div onClick={()=>nav('/')} className='flex flex-col items-center'>
               <GoHomeFill size='1.3rem'/>
                Home
              </div>
              <div onClick={()=>nav('/myplaylist')} className='flex flex-col items-center'>
                <LuLibrary size='1.3rem'/>
                Your Library
              </div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Home