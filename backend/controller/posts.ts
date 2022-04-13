import mongoose from 'mongoose';
import { Request, Response, NextFunction } from 'express';
import PostMeme from '../models/postMeme.js';
import { asyncWrapper } from '../middleware/asyncWrapper.js';
import { createCustomError } from '../middleware/customError.js';

export const getPosts = asyncWrapper(async (req: Request, res: Response) => {
        const postMemes = await PostMeme.find({});
        res.status(200).json({ postMemes });
})

export const getSinglePost = asyncWrapper(async (req: Request, res: Response, next: NextFunction) => {
    const { id: postID } = req.params;
    const singlePost = await PostMeme.findOne({ _id: postID });
    if (!singlePost) next(createCustomError(`No post with ID: ${postID}`, 404));
    res.status(201).json(singlePost);
})

export const createPost = async (req: Request, res: Response) => {
    const post = req.body;
    const newPost = new PostMeme(post);
    await newPost.save();
    res.status(201).json(newPost);
}

export const updatePost = asyncWrapper(async (req: Request, res: Response, next: NextFunction) => {
    const { id: postID } = req.params;
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(postID)) next(createCustomError(`No post with ID: ${postID}`, 404));

    const updatedPost = await PostMeme.findByIdAndUpdate(
        postID,
        { ...post, postID },
        { new: true }
    );

    res.status(204).json(updatedPost);
});

export const deletePost = asyncWrapper(async (req: Request, res: Response, next: NextFunction) => {
    const { id: postID } = req.params;

    if(!mongoose.Types.ObjectId.isValid(postID)) next(createCustomError(`No post with ID: ${postID}`, 404));

    const post = await PostMeme.findByIdAndDelete(postID);

    res.status(204).json(post);
});

export const likePost = async (req: Request, res: Response,  next: NextFunction) => {
    const { id: postID } = req.params;

    if(!mongoose.Types.ObjectId.isValid(postID)) next(createCustomError(`No post with ID: ${postID}`, 404));

    const post = await PostMeme.findById(postID);
    const updatedPost = await PostMeme.findByIdAndUpdate(
        postID,
        { likeCount: post.likeCount + 1 },
        { new: true }
    );

    res.status(204).json(updatedPost);
}

export const dislikePost = async (req: Request, res: Response,  next: NextFunction) => {
    const { id: postID } = req.params;

    if(!mongoose.Types.ObjectId.isValid(postID)) next(createCustomError(`No post with ID: ${postID}`, 404));

    const post = await PostMeme.findById(postID);
    const updatedPost = await PostMeme.findByIdAndUpdate(
        postID,
        { dislike: post.dislike + 1 },
        { new: true }
    );

    res.status(204).json(updatedPost);
}