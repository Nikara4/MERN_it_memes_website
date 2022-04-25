"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const postSchema = new mongoose_1.default.Schema({
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
exports.default = mongoose_1.default.model('PostMeme', postSchema);
