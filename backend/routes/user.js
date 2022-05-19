import express from 'express';
import { signIn, signUp, fetchUser } from '../controller/user.js';
const router = express.Router();
router.post('/signin', signIn);
router.post('/signup', signUp);
router.get('/', fetchUser);
export default router;
