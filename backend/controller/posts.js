"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dislikePost = exports.likePost = exports.deletePost = exports.updatePost = exports.uploadPost = exports.getSinglePost = exports.getPosts = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const postMeme_js_1 = __importDefault(require("../models/postMeme.js"));
const getPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const postMemes = yield postMeme_js_1.default.find({});
        return res.status(200).json(postMemes);
    }
    catch (error) {
        return res.status(404).json(error);
    }
});
exports.getPosts = getPosts;
const getSinglePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id: postID } = req.params;
        const singlePost = yield postMeme_js_1.default.findById({ _id: postID });
        if (!mongoose_1.default.Types.ObjectId.isValid(postID)) {
            return res.status(404).send({ data: `No post with ID: ${postID}` });
        }
        ;
        return res.status(200).json(singlePost);
    }
    catch (error) {
        return res.status(404).json(error);
    }
});
exports.getSinglePost = getSinglePost;
const uploadPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = req.body;
        const newPost = new postMeme_js_1.default(post);
        yield newPost.save();
        return res.status(201).json(newPost);
    }
    catch (error) {
        return res.status(409).json(error);
    }
});
exports.uploadPost = uploadPost;
const updatePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id: postID } = req.params;
        const post = req.body;
        if (!mongoose_1.default.Types.ObjectId.isValid(postID)) {
            return res.status(404).send({ data: `No post with ID: ${postID}` });
        }
        ;
        const updatedPost = yield postMeme_js_1.default.findByIdAndUpdate(postID, Object.assign(Object.assign({}, post), { postID }), { new: true });
        return res.json(updatedPost);
    }
    catch (error) {
        return res.status(404).json(error);
    }
});
exports.updatePost = updatePost;
const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id: postID } = req.params;
        if (!mongoose_1.default.Types.ObjectId.isValid(postID)) {
            return res.status(404).send({ data: `No post with ID: ${postID}` });
        }
        ;
        const post = yield postMeme_js_1.default.findByIdAndDelete(postID);
        return res.json({
            post,
            message: `Post with ID: ${postID} has been successfully deleted.`
        });
    }
    catch (error) {
        return res.status(404).json(error);
    }
});
exports.deletePost = deletePost;
const likePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id: postID } = req.params;
        if (!mongoose_1.default.Types.ObjectId.isValid(postID)) {
            return res.status(404).send({ data: `No post with ID: ${postID}` });
        }
        ;
        const post = yield postMeme_js_1.default.findById(postID);
        const updatedPost = yield postMeme_js_1.default.findByIdAndUpdate(postID, { likes: post.likes + 1 }, { new: true });
        return res.json(updatedPost);
    }
    catch (error) {
        return res.status(404).json(error);
    }
});
exports.likePost = likePost;
const dislikePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id: postID } = req.params;
        if (!mongoose_1.default.Types.ObjectId.isValid(postID)) {
            return res.status(404).send({ data: `No post with ID: ${postID}` });
        }
        ;
        const post = yield postMeme_js_1.default.findById(postID);
        const updatedPost = yield postMeme_js_1.default.findByIdAndUpdate(postID, { dislikes: post.dislikes + 1 }, { new: true });
        return res.json(updatedPost);
    }
    catch (error) {
        return res.status(404).json(error);
    }
});
exports.dislikePost = dislikePost;
