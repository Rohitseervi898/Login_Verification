import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {FaEyeSlash} from 'react-icons/fa'
import { FaEye } from 'react-icons/fa'

const SignUp = () => {
    const navigate= useNavigate();
    const [enable,setenable]=useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const handleeye=(e)=>{
      e.preventDefault()
      setenable(!enable)
    };
  return (
    <div className='flex flex-col items-center justify-center h-screen w-screen'>
      <div className='w-100 h-150 bg-emerald-400 flex flex-col items-center justify-center rounded-2xl'>
        <h1 className='text-2xl font-bold m-10'>Sign Up</h1>
        <form className='flex flex-col items-center justify-center gap-4 relative w-80'>
          <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="text" placeholder='Email' className='w-full h-10 bg-gray-100 text-black rounded-lg pl-5 pr-10' />
          <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type={enable ? "password" : "text"} placeholder='Password' className='w-full h-10 bg-gray-200 text-black rounded-lg pl-5 pr-10' />
          <button onClick={handleeye} className='absolute right-1 bottom-28 bg-transparent h-10 w-10 rounded-md flex items-center justify-center'>
            {enable ? <FaEyeSlash className='text-gray-700 text-xl'/> : <FaEye className='text-gray-700 text-xl'/>}
          </button>
          <input value={username} onChange={(e)=>{setUsername(e.target.value)}} type="text" placeholder='Username' className='w-full h-10 bg-gray-200  text-black rounded-lg pl-5 pr-10' />
          <button onClick={()=>{navigate('/verify')}} type='submit' className='w-full h-10 bg-blue-500 text-white rounded-lg'>Continue</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp