import express from 'express';

import auth from '../middleware/auth.js'
import { signIn, signUp, authUser, signOut } from '../controller/user.js';
import passport from 'passport';

const router = express.Router();

router.post('/signin', signIn);
router.post('/signup', signUp);
router.get('/protected', passport.authenticate('jwt', { session: false }), authUser);
router.get('/logout', signOut);

export default router;
