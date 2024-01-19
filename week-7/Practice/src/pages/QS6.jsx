import React from 'react';
import { Link } from 'react-router-dom';
import Login from './components/login'; 

export default function QS6(){
  return (
    <div>
      <Link to="/">Go to Home</Link>
      <h2>QS6</h2>
      <hr></hr>
      <Login /> 
    </div>
  )
}