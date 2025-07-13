
import { useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

function App() {
  // useEffect(()=>{
  //   // setLocalStorage();
  //   getLocalStorage();
  // })
  const [user,setUser] = useState('');
  const authData = useContext(AuthContext);
  useEffect(()=>{
    if(authData){
      const loggedInUser = localStorage.getItem('loggedInUser');
      if(loggedInUser){
        setUser(loggedInUser.role);
      }
    }
  },[authData])
  function handleLogin(email,password){
    if(email=='admin@me.com' && password=='123'){
      // console.log("This is admin");
      // setUser('admin');
      localStorage.setItem('loggedInUser',JSON.stringify({'role':'admin'}));
    }
    else if(authData && authData.employees.find((e)=>e.email==email && e.password==password)){
      // console.log("This is user");
      // setUser('employee');
      localStorage.setItem('loggedInUser',JSON.stringify({'role':'employee'}));
    }
    else{
      alert("Invalid credentials");
    }
  }
  
  return (
    <>
      {!user ? <Login handleLogin={handleLogin}/> : ''}
      {user=='admin' ? <AdminDashboard/> : user=='employee' ? (<EmployeeDashboard/>):(null)}
      {/* <Login handleLogin={handleLogin}/> */}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/>  */}
    </>
  )
}

export default App
