import express from 'express';

// import { auth } from '../middleware/auth.js'
import { getPosts,
    getSinglePost,
    uploadPost,
    updatePost,
    deletePost,
    dislikePost,
    likePost } from '../controller/posts.js'

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getSinglePost);
router.post("/", uploadPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/:id/like", likePost);
router.patch("/:id/dislike", dislikePost);

export default router;
