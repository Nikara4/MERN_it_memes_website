import express from 'express';

// import { auth } from '../middleware/auth.js'
import { getPosts,
    getSinglePost,
    createPost,
    updatePost,
    deletePost,
    dislikePost,
    likePost } from '../controller/posts.js'

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getSinglePost);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/:id/likePost", likePost);
router.patch("/:id/dislike", dislikePost);

export default router;
