import React, { useState } from 'react'
import OTPInput from 'react-otp-input'
import { useNavigate } from 'react-router-dom';
import apiconnector from '../APIConnector.js'
import { useAuth } from '../hooks/useAuth';

const Verification = () => {
    const [otp,setotp]=useState("");
    const navigate = useNavigate();
    const { user } = useAuth();

    const VerifyOTP= async (e)=>{
      e.preventDefault();
      await apiconnector.post('/verify-otp',{email:user,otp})
      .then(
        console.log("OTP Verified"),
        navigate('/')
      )
      .catch((err)=>{
        console.error("Error verifying OTP:", err);
        
      })
    }
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
                containerStyle={{display: 'flex', justifyContent: 'center'}}
                inputStyle={{width: '40px', height: '50px',backgroundColor:'white', margin: '0 5px', fontSize: '24px', borderRadius: '8px', border: '1px solid #ccc'}}
                focusStyle={{border: '2px solid #007bff'}} 
                renderInput={(props)=><input {...props} />} 
            />
            <button onClick={VerifyOTP} type='submit' className='w-full h-10 bg-blue-500 text-white rounded-lg'>Verify</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Verification