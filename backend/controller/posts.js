var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import mongoose from 'mongoose';
import PostMeme from '../models/postMeme.js';
export const getPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const postMemes = yield PostMeme.find({});
        return res.status(200).json(postMemes);
    }
    catch (error) {
        return res.status(404).json(error);
    }
});
export const getSinglePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id: postID } = req.params;
        const singlePost = yield PostMeme.findById({ _id: postID });
        if (!mongoose.Types.ObjectId.isValid(postID)) {
            return res.status(404).send({ data: `No post with ID: ${postID}` });
        }
        ;
        return res.status(200).json(singlePost);
    }
    catch (error) {
        return res.status(404).json(error);
    }
});
export const uploadPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = req.body;
        const newPost = new PostMeme(post);
        yield newPost.save();
        return res.status(201).json(newPost);
    }
    catch (error) {
        return res.status(409).json(error);
    }
});
export const updatePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id: postID } = req.params;
        const post = req.body;
        if (!mongoose.Types.ObjectId.isValid(postID)) {
            return res.status(404).send({ data: `No post with ID: ${postID}` });
        }
        ;
        const updatedPost = yield PostMeme.findByIdAndUpdate(postID, Object.assign(Object.assign({}, post), { postID }), { new: true });
        return res.json(updatedPost);
    }
    catch (error) {
        return res.status(404).json(error);
    }
});
export const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id: postID } = req.params;
        if (!mongoose.Types.ObjectId.isValid(postID)) {
            return res.status(404).send({ data: `No post with ID: ${postID}` });
        }
        ;
        const post = yield PostMeme.findByIdAndDelete(postID);
        return res.json({
            post,
            message: `Post with ID: ${postID} has been successfully deleted.`
        });
    }
    catch (error) {
        return res.status(404).json(error);
    }
});
export const likePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id: postID } = req.params;
        if (!mongoose.Types.ObjectId.isValid(postID)) {
            return res.status(404).send({ data: `No post with ID: ${postID}` });
        }
        ;
        const post = yield PostMeme.findById(postID);
        const updatedPost = yield PostMeme.findByIdAndUpdate(postID, { likes: post.likes + 1 }, { new: true });
        return res.json(updatedPost);
    }
    catch (error) {
        return res.status(404).json(error);
    }
});
export const dislikePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id: postID } = req.params;
        if (!mongoose.Types.ObjectId.isValid(postID)) {
            return res.status(404).send({ data: `No post with ID: ${postID}` });
        }
        ;
        const post = yield PostMeme.findById(postID);
        const updatedPost = yield PostMeme.findByIdAndUpdate(postID, { dislikes: post.dislikes + 1 }, { new: true });
        return res.json(updatedPost);
    }
    catch (error) {
        return res.status(404).json(error);
    }
});
