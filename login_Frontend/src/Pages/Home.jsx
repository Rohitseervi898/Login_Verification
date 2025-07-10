import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate= useNavigate();
  return ( 
    <>
    <div className='flex flex-col w-screen h-screen justify-center items-center'>
    <h1>Home</h1>
    <button onClick={()=>{navigate('/')}} className="w-100 h-10 bg-red-700">Logout</button>
    </div>
    </>
  )
}

export default Home