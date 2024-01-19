// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <Link to="/QS1">Go to QS1</Link>
      <br></br>
      <Link to="/QS2">Go to QS2</Link>
      <br></br>
      <Link to="/QS3">Go to QS3</Link>
      <br></br>
      <Link to="/QS4">Go to QS4</Link>
      <br></br>
      <Link to="/QS5">Go to QS5</Link>
      <br></br>
      <Link to="/QS6">Go to QS6</Link>
      <br></br>
      <Link to="/QS7">Go to QS7</Link>
  </div>
  );
};

export default Home;
