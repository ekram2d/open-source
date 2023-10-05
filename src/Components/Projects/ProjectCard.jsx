import React from 'react';
import HeartButton from '../Card/HeartButton';


const Card = ({ project }) => {
  return (
<div className="col-span-1 cursor-pointer group w-64 shadow-2xl rounded-xl p-2">
      <div className="flex flex-col gap-2">
        <div className="aspect-3/4 relative overflow-hidden rounded-xl">
          <img
            className="object-cover h-full w-full group-hover:scale-110 transition"
            src={project.projectImage}
            alt={project.projectName}
          />
          <div className="absolute top-3 right-3">
            <HeartButton />
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title text-xl font-semibold">
            {project.projectName}
          </h2>
          <p className="text-sm mt-2">{project.projectDescription}</p>
          <div className="card-actions justify-end mt-4">
            <a href={project.downloadLink} className="btn btn-primary">
              Download Now
            </a>
          </div>
        </div>
        <div className="card-footer mt-4">
          <ul className="list-none p-0 m-0 text-sm">
            <li>
              <strong>Tutorial:</strong> {project.tutorial}
            </li>
            <li>
              <strong>Chat Service Code:</strong> {project.chatServiceCode}
            </li>
            <li>
              <strong>Platform:</strong> {project.platform}
            </li>
            <li>
              <strong>Email Address:</strong> {project.emailAddress}
            </li>
            <li>
              <strong>Website Link:</strong>
              <a
                href={project.websiteLink}
                className="text-indigo-500 hover:underline"
              >
                Visit Website
              </a>
            </li>
            <li>
              <strong>Social Media Accounts:</strong>{' '}
              {project.socialMediaAccounts}
            </li>
            {project.mobileNumber && (
              <li>
                <strong>Mobile Number:</strong> {project.mobileNumber}
              </li>
            )}
            <li>
              <strong>Skills Required:</strong> {project.skillsRequired}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
