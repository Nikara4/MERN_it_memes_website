import express from 'express';
import passport from 'passport';

import {
  getPosts,
  getSinglePost,
  uploadPost,
  updatePost,
  deletePost,
  dislikePost,
  likePost,
} from '../controller/posts.js';

const router = express.Router();

router.get('/', getPosts);
// router.get('/:id', passport.authenticate('jwt', { session: false }), getSinglePost);
// router.post('/', passport.authenticate('jwt', { session: false }), uploadPost);
// router.patch('/:id', passport.authenticate('jwt', { session: false }), updatePost);
// router.delete('/:id', passport.authenticate('jwt', { session: false }), deletePost);
// router.patch('/:id/like', passport.authenticate('jwt', { session: false }), likePost);
// router.patch('/:id/dislike', passport.authenticate('jwt', { session: false }), dislikePost);

export default router;
