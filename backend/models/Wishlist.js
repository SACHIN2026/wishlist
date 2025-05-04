import mongoose from "mongoose";

const wishlistSchema = mongoose.Schema({
    name: String,
    createdBy: String,
    description: String,
    priority: String,
    dueDate: Date,
    users: [String],
    products: [
        {
            name: String,
            imageUrl: String,
            price: Number,
            addedBy: String,
            updatedAt: Date,
        }
    ]
});

export default mongoose.model('Wishlist', wishlistSchema);