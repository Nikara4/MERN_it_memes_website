import express from 'express';
import { signIn, signUp, getUser } from '../controller/user.js';
const router = express.Router();
router.post('/signin', signIn);
router.post('/signup', signUp);
router.get('/getuser', getUser);
export default router;
