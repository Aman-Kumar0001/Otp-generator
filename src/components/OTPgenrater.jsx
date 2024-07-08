import React, { useState } from 'react'


const OTPgenrater = () => {
    const [otp, setOtp] = useState(null)
    const [message, setMessage] = useState(null)
    const [input, setInput] = useState('')
    function genotp(){
        let newOtp = Math.floor(100000 + Math.random()*90000)
        setOtp(newOtp)
    }
    const verifyotp = () =>{
        // let inputOtp = document.getElementById('inputOtp').value
        if (otp===Number(input)) {
            setMessage("Matched OTP")
        }
        else
            setMessage(" Not matched OTP")
    }
  return (
      <>
    <input type="number" value={input} name="" onChange={(e)=>{setInput(e.target.value)}} /><br /><br />
    <button onClick={genotp}>Genrate OTP</button>
    <button onClick={verifyotp}>Verify OTP</button>
        <p>OTP : {otp}</p>
        <p>{message}</p>
    </>
  )
}

export default OTPgenrater