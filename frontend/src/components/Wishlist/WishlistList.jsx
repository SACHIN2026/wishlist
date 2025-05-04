import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function WishlistList() {
    const [wishlists, setWishlists] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchWishlists = async () => {
            try {
                const stored = localStorage.getItem('user');
                const token = localStorage.getItem('token');
                if (!stored || !token) { navigate('/login'); return; }
                const user = JSON.parse(stored);
                const response = await axios.get('/api/wishlist', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setWishlists(response.data);
            } catch (error) {
                console.error('Error fetching wishlists:', error);
                setError('Could not load wishlists.');
                setWishlists([]);
            }
        };
        fetchWishlists();
    }, [navigate]);

    if (error) return <div className="p-4 text-red-600 text-center">{error}</div>;
    if (wishlists === null) return <div className="p-4 text-gray-600 text-center">Loading…</div>;
    if (wishlists.length === 0) {
        return (
            <div className="p-4 text-center">
                <p>No wishlists yet.</p>
                <Link to="/wishlists/create" className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded">
                    Create One
                </Link>
            </div>
        );
    }

    return (
        <div className="p-4 md:p-8">
            <h2 className="text-3xl font-semibold mb-6">Your Wishlists</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishlists.map((wishlist) => (
                    <Link
                        key={wishlist._id}
                        to={`/wishlists/${wishlist._id}`}
                        className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition block"
                    >
                        <h3 className="text-xl font-medium mb-2">{wishlist.name}</h3>
                        <p className="text-gray-500 text-sm">{wishlist.products?.length || 0} items</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default WishlistList;
