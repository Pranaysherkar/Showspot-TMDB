import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movies from './components/Movies'
import Tvshows from './components/Tvshows'
import People from './components/People'

function App() {
  return (
    <div className="h-screen w-screen bg-zinc-900 text-white flex box-border">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/trending" element={<Trending/>}/>
        <Route path="/popular" element={<Popular/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/tv_shows" element={<Tvshows/>}/>
        <Route path="/person" element={<People/>}/>
      </Routes>
    </div>
  )
}

export default App