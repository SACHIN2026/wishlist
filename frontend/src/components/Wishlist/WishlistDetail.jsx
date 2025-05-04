import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductForm from './ProductForm';
import { useParams } from 'react-router-dom';

function WishlistDetail() {
    const { id } = useParams();
    const [wishlist, setWishlist] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchDetail = async () => {
            setLoading(true);
            try {
                const token = localStorage.getItem('token');
                if (!token) throw new Error('Not authenticated');
                const res = await axios.get(`/api/wishlist/${id}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setWishlist(res.data);
            } catch (err) {
                console.error('Error fetching wishlist:', err);
                setError(err.response?.data?.error || err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchDetail();
    }, [id]);

    if (loading) return <p className="p-4 text-center">Loading...</p>;
    if (error) return <p className="p-4 text-center text-red-500">{error}</p>;

    return (
        <div className="p-4 md:p-8">
            <h2 className="text-4xl font-semibold mb-4">{wishlist.name}</h2>
            <p className="mb-4 text-gray-600">{wishlist.description || 'No description provided.'}</p>
            <div className="mb-6">
                <ProductForm
                    wishlistId={id}
                    onAdded={updatedWishlist => setWishlist(updatedWishlist)}
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishlist.products.length > 0 ? (
                    wishlist.products.map((p, i) => (
                        <div key={i} className="bg-white rounded-xl shadow p-4 flex flex-col">
                            <img src={p.imageUrl} alt={p.name} className="h-40 object-cover rounded-md mb-3" />
                            <h3 className="text-lg font-medium">{p.name}</h3>
                            <p className="text-sm text-gray-500">Added by: {p.addedBy}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No items in this wishlist yet.</p>
                )}
            </div>
        </div>
    );
}

export default WishlistDetail;
