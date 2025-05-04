import Wishlist from "../models/Wishlist.js";

export const createWishlist = async (req, res) => {
    const { name, createdBy } = req.body;
    const wishlist = new Wishlist({ name, createdBy, users: [createdBy], products: [] });
    await wishlist.save();
    res.json(wishlist);
};

export const getWishlists = async (req, res) => {
    const wishlists = await Wishlist.find({ users: req.query.user });
    res.json(wishlists);
};

export const addProduct = async (req, res) => {
    const { wishlistId } = req.params;
    const { name, imageUrl, price, addedBy } = req.body;
    const wishlist = await Wishlist.findById(wishlistId);
    wishlist.products.push({ name, imageUrl, price, addedBy, updatedAt: new Date() });
    await wishlist.save();
    res.json(wishlist);
};

export const removeProduct = async (req, res) => {
    const { wishlistId, productIndex } = req.params;
    const wishlist = await Wishlist.findById(wishlistId);
    wishlist.products.splice(productIndex, 1);
    await wishlist.save();
    res.json(wishlist);
};