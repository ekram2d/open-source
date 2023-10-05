import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 m-4">
      <div className="flex items-center justify-between">
        <img
          src={user.profilePicture}
          alt={user.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="ml-4">
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-500">{user.country}</p>
        </div>
      </div>
      <div className="mt-4">
        <a
          href={`https://www.linkedin.com/in/${user.linkedinId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          LinkedIn Profile
        </a>
        <br />
        <a
          href={`https://www.facebook.com/${user.facebookId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Facebook Profile
        </a>
      </div>
      <div className="mt-4 border-t border-gray-200 pt-4 text-sm text-gray-500">
        <p>Friends · 500+</p>
        <p>Works at {user.company}</p>
        <p>Lives in {user.location}</p>
        <p>Birthday: {user.birthday}</p>
      </div>
    </div>
  );
};

export default UserProfile;
