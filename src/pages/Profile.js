import React from 'react';
import MyProfile from '../components/MissionProfile';
import MyRocket from '../components/RocketProfile';
import './profile.css';

function Profile() {
  return (
    <div className="profile-container">
      <div>
        <MyProfile />
      </div>
      <div>
        <MyRocket />
      </div>
    </div>
  );
}

export default Profile;
