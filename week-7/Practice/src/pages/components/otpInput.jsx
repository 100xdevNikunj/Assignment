import React, { useEffect, useRef, useState } from "react";
import './otpstyle.css'

const otpInput = ({ length, onSubmit }) => {
  console.log("length=>", length);
  const [otp, setOtp] = useState(new Array(length).fill(""));

  const otpInputRefs = Array.from({ length }, () => useRef(null));

  useEffect(() => {
    if (otpInputRefs[0].current) {
      otpInputRefs[0].current.focus();
    }
  }, []);

  function handleChange(index, e) {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);
  }
  

  function handleClick(index){

  }

  function handleKeyDown(index, e){

  }
  return (
    <div>
      {otp.map((value, index) => {
        return (
            <input
                key={index}
                type="text"
                value={value}
                onChange={(e) => handleChange(index, e)}
                onClick={()=> handleClick(index)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="otpinput"
                ref={otpInputRefs[index]}
            />
        );
      })}
    </div>
  );
};

export default otpInput;
