import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const [userData,setUserData] = useContext(AuthContext);
  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded overflow-auto'>
      <div className='bg-black border border-teal-300 py-2 px-4 flex justify-between rounded mb-5'>
        <h2 className='w-1/5 '>Employee Name</h2>
        <h3 className='w-1/5 '>New Task</h3>
        <h4 className='w-1/5 '>Active Task</h4>
        <h4 className='w-1/5 '>Completed Task</h4>
        <h4 className='w-1/5 '>Failed Task</h4>  
      </div>
      <div className='h-[80%] overflow-auto'>
        {userData.map((emp,idx)=>{
        return <div className='bg-black border border-teal-300 py-2 px-4 flex justify-between rounded mb-5' key={idx}>
        <h2 className='w-1/5 font-medium'>{emp.name}</h2>
        <h3 className='w-1/5 font-medium'>{emp.taskCounts.newTask}</h3>
        <h4 className='w-1/5 font-medium'>{emp.taskCounts.active}</h4>
        <h4 className='w-1/5 font-medium'>{emp.taskCounts.completed}</h4>  
        <h4 className='w-1/5 font-medium'>{emp.taskCounts.failed}</h4>  
      </div>
      })}
      </div>
    </div>
  )
}

export default AllTask
