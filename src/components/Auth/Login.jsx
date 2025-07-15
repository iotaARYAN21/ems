import React, { useState } from 'react'
// default behaviour of form is to reload on submit
const Login = (props) => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const submitHandler = (e)=>{
    e.preventDefault();
    console.log("Form submitted")
    console.log(email," ",password);
    props.handleLogin(email,password);
    setEmail("");
    setPassword("");
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-red-400 rounded-xl'>
            <form
            onSubmit={(e)=>{
              submitHandler(e);
            }} 
            className='flex flex-col items-center justify-center p-20'>
                <input
                 required 
                 value={email}  
                //  two way binding
                 onChange={(e)=>(setEmail(e.target.value))}
                 className='border-2 border-red-400 rounded-full py-3 px-5 text-xl text-black outline-none bg-transparent placeholder:text-gray-400' type="email" placeholder='Enter your email'/>
                <input 
                  required
                  value={password}
                  onChange={(e)=>(setPassword(e.target.value))} 
                  className='border-2 border-red-400 rounded-full py-3 px-5 mt-3 text-xl text-black outline-none bg-transparent placeholder:text-gray-400' type="password" placeholder='Enter your password' />
                <button className='border-2 font-semibold bg-red-500 rounded-full py-3 px-5 mt-3 text-xl text-black outline-none '>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login
