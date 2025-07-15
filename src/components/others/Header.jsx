import React, { useState } from 'react'

const Header = (props) => {
  // const [username,setUserName]=useState('');
  // if(!data){
  //   setUserName('Admin');
  // }
  // else{
  //   setUserName(data.name);
  // }
  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','');
    props.changeUser('') // => setUser() of App.jsx so when we make it '' then const user in App.jsx will be empty and login page will show
    // window.location.reload();  // reloads the current page
  }
  return (
    <div className='flex items-center justify-between'>
      <h1 className='text-2xl'>Hello <br></br> <span className='text-3xl font-semibold'>Aryan</span>👋</h1>
      <button onClick={logOutUser} className='bg-red-500 px-5 py-2 rounded-sm text-white text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header
