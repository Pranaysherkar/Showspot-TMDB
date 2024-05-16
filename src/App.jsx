import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'

function App() {
  return (
    <div className="h-screen w-screen bg-zinc-900 text-white flex">
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App