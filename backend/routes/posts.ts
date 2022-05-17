import express from 'express';

import {
  getPosts,
  getSinglePost,
  uploadPost,
  updatePost,
  deletePost,
  dislikePost,
  likePost,
} from '../controller/posts.js';
import * as passportConfig from '../passportConfig.js';

const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getSinglePost);
router.post('/', passportConfig.isAuthenticated, uploadPost);
router.patch('/:id', passportConfig.isAuthenticated, updatePost);
router.delete('/:id', passportConfig.isAuthenticated, deletePost);
router.patch('/:id/like', passportConfig.isAuthenticated, likePost);
router.patch('/:id/dislike', passportConfig.isAuthenticated, dislikePost);

export default router;
