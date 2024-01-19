import React from 'react';
import { Link } from 'react-router-dom';

export default function QS2() {
  const colors = ['red', 'green', 'blue', 'purple', 'orange', 'yellow', 'pink', 'black'];

  function colorchange(color) {
    console.log(color);
    document.getElementById("background").style.backgroundColor = color;
  }

  return (
    <div>
      <Link to="/">Go to Home</Link>
      <hr />
      <div id='background' style={{ height: '100vh', position: 'relative' }}>
        <div className='buttons' style={{ position: 'absolute', bottom: '150px', left: '50%', transform: 'translateX(-50%)', padding: '10px', display: 'flex', justifyContent: 'center' }}>
          {colors.map((color, index) => (
            <button
              key={index}
              style={{ backgroundColor: color, borderRadius: '15px', margin: '15px', padding: '10px 25px', border: 'none', cursor: 'pointer' }}
              onClick={() => colorchange(color)}
            >
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
