import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [username, setUsername]= useState('');
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');
  const navigate= useNavigate();

  const handleRegister = async e => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/register', { username, email, password });
      navigate('/login');
    } catch {
      alert('Registration failed. Try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form onSubmit={handleRegister} className="w-full max-w-md bg-white p-6 rounded-xl shadow space-y-5">
        <h2 className="text-3xl font-semibold text-center text-blue-600">Create Account</h2>
        <input
          placeholder="Username"
          className="w-full border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
