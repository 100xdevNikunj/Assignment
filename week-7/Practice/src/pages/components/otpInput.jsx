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
    const lastStringCharacter = e.target.value.slice(-1);
    const isNumber = /^\d+$/.test(lastStringCharacter);
    
    // If it's a number, set lastNumber
    const lastNumber = isNumber ? lastStringCharacter : null;
  
    newOtp[index] = lastNumber;
    setOtp(newOtp);
  
    // Move to the next input field if a number is entered
    if (isNumber && index < length - 1) {
      otpInputRefs[index + 1].current.focus();
    }

    const combineOTP = newOtp.join("");
    if(combineOTP.length==length) onSubmit(combineOTP)
  }  
  

  function handleClick(index) {
    if (otpInputRefs[index].current) {
      const input = otpInputRefs[index].current;
      const length = input.value.length;
      input.setSelectionRange(length, length);
      input.focus();
    }
  }
  
  function handleKeyUp(index, e) {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
  
      if (index > 0) {
        otpInputRefs[index - 1].current.focus();
      }
    }
  }

  function handleKeyDown(index, e) {
    // Prevent non-numeric input
    if (e.key.length === 1 && !/^\d+$/.test(e.key)) {
      e.preventDefault();
      alert("Please enter a number");
    } 
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
                onKeyUp={(e) => handleKeyUp(index, e)}
                className="otpinput"
                ref={otpInputRefs[index]}
            />
        );
      })}
    </div>
  );
};

export default otpInput;
