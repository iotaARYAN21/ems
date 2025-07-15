import React from 'react'
import Header from '../others/Header'
import TaskCard from '../others/TaskCard'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({changeUser,data}) => {
  console.log(data);
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen '>
      <Header changeUser={changeUser} data={data}/>
      <TaskCard data={data}/>
      <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashboard
