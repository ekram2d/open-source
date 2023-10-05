import React from 'react';
import HeartButton from '../Card/HeartButton';

const ContributorProfile = ({ contributor }) => {
  const { name, username, profilePicture, linkedinId, facebookId, country } = contributor;

  return (
    <div className="col-span-1 cursor-pointer group">
      <div className="flex flex-col gap-2 w-full">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <img
            src={profilePicture}
            alt={name}
            className="object-cover h-full w-full group-hover:scale-110 transition"
          />
          <div className="absolute top-3 right-3">
            <HeartButton />
          </div>
        </div>
        <h2 className="font-semibold text-lg">{name}</h2>
        <p className="font-light text-neutral-500">@{username}</p>
        <p className="font-light text-neutral-500">Country: {country}</p>
        <p className="font-light text-neutral-500">LinkedIn: {linkedinId}</p>
        <p className="font-light text-neutral-500">Facebook: {facebookId}</p>
        {/* Add more information as needed */}
      </div>
    </div>
  );
};

export default ContributorProfile;
