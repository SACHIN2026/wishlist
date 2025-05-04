import Wishlist from '../models/Wishlist.js';

export const createWishlist = async (req, res, next) => {
    try {
        const { name, description, priority, dueDate, collaborators } = req.body;
        const userId = req.user.id;

        if (!name) {
            return res.status(400).json({ error: 'Wishlist name is required' });
        }

        const usersArray = Array.isArray(collaborators) ? [userId, ...collaborators] : [userId];

        const wishlist = await Wishlist.create({
            name,
            createdBy: userId,
            description: description || '',
            priority: priority || '',
            dueDate: dueDate ? new Date(dueDate) : null,
            users: usersArray,
            products: [],
        });

        res.status(201).json(wishlist);
    } catch (err) {
        next(err);
    }
};

export const getWishlists = async (req, res, next) => {
    try {
        const userId = req.user.id;  // ← captured by middleware
        const lists = await Wishlist.find({ users: userId });
        res.json(lists);
    } catch (err) {
        next(err);
    }
};

export const getWishlist = async (req, res, next) => {
    try {
        const { wishlistId } = req.params;
        const wishlist = await Wishlist.findById(wishlistId);
        if (!wishlist) {
            return res.status(404).json({ error: 'Wishlist not found' });
        }
        res.json(wishlist);
    } catch (err) {
        next(err);
    }
};

export const addProduct = async (req, res, next) => {
    try {
        const { wishlistId } = req.params;
        const { name, imageUrl } = req.body;
        const userId = req.user.id;

        if (!name || !imageUrl) {
            return res.status(400).json({ error: 'Name and imageUrl required' });
        }

        const wishlist = await Wishlist.findById(wishlistId);
        if (!wishlist) {
            return res.status(404).json({ error: 'Wishlist not found' });
        }

        wishlist.products.push({
            name,
            imageUrl,
            addedBy: userId,
            updatedAt: new Date(),
        });
        await wishlist.save();

        res.status(201).json(wishlist);
    } catch (err) {
        next(err);
    }
};

export const removeProduct = async (req, res, next) => {
    try {
        const { wishlistId, productIndex } = req.params;
        const wishlist = await Wishlist.findById(wishlistId);
        if (!wishlist) {
            return res.status(404).json({ error: 'Wishlist not found' });
        }
        if (productIndex < 0 || productIndex >= wishlist.products.length) {
            return res.status(400).json({ error: 'Invalid product index' });
        }
        wishlist.products.splice(productIndex, 1);
        await wishlist.save();
        res.json(wishlist);
    } catch (err) {
        next(err);
    }
};
