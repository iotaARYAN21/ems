import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const [userData,setUserData] = useContext(AuthContext);
  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded overflow-auto'>
      <div className='bg-black border-teal-300 py-2 px-4 flex justify-between rounded mb-5'>
        <h2 className='w-1/5 bg-red-600'>Employee Name</h2>
        <h3 className='w-1/5 bg-red-600'>New Task</h3>
        <h4 className='w-1/5 bg-red-600'>Active Task</h4>
        <h4 className='w-1/5 bg-red-600'>Completed Task</h4>
        <h4 className='w-1/5 bg-red-600'>Failed Task</h4>  
      </div>
      <div className='h-[80%] overflow-auto'>
        {userData.map((emp,idx)=>{
        return <div className='bg-black py-2 px-4 flex justify-between rounded mb-5' key={idx}>
        <h2 className='w-1/5 bg-red-600'>{emp.name}</h2>
        <h3 className='w-1/5 bg-red-600'>{emp.taskCounts.newTask}</h3>
        <h4 className='w-1/5 bg-red-600'>{emp.taskCounts.active}</h4>
        <h4 className='w-1/5 bg-red-600'>{emp.taskCounts.completed}</h4>  
        <h4 className='w-1/5 bg-red-600'>{emp.taskCounts.failed}</h4>  
      </div>
      })}
      </div>
    </div>
  )
}

export default AllTask
