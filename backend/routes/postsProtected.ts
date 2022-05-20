import express from 'express';
import passport from 'passport';

import {
  getSinglePost,
  uploadPost,
  updatePost,
  deletePost,
  dislikePost,
  likePost,
} from '../controller/posts.js';
import { authUser } from '../controller/user.js';

const router = express.Router();

router.get('/', passport.authenticate('jwt', { session: false }), authUser);
router.get('/posts/:id', passport.authenticate('jwt', { session: false }), getSinglePost);
router.post('/posts/', passport.authenticate('jwt', { session: false }), uploadPost);
router.patch('/posts/:id', passport.authenticate('jwt', { session: false }), updatePost);
router.delete('/posts/:id', passport.authenticate('jwt', { session: false }), deletePost);
router.patch('/posts/:id/like', passport.authenticate('jwt', { session: false }), likePost);
router.patch('/posts/:id/dislike', passport.authenticate('jwt', { session: false }), dislikePost);

export default router;