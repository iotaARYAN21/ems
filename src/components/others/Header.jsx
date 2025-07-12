import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between'>
      <h1 className='text-2xl'>Hello <br></br> <span className='text-3xl font-semibold'>Aryan</span>👋</h1>
      <button className='bg-red-500 px-5 py-2 rounded-sm text-white text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header
