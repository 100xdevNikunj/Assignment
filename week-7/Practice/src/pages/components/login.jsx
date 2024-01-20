import React, { useState } from 'react';
import OtpInput  from './otpInput'
function Login() {
  const [mobilenumber, setMobilenumber] = useState('');
  const [otp, setOtp] = useState(false);
  console.log("🚀 ~ Login ~ otp:", otp)

  function validateMobile(mobilenumber) {   
    var regmm='^([0|+[0-9]{1,5})?([7-9][0-9]{9})$';
    var regmob = new RegExp(regmm);
    if(regmob.test(mobilenumber)){
        return true;
    } else {
        return false;
    }    
}

  const generateOtp = () => {
    if(!validateMobile(mobilenumber)){
        alert('Enter valid mobile number')
    }else {
        setOtp(true);
    }
  };

  function onOtpSubmit(){
    console.log("Login successfull")
  }

  return (
    !otp ? (
      <div>
        <h1>Enter your mobile number</h1>
        <input
          type='text'
          placeholder='Enter mobile number'
          onChange={(e) => setMobilenumber(e.target.value)}
        />
        <button onClick={generateOtp}>Submit</button>
      </div>
    ) : (
      <div>
        <h2>OTP sent to {mobilenumber}</h2>
        {otp ? <OtpInput length={4} onSubmit={onOtpSubmit}/> : null}
      </div>
    )
  );
}

export default Login;
