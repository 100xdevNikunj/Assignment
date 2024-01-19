import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import '../styles/GitHubInfoCard.css'; 

const GitHubInfoCard = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      console.log("data", data);
      setUserData(data);
    } catch (error) {
      console.error('Error fetching GitHub data:', error);
    }
  }, [username]);

  return (
    <>
      <Link to="/">Go to Home</Link>
      <hr />
      <div className="github-info-card">
        <h2>GitHub Info Card</h2>
        <div>
          <label htmlFor="username">Enter GitHub Username: </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        <button onClick={fetchData}>Fetch GitHub Data</button>
        </div>
        {userData && (
          <div className="card">
            <img className="avatar" src={userData.avatar_url} alt={`${userData.login}'s avatar`} />
            <div className="user-details">
              <h3>{userData.name || userData.login}</h3>
              <p>{userData.bio}</p>
              <p>Followers: {userData.followers}</p>
              <p>Following: {userData.following}</p>
              <p>Location: {userData.location}</p>
              <p>Public Repo: {userData.public_repos}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default GitHubInfoCard;
