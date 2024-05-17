import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Trending from './components/Trending'

function App() {
  return (
    <div className="h-screen w-screen bg-zinc-900 text-white flex box-border">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/trending" element={<Trending/>}/>
        <Route path="/popular" element={<Trending/>}/>
        <Route path="/movies" element={<Trending/>}/>
        <Route path="/tv_shows" element={<Trending/>}/>
      </Routes>
    </div>
  )
}

export default App