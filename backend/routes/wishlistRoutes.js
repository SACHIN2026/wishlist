import express from 'express';
import { body, param } from 'express-validator';
import protect from '../middleware/auth.js';
import {
    createWishlist,
    getWishlists,
    getWishlist,
    addProduct,
    removeProduct
} from '../controllers/wishlistController.js';

const router = express.Router();

//new wishlist
router.post(
    '/',
    protect,
    [body('name').notEmpty().withMessage('Name required')],
    createWishlist
);

// Get all wishlists
router.get(
    '/',
    protect,
    getWishlists
);

// Get a single wishlist
router.get(
    '/:wishlistId',
    protect,
    getWishlist
);

// Add a product
router.post(
    '/:wishlistId/products',
    protect,
    [
        param('wishlistId').isMongoId().withMessage('Invalid wishlist ID'),
        body('name').notEmpty().withMessage('Product name required'),
        body('imageUrl').isURL().withMessage('Valid imageUrl required'),
    ],
    addProduct
);

// Remove a product by index
router.delete(
    '/:wishlistId/products/:productIndex',
    protect,
    [
        param('wishlistId').isMongoId(),
        param('productIndex').isInt({ min: 0 }).withMessage('Invalid index'),
    ],
    removeProduct
);

export default router;
