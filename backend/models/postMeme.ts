import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    title: String,
    author: String,
    tags: [String],
    selectedFile: String,
    likes: {
        type: [String],
        default: [],
    },
    dislikes: {
        type: [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

export default mongoose.model('PostMeme', postSchema);