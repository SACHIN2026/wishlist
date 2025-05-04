import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const user = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <nav className="bg-white shadow px-4 py-3 flex items-center justify-between md:px-8">
            <Link to="/" className="text-2xl font-bold text-blue-600">WishList</Link>

            <button
                className="md:hidden text-gray-600 focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                {menuOpen ? '✖' : '☰'}
            </button>

            <div
                className={`${menuOpen ? 'block' : 'hidden'
                    } md:flex md:items-center md:gap-6 transition-all duration-300 ease-in-out`}
            >
                {user ? (
                    <>
                        <Link to="/wishlists" className="text-gray-700 hover:text-blue-600">Wishlists</Link>
                        <Link
                            to="/wishlists/create"
                            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                        >
                            Create Wishlist
                        </Link>
                        <button
                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
                        <Link to="/register" className="text-gray-700 hover:text-blue-600">Register</Link>
                    </>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
