import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <h2 className="text-4xl font-bold mb-4">404 — Page Not Found</h2>
      <Link to="/" className="text-blue-600 hover:underline">Go Home</Link>
    </div>
  );
}

export default NotFound;
