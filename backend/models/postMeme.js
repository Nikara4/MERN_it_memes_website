import mongoose from 'mongoose';
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        default: '',
        required: true,
    },
    author: String,
    name: String,
    userName: String,
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
