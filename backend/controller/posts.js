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
exports.dislikePost = exports.likePost = exports.deletePost = exports.updatePost = exports.createPost = exports.getSinglePost = exports.getPosts = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const postMeme_js_1 = __importDefault(require("../models/postMeme.js"));
const asyncWrapper_js_1 = require("../middleware/asyncWrapper.js");
const customError_js_1 = require("../middleware/customError.js");
exports.getPosts = (0, asyncWrapper_js_1.asyncWrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const postMemes = yield postMeme_js_1.default.find({});
    res.status(200).json({ postMemes });
}));
exports.getSinglePost = (0, asyncWrapper_js_1.asyncWrapper)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id: postID } = req.params;
    const singlePost = yield postMeme_js_1.default.findOne({ _id: postID });
    if (!singlePost)
        next((0, customError_js_1.createCustomError)(`No post with ID: ${postID}`, 404));
    res.status(201).json(singlePost);
}));
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const post = req.body;
    const newPost = new postMeme_js_1.default(post);
    yield newPost.save();
    res.status(201).json(newPost);
});
exports.createPost = createPost;
exports.updatePost = (0, asyncWrapper_js_1.asyncWrapper)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id: postID } = req.params;
    const post = req.body;
    if (!mongoose_1.default.Types.ObjectId.isValid(postID))
        next((0, customError_js_1.createCustomError)(`No post with ID: ${postID}`, 404));
    const updatedPost = yield postMeme_js_1.default.findByIdAndUpdate(postID, Object.assign(Object.assign({}, post), { postID }), { new: true });
    res.status(204).json(updatedPost);
}));
exports.deletePost = (0, asyncWrapper_js_1.asyncWrapper)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id: postID } = req.params;
    if (!mongoose_1.default.Types.ObjectId.isValid(postID))
        next((0, customError_js_1.createCustomError)(`No post with ID: ${postID}`, 404));
    const post = yield postMeme_js_1.default.findByIdAndDelete(postID);
    res.status(204).json(post);
}));
const likePost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id: postID } = req.params;
    if (!mongoose_1.default.Types.ObjectId.isValid(postID))
        next((0, customError_js_1.createCustomError)(`No post with ID: ${postID}`, 404));
    const post = yield postMeme_js_1.default.findById(postID);
    const updatedPost = yield postMeme_js_1.default.findByIdAndUpdate(postID, { likeCount: post.likeCount + 1 }, { new: true });
    res.status(204).json(updatedPost);
});
exports.likePost = likePost;
const dislikePost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id: postID } = req.params;
    if (!mongoose_1.default.Types.ObjectId.isValid(postID))
        next((0, customError_js_1.createCustomError)(`No post with ID: ${postID}`, 404));
    const post = yield postMeme_js_1.default.findById(postID);
    const updatedPost = yield postMeme_js_1.default.findByIdAndUpdate(postID, { dislike: post.dislike + 1 }, { new: true });
    res.status(204).json(updatedPost);
});
exports.dislikePost = dislikePost;
