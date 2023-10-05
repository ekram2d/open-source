import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-80">
        <h1 className="text-4xl text-red-500 font-bold mb-4">Oops!</h1>
        <p className="text-gray-700 text-lg mb-4">Something went wrong.</p>
        <p className="text-gray-700 text-sm">
          Please try again later or contact support.
        </p>
        <button className="btn btn-sm bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-blue-600">
         <Link to='/'> Back to Home</Link>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
