import express from 'express';
// import { auth } from '../middleware/auth.js'
import { getPosts, getSinglePost, uploadPost, updatePost, deletePost, dislikePost, likePost } from '../controller/posts.js';
import auth from '../middleware/auth.js';
const router = express.Router();
router.get("/", getPosts);
router.get("/:id", getSinglePost);
router.post("/", auth, uploadPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.patch("/:id/like", auth, likePost);
router.patch("/:id/dislike", auth, dislikePost);
export default router;
