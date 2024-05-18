import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movies from './components/Movies'
import Tvshows from './components/Tvshows'
import People from './components/People'
import Moviedetails from './components/Moviedetails'
import Tvdetails from './components/Tvdetails'
import Persondetails from './components/templates/Persondetails'

function App() {
  return (
    <div className="h-screen w-screen bg-zinc-900 text-white flex box-border">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/trending" element={<Trending/>}/>
        <Route path="/popular" element={<Popular/>}/>
        <Route path="/movie" element={<Movies/>}/>
        <Route path="/movie/details/:id" element={<Moviedetails/>}/>
        <Route path="/tv" element={<Tvshows/>}/>
        <Route path="/tv/details/:id" element={<Tvdetails/>}/>
        <Route path="/person" element={<People/>}/>
        <Route path="/person/details/:id" element={<Persondetails/>}/>
      </Routes>
    </div>
  )
}

export default App