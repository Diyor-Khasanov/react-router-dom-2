import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='bg-black w-full h-screen flex flex-col items-center justify-center text-zinc-800 gap-3'>
      <h1 className='text-8xl font-bold'>404</h1>
      <p className='text-2xl font-bold'>Page Not Found</p>
      <Link to={'/'} className='hover:underline'>
        Home
      </Link>
    </div>
  )
}

export default NotFound