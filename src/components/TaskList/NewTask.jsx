/*
<div className='flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl p-5'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-500 px-3 py-1 rounded'>High</h3>
            <h4>20 May 2025</h4>
        </div>
        <h2 className='mt-5 font-2xl font-semibold'>Make a video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ipsa id delectus similique quia nihil!</p>
      </div> */

import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-pink-400 rounded-xl p-5'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-500 px-3 py-1 rounded'>{data.category}</h3>
            <h4>{data.taskDate}</h4>
        </div>
        <h2 className='mt-5 font-2xl font-semibold'>{data.taskTitle}</h2>
        <p className='text-sm mt-2'>{data.taskDescription}</p>
        <div className='mt-4'>
            <button>Accept Task</button>
        </div>
      </div>
  )
}

export default NewTask
