import React, { useState } from 'react'
import OTPInput from 'react-otp-input'
import { useNavigate } from 'react-router-dom';

const Verification = () => {
    const [otp,setotp]=useState("");
    const navigate = useNavigate();
  return (
    <>
    <div className='flex flex-col items-center justify-center h-screen w-screen'>
      <div className='w-100 h-150 bg-emerald-400 flex flex-col items-center justify-center rounded-2xl'>
        <div className='text-4xl font-bold m-10'>Verification</div>
        <form className='flex flex-col items-center justify-center gap-4'>
            <OTPInput
                value={otp}
                onChange={setotp}
                numInputs={6}
                containerStyle={{display: 'flex', justifyContent: 'center'}}inputStyle={{width: '40px', height: '50px',backgroundColor:'white', margin: '0 5px', fontSize: '24px', borderRadius: '8px', border: '1px solid #ccc'}}
                focusStyle={{border: '2px solid #007bff'}} 
                renderInput={(props)=><input {...props} />} 
            />
            <button onClick={()=>{navigate('/')}} type='submit' className='w-full h-10 bg-blue-500 text-white rounded-lg'>Verify</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Verification