import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
    // console.log(`MongoDB Connected: ${process.env.MONGODB_URI}`.cyan.underline);
})


