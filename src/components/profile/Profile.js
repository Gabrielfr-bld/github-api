import React from 'react';
import UserDetails from './userDetails/UserDetails';
import UserImage from './UserImage';

function Profile() {
  return (
    <div>
      <UserImage />
      <UserDetails />
    </div>
  );
}

export default Profile;