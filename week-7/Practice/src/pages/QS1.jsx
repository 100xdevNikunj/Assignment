import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProfileCard.css'; 

export default function ProfileCard() {
  return (
    <div className="profile-card">
      <Link to="/" className="text-blue-500 hover:underline">
        Go to Home
      </Link>
      <hr />
      <div className="card-container">
        <div className="cover-image">
          <img
            src="https://picsum.photos/800/600"
            alt="Cover Placeholder"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="profile-details">
          <img
            src="https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
            alt="Profile Image"
            className="profile-image"
          />
          <div className="name-age">
            <h3>HERO Oboroi</h3>
            <span>45</span>
          </div>
          <div className="country">America</div>
          <br />
          <hr />
          <div className="follower-details-container">
            <div className="follower-details">
              <div className="follower-count">80k</div>
              <div className="follower-label">Followers</div>
            </div>
            <div className="follower-details">
              <div className="follower-count">802</div>
              <div className="follower-label">Post</div>
            </div>
            <div className="follower-details">
              <div className="follower-count">10M</div>
              <div className="follower-label">Likes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
