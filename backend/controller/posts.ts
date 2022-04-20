import mongoose from 'mongoose';
import { Request, Response } from 'express';
import PostMeme from '../models/postMeme.js';

export const getPosts = async (req: Request, res: Response) => {
    try {
        const postMemes = await PostMeme.find({});
        return res.status(200).json({ data: postMemes });
    } catch (error) {
        return res.status(404).json({ error });
    }
}

export const getSinglePost = async (req: Request, res: Response) => {
    try {
        const { id: postID } = req.params;
        const singlePost = await PostMeme.findById({ _id: postID });

        if (!mongoose.Types.ObjectId.isValid(postID)) {
            return res.status(404).send({data: `No post with ID: ${postID}`})
        };

        return res.status(200).json({ data: singlePost });
    } catch (error) {
        return res.status(404).json({ data: error });
    }
}

export const uploadPost = async (req: Request, res: Response) => {
    try {
        const post = req.body;
        const newPost = new PostMeme(post);

        await newPost.save();
        return res.status(201).json({ data: newPost });
    } catch (error) {
        return res.status(409).json(error);
    }
}

export const updatePost = async (req: Request, res: Response) => {
    try {
        const { id: postID } = req.params;
        const post = req.body;

        if (!mongoose.Types.ObjectId.isValid(postID)) {
            return res.status(404).send({data: `No post with ID: ${postID}`})
        };

        const updatedPost = await PostMeme.findByIdAndUpdate(
            postID,
            { ...post, postID },
            { new: true }
        );

        return res.status(204).json({ data: updatedPost });
    } catch (error) {
        return res.status(404).json({ error });
    }
};

export const deletePost = async (req: Request, res: Response) => {
    try {
        const { id: postID } = req.params;

        if (!mongoose.Types.ObjectId.isValid(postID)) {
            return res.status(404).send({data: `No post with ID: ${postID}`})
        };

        const post = await PostMeme.findByIdAndDelete(postID);

        return res.status(204).json({
            data: post,
            message: `Post with ID: ${postID} has been successfully deleted.`
        });
    } catch (error) {
        return res.status(404).json({ error });
    }
};

export const likePost = async (req: Request, res: Response) => {
    try {
        const { id: postID } = req.params;

        if (!mongoose.Types.ObjectId.isValid(postID)) {
            return res.status(404).send({data: `No post with ID: ${postID}`})
        };

        const post = await PostMeme.findById(postID);
        const updatedPost = await PostMeme.findByIdAndUpdate(
            postID,
            { likeCount: post.likeCount + 1 },
            { new: true }
        );

        return res.status(204).json({ data: updatedPost });
    } catch (error) {
        return res.status(404).json({ error });
    }
}

export const dislikePost = async (req: Request, res: Response) => {
    try {
        const { id: postID } = req.params;

        if (!mongoose.Types.ObjectId.isValid(postID)) {
            return res.status(404).send({data: `No post with ID: ${postID}`})
        };

        const post = await PostMeme.findById(postID);
        const updatedPost = await PostMeme.findByIdAndUpdate(
            postID,
            { dislike: post.dislike + 1 },
            { new: true }
        );

        return res.status(204).json({ data: updatedPost });
    } catch (error) {
        return res.status(404).json({ error });
    }
}