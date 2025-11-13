import React from 'react';
import { Link } from 'react-router-dom';


export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 bg-green-50 dark:bg-black">
      <h1 className="mb-4 text-6xl font-bold text-red-500">404</h1>
      <p className="mb-2 text-2xl font-semibold text-black dark:text-white">Oops! Page Not Found</p>
      <p className="mb-6 text-gray-600 dark:text-gray-200">
        The page you're looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-4 py-2 text-white transition bg-green-600 rounded-full hover:bg-green-700"
      >
        Go Home
      </Link>
    </div>
  );
}
