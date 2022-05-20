import express from 'express';
import { signIn, signUp, fetchUser, signOut } from '../controller/user.js';

const router = express.Router();

router.post('/signin', signIn);
router.post('/signup', signUp);
router.get('/', fetchUser);
router.get('/logout', signOut);

export default router;
