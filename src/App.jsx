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
  const [loggedInUserData,setLoggedInUserData] = useState(null);
  const [authData,setUserData] = useContext(AuthContext);
  useEffect(()=>{
    const loggedUser = localStorage.getItem('loggedInUser');
    if(loggedUser){
      const userData =  JSON.parse(loggedUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  },[])
  function handleLogin(email,password){
    if(email=='admin@me.com' && password=='123'){
      // console.log("This is admin");
      setUser('admin');
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}));
    }
    else if(authData ){
      // console.log("This is user");
      const employee = authData.find((e)=>e.email==email && e.password==password);
      if(employee){
        setUser('employee');
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}));
      }
      else{
        alert('Invalid Credentials!!')
      }
      
    }
    else{
      alert("Invalid credentials");
    }
  }
  
  return (
    <>
      {!user ? <Login handleLogin={handleLogin}/> : ''}
      {user=='admin' ? <AdminDashboard changeUser={setUser} data={loggedInUserData}/> : user=='employee' ? (<EmployeeDashboard changeUser={setUser} data={loggedInUserData}/>):(null)}
      {/* <Login handleLogin={handleLogin}/> */}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/>  */}
    </>
  )
}

export default App
