import React from 'react'

function Loader() {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
      <img className='-mt-28' src="/Loading.gif" alt="Loading..." />
    </div>
  )
}

export default Loader