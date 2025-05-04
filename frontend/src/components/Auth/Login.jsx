import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail]=useState('');
  const [password,setPassword]=useState('');
  const navigate=useNavigate();

  const handleLogin = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/login', { email, password });
      localStorage.setItem('user', JSON.stringify(res.data.user));
      localStorage.setItem('token', res.data.token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
      navigate('/wishlists');
    } catch {
      alert('Login failed. Check credentials.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form onSubmit={handleLogin} className="w-full max-w-md bg-white p-6 rounded-xl shadow space-y-5">
        <h2 className="text-3xl font-semibold text-center text-blue-600">Login</h2>
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
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
