import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import dotenv from 'dotenv';
import connectDB from './config/db.js'; // Fixed import syntax

const app = express();
dotenv.config();
connectDB();
app.use(cors());
app.use(express.json());

// Fixed require to use import syntax
import authRoutes from './routes/authRoutes.js';
import wishlistRoutes from './routes/wishlistRoutes.js';

app.use('/api/auth', authRoutes);
app.use('/api/wishlist', wishlistRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    // console.log(`MongoDB Connected: ${process.env.MONGODB_URI}`.cyan.underline);
})


