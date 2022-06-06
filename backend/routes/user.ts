import express from 'express';

import { signIn, signUp, signOut } from '../controller/user.js';
import passport from 'passport';

const router = express.Router();

router.post('/signin', signIn);
router.post('/signup', signUp);
// router.get('/protected', passport.authenticate('jwt', { session: false }), authUser);
router.get('/logout', signOut);

export default router;
