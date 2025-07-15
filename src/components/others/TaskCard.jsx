import React from 'react'

const TaskCard = ({data}) => {
  return (
    <div className='flex justify-between gap-5 screen mt-10'>
      <div className='w-[45%] px-9 py-6 bg-red-400 rounded-xl'>
            <h2 className='text-2xl font-semibold'>{data.taskCounts.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='w-[45%] px-9 py-6 bg-blue-400 rounded-xl'>
            <h2 className='text-2xl font-semibold'>{data.taskCounts.completed}</h2>
            <h3 className='text-xl font-medium'>Tasks Completed</h3>
      </div>
      <div className='w-[45%] px-9 py-6 bg-green-400 rounded-xl'>
            <h2 className='text-2xl font-semibold'>{data.taskCounts.active}</h2>
            <h3 className='text-xl font-medium'>Tasks Active</h3>
      </div>
      <div className='w-[45%] px-9 py-6 bg-yellow-400 rounded-xl'>
            <h2 className='text-2xl font-semibold'>{data.taskCounts.failed}</h2>
            <h3 className='text-xl font-medium'>Tasks Failed</h3>
      </div>
    </div>
  )
}

export default TaskCard



/*

Q. Why the inner div width reduces even if they have w-45% of the parent when a third div is added .
Reason is below
By default, flex-shrink: 1 is applied in Tailwind. This means:

If there's not enough space, allow the item to shrink.

So Tailwind flex items with percentage widths will shrink below their defined width to stay on one line unless you prevent shrinking.
*/