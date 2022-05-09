import mongoose from 'mongoose';
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        default: '',
        required: true,
    },
    author: String,
    tags: {
        type: [String],
        default: [],
        required: true,
    },
    selectedFile: {
        type: String,
        default: '',
        required: true,
    },
    likes: {
        type: Number,
        default: 0,
    },
    dislikes: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});
export default mongoose.model('PostMeme', postSchema);
