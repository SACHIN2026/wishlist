import React, { useState } from 'react';
import axios from 'axios';

function ProductForm({ wishlistId, onAdded }) {
    const [name, setName] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleAdd = async e => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const res = await axios.post(
                `/api/wishlist/${wishlistId}/products`,
                { name, imageUrl },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            onAdded(res.data);
            setName('');
            setImageUrl('');
        } catch {
            alert('Could not add product.');
        }
    };

    return (
        <form onSubmit={handleAdd} className="bg-white p-5 rounded-xl shadow space-y-4">
            <h3 className="text-xl font-semibold">Add New Item</h3>
            <input
                placeholder="Item name"
                className="w-full border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={name}
                onChange={e => setName(e.target.value)}
                required
            />
            <input
                type="url"
                placeholder="Image URL"
                className="w-full border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={imageUrl}
                onChange={e => setImageUrl(e.target.value)}
                required
            />
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
                Add Item
            </button>
        </form>
    );
}

export default ProductForm;
