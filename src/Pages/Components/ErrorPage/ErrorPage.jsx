import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-honey">
      <div className="mt-4">
        <img
          src="https://media.tenor.com/1zi9Ppr4YDsAAAAi/travolta-lost.gif"
          alt="Travolta Lost GIF"
          className="w-200 h-200 object-contain"
        />
      </div>
      <div className="max-w-md mx-auto p-4 bg-white  rounded shadow-2xl mt-4">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
           Sorry 404
        </h1>
        <p className="text-gray-600 mb-4">
          An unexpected error occours ! Please try again
        </p>
        <Link to="/" className="text-blue-500 hover:underline">
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
