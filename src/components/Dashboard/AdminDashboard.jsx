import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDashboard = ({changeUser,loggedInUserData}) => {
  return (
    <div className='h-screen w-full p-5'>
      <Header changeUser={changeUser} data={loggedInUserData  } />
        <CreateTask/>
        <AllTask/>
    </div>
  )
}

export default AdminDashboard
