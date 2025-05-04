import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white px-4 text-center">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-4">Welcome to Wish List</h1>
      <p className="text-lg text-gray-600 mb-6">
        {user
          ? `Hi ${user.username}, manage your wishlists below.`
          : 'Create and share your wishlist with ease!'}
      </p>
      <Link
        to={user ? '/wishlists' : '/login'}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
      >
        {user ? 'View Wishlists' : 'Get Started'}
      </Link>
    </div>
  );
}

export default Home;
