import mongoose from 'mongoose';
import { Request, Response } from 'express';
import PostMeme from '../models/postMeme.js';

export const getPosts = async (req: Request, res: Response) => {
  try {
    const postMemes = await PostMeme.find({});
    return res.status(200).json(postMemes);
  } catch (error) {
    return res.status(404).json(error);
  }
};

export const getSinglePost = async (req: Request, res: Response) => {
  try {
    const { id: postID } = req.params;
    const singlePost = await PostMeme.findById({ _id: postID });

    if (!mongoose.Types.ObjectId.isValid(postID)) {
      return res.status(404).send({ data: `No post with ID: ${postID}` });
    }

    return res.status(200).json(singlePost);
  } catch (error) {
    return res.status(404).json(error);
  }
};

export const uploadPost = async (req: Request, res: Response) => {
  try {
    const post = req.body;
    const newPost = new PostMeme({
      ...post,
      author: req.userId,
      // userName: ,
      createdAt: new Date().toString(),
    });

    await newPost.save();
    return res.status(201).json(newPost);
  } catch (error) {
    return res.status(409).json(error);
  }
};

export const updatePost = async (req: Request, res: Response) => {
  try {
    const { id: postID } = req.params;
    const post = req.body;

    if (!mongoose.Types.ObjectId.isValid(postID)) {
      return res.status(404).send({ data: `No post with ID: ${postID}` });
    }

    const updatedPost = await PostMeme.findByIdAndUpdate(
      postID,
      { ...post, postID },
      { new: true }
    );

    return res.json(updatedPost);
  } catch (error) {
    return res.status(404).json(error);
  }
};

export const deletePost = async (req: Request, res: Response) => {
  try {
    const { id: postID } = req.params;

    if (!mongoose.Types.ObjectId.isValid(postID)) {
      return res.status(404).send({ data: `No post with ID: ${postID}` });
    }

    const post = await PostMeme.findByIdAndDelete(postID);

    return res.json({
      post,
      message: `Post with ID: ${postID} has been successfully deleted.`,
    });
  } catch (error) {
    return res.status(404).json(error);
  }
};

export const likePost = async (req: Request, res: Response) => {
  try {
    const { id: postID } = req.params;

    if (!req.userId)
      return res.status(401).send({ message: `Unauthenticated.` });

    if (!mongoose.Types.ObjectId.isValid(postID)) {
      return res.status(404).send({ data: `No post with ID: ${postID}` });
    }

    const post = await PostMeme.findById(postID);

    const index = post.likes.findIndex(
      (id: string) => id === String(req.userId)
    );

    if (index === -1) {
      post.likes.push(req.userId);
    } else {
      post.likes = post.likes.filter((like: string) => like !== String(req.userId));
    }

    const updatedPost = await PostMeme.findByIdAndUpdate(postID, post, {
      new: true,
    });

    return res.json(updatedPost);
  } catch (error) {
    return res.status(404).json(error);
  }
};

export const dislikePost = async (req: Request, res: Response) => {
  try {
    const { id: postID } = req.params;

    if (!req.userId)
      return res.status(401).send({ message: `Unauthenticated.` });

    if (!mongoose.Types.ObjectId.isValid(postID)) {
      return res.status(404).send({ data: `No post with ID: ${postID}` });
    }

    const post = await PostMeme.findById(postID);

    const index = post.dislikes.findIndex(
      (id: string) => id === String(req.userId)
    );

    if (index === -1) {
      post.dislikes.push(req.userId);
    } else {
      post.dislikes = post.dislikes.filter((dislike: string) => dislike !== String(req.userId));
    }

    const updatedPost = await PostMeme.findByIdAndUpdate(postID, post, {
      new: true,
    });

    return res.json(updatedPost);
  } catch (error) {
    return res.status(404).json(error);
  }
};
