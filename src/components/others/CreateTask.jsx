import React from 'react'

const CreateTask = () => {
  return (
    <div className='flex items-center justify-around mt-10 bg-[#1c1c1c] rounded-2xl p-5'>
            <div className='flex w-1/2 flex-col gap-4 p-4 text-xl '>
                <div>
                    <h3>Task Title</h3>
                    <input className='bg-[#1c1c1c] border border-amber-50  rounded placeholder:text-amber-50 p-2 w-[80%]'
                    type="text" placeholder='Make an UI design' />
                </div>
                <div>
                    <h3>Date</h3>
                    <input className='bg-[#1c1c1c] border border-amber-50  rounded placeholder:text-amber-50 p-2 w-[80%]'
                    type="date" />
                </div>
                <div>
                    <h3>Assign To</h3>
                    <input className='bg-[#1c1c1c] border border-amber-50  rounded placeholder:text-amber-50 p-2 w-[80%]'
                    type="text" placeholder='employee name'/>
                </div>
                <div>
                    <h3>Category</h3>
                    <input className='bg-[#1c1c1c] border border-amber-50  rounded placeholder:text-amber-50 p-2 w-[80%]'
                    type="text" placeholder='Design, Development,etc' />
                </div>
            </div>
            <div className='flex w-1/2 flex-col justify-start text-xl'>
                <div>
                    <h3>Description</h3>
                    <textarea cols={5} rows={8} 
                    className='bg-[#1c1c1c] border border-amber-50  rounded placeholder:text-amber-50 p-2 w-[80%] mb-7'
                    name="" id=""></textarea>
                </div>
                <button className='w-[80%] h-10 rounded text-black bg-green-500'>Create Task</button>
            </div>
        </div>
  )
}

export default CreateTask
