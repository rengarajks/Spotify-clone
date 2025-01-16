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