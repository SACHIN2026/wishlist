import express from 'express';
import {
    createWishlist,
    getWishlists,
    addProduct,
    removeProduct
} from '../controllers/wishlistController.js';

const router = express.Router();

router.post('/', createWishlist);
router.get('/', getWishlists);
router.post('/:wishlistId/products', addProduct);
router.delete('/:wishlistId/products/:productIndex', removeProduct);

export default router;
