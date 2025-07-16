import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {FaEyeSlash} from 'react-icons/fa'
import { FaEye } from 'react-icons/fa'
import apiconnector from '../APIConnector.js'

const Login = () => {
  const navigate=useNavigate();
  const [enable,setenable]=useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleeye=(e)=>{
    e.preventDefault()
    setenable(!enable)
  };
   // Assuming email is the same as username for login

  const handleLogin=(e)=>{
    e.preventDefault();
    apiconnector.post('/login',{password,email:username,username})
    .then((response)=>{
      console.log("Login successful", response.data);
      navigate('/home');
    })
    .catch((error)=>{
      console.log("Login failed", error);
    })
  }

  return (
    <>
    <div className='flex flex-col items-center justify-center h-screen w-screen'>
      <div className='w-100 h-150 bg-emerald-400 flex flex-col items-center justify-center rounded-2xl'>
        <h1 className='text-4xl font-bold m-10'>Login</h1>
        <form className='flex flex-col items-center justify-center gap-4 relative w-80'>
          <input 
            value={username} 
            onChange={(e)=>{setUsername(e.target.value)}} 
            type="text" 
            placeholder='Username/Email' 
            className='w-full h-10 bg-gray-200 rounded-md text-black pl-5 pr-10' 
          />
          <input 
            value={password} 
            onChange={(e)=>{setPassword(e.target.value)}} 
            type={enable ? "password" : "text"}
            placeholder='Password' 
            className='w-full h-10 bg-gray-200 rounded-md text-black pl-5 pr-10' 
          />
          <button onClick={handleeye} className='absolute right-0 bottom-24 bg-transparent h-10 w-10 rounded-md flex items-center justify-center'>
            {enable ? <FaEyeSlash className='text-gray-700'/> : <FaEye className='text-gray-700'/>}
          </button>
          <button onClick={handleLogin} className='w-full h-10 bg-blue-500 text-white rounded-lg'>Login</button>
          
          <p className='text-black '>Don't have an account? <span className='text-blue-500 cursor-pointer' onClick={() => { navigate('/signup') }}>Register</span></p>  
        </form>
      </div>
    </div>
    </>
  )
}

export default Login