import React from 'react'

const TaskList = () => {
  return (
    <div id='taskList' className='h-[55%] overflow-x-auto w-full py-5 mt-10 flex items-center justify-start gap-5'>
      <div className='flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl p-5'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-500 px-3 py-1 rounded'>High</h3>
            <h4>20 May 2025</h4>
        </div>
        <h2 className='mt-5 font-2xl font-semibold'>Make a video</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ipsa id delectus similique quia nihil!</p>
      </div>
    </div>
  )
}

export default TaskList
