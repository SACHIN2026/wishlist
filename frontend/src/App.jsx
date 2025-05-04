import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Shared/Navbar';
import Home from './pages/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import WishlistList from './components/Wishlist/WishlistList';
import WishlistCreate from './components/Wishlist/WishlistCreate';
import WishlistDetail from './components/Wishlist/WishlistDetail';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/wishlists" element={<WishlistList />} />
          <Route path="/wishlists/create" element={<WishlistCreate />} />
          <Route path="/wishlists/:id" element={<WishlistDetail />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
